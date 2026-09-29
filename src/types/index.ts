export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  continent: string;
  description: string;
  heroImage: string;
  gallery: string[];
  bestTimeToVisit: string;
  currency: string;
  featured: boolean;
  tours?: Tour[];
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  meals: string;
  accommodation?: string;
  highlights?: string[];
}

export interface Tour {
  id: string;
  title: string;
  slug: string;
  destinationId: string;
  destination?: Destination;
  durationDays: number;
  price: number;
  discountPrice?: number | null;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  groupSize: number;
  category: 'Adventure' | 'Luxury' | 'Cultural' | 'Nature' | 'Wellness';
  highlights: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  rating: number;
  reviewCount: number;
  images: string[];
  featured: boolean;
  bookings?: Booking[];
  reviews?: Review[];
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface Booking {
  id: string;
  bookingCode: string;
  tourId: string;
  tour?: Tour;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  travelDate: string | Date;
  guestsCount: number;
  totalAmount: number;
  status: 'CONFIRMED' | 'PENDING' | 'COMPLETED' | 'CANCELLED';
  specialRequests?: string | null;
  createdAt: string | Date;
  updatedAt?: string | Date;
}

export interface Review {
  id: string;
  tourId: string;
  author: string;
  rating: number;
  comment: string;
  location?: string | null;
  createdAt: string | Date;
}

export interface SearchFilterParams {
  query?: string;
  destination?: string;
  category?: string;
  difficulty?: string;
  maxPrice?: number;
  minDuration?: number;
  maxDuration?: number;
  continent?: string;
}
