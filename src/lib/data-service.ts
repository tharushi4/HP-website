import { prisma, isDatabaseConnected } from './prisma';
import { 
  INITIAL_DESTINATIONS, 
  INITIAL_TOURS, 
  INITIAL_BOOKINGS, 
  INITIAL_REVIEWS 
} from './mock-data';
import { Destination, Tour, Booking, Review, SearchFilterParams } from '@/types';

// In-memory fallback stores for when PostgreSQL is not yet configured or reachable
let fallbackDestinations = [...INITIAL_DESTINATIONS];
let fallbackTours = [...INITIAL_TOURS];
let fallbackBookings = [...INITIAL_BOOKINGS];
let fallbackReviews = [...INITIAL_REVIEWS];

export async function getDestinations(filter?: { featured?: boolean; continent?: string }): Promise<Destination[]> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const where: any = {};
      if (filter?.featured !== undefined) where.featured = filter.featured;
      if (filter?.continent) where.continent = { contains: filter.continent, mode: 'insensitive' };
      
      const dbDestinations = await prisma.destination.findMany({
        where,
        include: { tours: true },
        orderBy: { createdAt: 'desc' },
      });
      if (dbDestinations.length > 0) {
        return dbDestinations as unknown as Destination[];
      }
    } catch (e) {
      console.warn('Postgres query fallback to memory:', e);
    }
  }

  // Fallback
  return fallbackDestinations.filter(d => {
    if (filter?.featured !== undefined && d.featured !== filter.featured) return false;
    if (filter?.continent && d.continent.toLowerCase() !== filter.continent.toLowerCase()) return false;
    return true;
  });
}

export async function getDestinationBySlug(slug: string): Promise<(Destination & { tours: Tour[] }) | null> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const dest = await prisma.destination.findUnique({
        where: { slug },
        include: { tours: true },
      });
      if (dest) return dest as unknown as (Destination & { tours: Tour[] });
    } catch (e) {
      console.warn('Postgres query fallback to memory:', e);
    }
  }

  const dest = fallbackDestinations.find(d => d.slug === slug);
  if (!dest) return null;
  const tours = fallbackTours.filter(t => t.destinationId === dest.id);
  return { ...dest, tours };
}

export async function getTours(params?: SearchFilterParams): Promise<Tour[]> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const where: any = {};
      if (params?.category) where.category = params.category;
      if (params?.difficulty) where.difficulty = params.difficulty;
      if (params?.query) {
        where.OR = [
          { title: { contains: params.query, mode: 'insensitive' } },
          { category: { contains: params.query, mode: 'insensitive' } },
        ];
      }
      if (params?.maxPrice) {
        where.price = { lte: params.maxPrice };
      }

      const dbTours = await prisma.tour.findMany({
        where,
        include: { destination: true },
        orderBy: { rating: 'desc' },
      });
      if (dbTours.length > 0) {
        return dbTours as unknown as Tour[];
      }
    } catch (e) {
      console.warn('Postgres query fallback to memory:', e);
    }
  }

  // Fallback filter
  return fallbackTours.map(t => {
    const dest = fallbackDestinations.find(d => d.id === t.destinationId);
    return { ...t, destination: dest };
  }).filter(tour => {
    if (params?.category && tour.category.toLowerCase() !== params.category.toLowerCase()) return false;
    if (params?.difficulty && tour.difficulty.toLowerCase() !== params.difficulty.toLowerCase()) return false;
    if (params?.maxPrice && tour.price > params.maxPrice) return false;
    if (params?.query) {
      const q = params.query.toLowerCase();
      const matchTitle = tour.title.toLowerCase().includes(q);
      const matchDest = tour.destination?.name.toLowerCase().includes(q) || tour.destination?.country.toLowerCase().includes(q);
      const matchCat = tour.category.toLowerCase().includes(q);
      if (!matchTitle && !matchDest && !matchCat) return false;
    }
    return true;
  });
}

export async function getTourBySlug(slug: string): Promise<(Tour & { destination: Destination; reviews: Review[] }) | null> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const tour = await prisma.tour.findUnique({
        where: { slug },
        include: {
          destination: true,
          reviews: { orderBy: { createdAt: 'desc' } },
        },
      });
      if (tour) return tour as unknown as (Tour & { destination: Destination; reviews: Review[] });
    } catch (e) {
      console.warn('Postgres query fallback to memory:', e);
    }
  }

  const tour = fallbackTours.find(t => t.slug === slug);
  if (!tour) return null;
  const destination = fallbackDestinations.find(d => d.id === tour.destinationId) || fallbackDestinations[0];
  const reviews = fallbackReviews.filter(r => r.tourId === tour.id);
  return { ...tour, destination, reviews };
}

export async function getTourById(id: string): Promise<(Tour & { destination: Destination }) | null> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const tour = await prisma.tour.findUnique({
        where: { id },
        include: { destination: true },
      });
      if (tour) return tour as unknown as (Tour & { destination: Destination });
    } catch (e) {
      console.warn('Postgres query fallback to memory:', e);
    }
  }

  const tour = fallbackTours.find(t => t.id === id);
  if (!tour) return null;
  const destination = fallbackDestinations.find(d => d.id === tour.destinationId) || fallbackDestinations[0];
  return { ...tour, destination };
}

export async function createBooking(data: {
  tourId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  travelDate: string;
  guestsCount: number;
  totalAmount: number;
  specialRequests?: string;
}): Promise<Booking> {
  const bookingCode = `TRV-${Math.floor(10000 + Math.random() * 90000)}`;
  const hasDb = await isDatabaseConnected();

  if (hasDb) {
    try {
      const newBooking = await prisma.booking.create({
        data: {
          bookingCode,
          tourId: data.tourId,
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          customerPhone: data.customerPhone,
          travelDate: new Date(data.travelDate),
          guestsCount: data.guestsCount,
          totalAmount: data.totalAmount,
          specialRequests: data.specialRequests || '',
          status: 'CONFIRMED',
        },
        include: { tour: { include: { destination: true } } },
      });
      return newBooking as unknown as Booking;
    } catch (e) {
      console.warn('Postgres create booking fallback:', e);
    }
  }

  const tour = fallbackTours.find(t => t.id === data.tourId);
  const dest = tour ? fallbackDestinations.find(d => d.id === tour.destinationId) : undefined;
  const tourWithDest = tour ? { ...tour, destination: dest } : undefined;

  const newBooking: Booking = {
    id: `book-${Date.now()}`,
    bookingCode,
    tourId: data.tourId,
    tour: tourWithDest,
    customerName: data.customerName,
    customerEmail: data.customerEmail,
    customerPhone: data.customerPhone,
    travelDate: new Date(data.travelDate),
    guestsCount: data.guestsCount,
    totalAmount: data.totalAmount,
    status: 'CONFIRMED',
    specialRequests: data.specialRequests,
    createdAt: new Date(),
  };

  fallbackBookings.unshift(newBooking);
  return newBooking;
}

export async function getBookingByCode(bookingCode: string): Promise<Booking | null> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const booking = await prisma.booking.findUnique({
        where: { bookingCode },
        include: {
          tour: {
            include: { destination: true },
          },
        },
      });
      if (booking) return booking as unknown as Booking;
    } catch (e) {
      console.warn('Postgres query fallback to memory:', e);
    }
  }

  const cleanCode = bookingCode.trim().toUpperCase();
  const found = fallbackBookings.find(b => b.bookingCode.toUpperCase() === cleanCode);
  if (!found) return null;

  const tour = fallbackTours.find(t => t.id === found.tourId);
  const dest = tour ? fallbackDestinations.find(d => d.id === tour.destinationId) : undefined;
  return {
    ...found,
    tour: tour ? { ...tour, destination: dest } : undefined,
  };
}

export async function getAllBookings(): Promise<Booking[]> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const bookings = await prisma.booking.findMany({
        include: {
          tour: {
            include: { destination: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
      if (bookings.length > 0) return bookings as unknown as Booking[];
    } catch (e) {
      console.warn('Postgres query fallback to memory:', e);
    }
  }

  return fallbackBookings.map(b => {
    const tour = fallbackTours.find(t => t.id === b.tourId);
    const dest = tour ? fallbackDestinations.find(d => d.id === tour.destinationId) : undefined;
    return { ...b, tour: tour ? { ...tour, destination: dest } : undefined };
  });
}

export async function updateBookingStatus(id: string, status: 'CONFIRMED' | 'PENDING' | 'COMPLETED' | 'CANCELLED'): Promise<Booking | null> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const updated = await prisma.booking.update({
        where: { id },
        data: { status },
        include: { tour: { include: { destination: true } } },
      });
      return updated as unknown as Booking;
    } catch (e) {
      console.warn('Postgres update booking fallback:', e);
    }
  }

  const idx = fallbackBookings.findIndex(b => b.id === id || b.bookingCode === id);
  if (idx === -1) return null;
  fallbackBookings[idx].status = status;
  return fallbackBookings[idx];
}

export async function createReview(data: {
  tourId: string;
  author: string;
  rating: number;
  comment: string;
  location?: string;
}): Promise<Review> {
  const hasDb = await isDatabaseConnected();
  if (hasDb) {
    try {
      const rev = await prisma.review.create({
        data: {
          tourId: data.tourId,
          author: data.author,
          rating: data.rating,
          comment: data.comment,
          location: data.location || '',
        },
      });
      // update tour average rating
      const reviews = await prisma.review.findMany({ where: { tourId: data.tourId } });
      const avg = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
      await prisma.tour.update({
        where: { id: data.tourId },
        data: { rating: Number(avg.toFixed(2)), reviewCount: reviews.length },
      });
      return rev as unknown as Review;
    } catch (e) {
      console.warn('Postgres review fallback:', e);
    }
  }

  const newReview: Review = {
    id: `rev-${Date.now()}`,
    tourId: data.tourId,
    author: data.author,
    rating: data.rating,
    comment: data.comment,
    location: data.location,
    createdAt: new Date().toISOString(),
  };

  fallbackReviews.unshift(newReview);
  return newReview;
}
