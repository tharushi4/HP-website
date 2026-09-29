import { PrismaClient } from '@prisma/client';
import { INITIAL_DESTINATIONS, INITIAL_TOURS, INITIAL_BOOKINGS, INITIAL_REVIEWS } from '../src/lib/mock-data';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed for TerraVenture tourism platform...');

  // 1. Seed Destinations
  for (const dest of INITIAL_DESTINATIONS) {
    await prisma.destination.upsert({
      where: { slug: dest.slug },
      update: {
        name: dest.name,
        country: dest.country,
        continent: dest.continent,
        description: dest.description,
        heroImage: dest.heroImage,
        gallery: dest.gallery,
        bestTimeToVisit: dest.bestTimeToVisit,
        currency: dest.currency,
        featured: dest.featured,
      },
      create: {
        id: dest.id,
        name: dest.name,
        slug: dest.slug,
        country: dest.country,
        continent: dest.continent,
        description: dest.description,
        heroImage: dest.heroImage,
        gallery: dest.gallery,
        bestTimeToVisit: dest.bestTimeToVisit,
        currency: dest.currency,
        featured: dest.featured,
      },
    });
  }
  console.log(`✅ Seeded ${INITIAL_DESTINATIONS.length} destinations.`);

  // 2. Seed Tours
  for (const tour of INITIAL_TOURS) {
    await prisma.tour.upsert({
      where: { slug: tour.slug },
      update: {
        title: tour.title,
        destinationId: tour.destinationId,
        durationDays: tour.durationDays,
        price: tour.price,
        discountPrice: tour.discountPrice,
        difficulty: tour.difficulty,
        groupSize: tour.groupSize,
        category: tour.category,
        highlights: tour.highlights,
        itinerary: tour.itinerary as any,
        inclusions: tour.inclusions,
        exclusions: tour.exclusions,
        rating: tour.rating,
        reviewCount: tour.reviewCount,
        images: tour.images,
        featured: tour.featured,
      },
      create: {
        id: tour.id,
        title: tour.title,
        slug: tour.slug,
        destinationId: tour.destinationId,
        durationDays: tour.durationDays,
        price: tour.price,
        discountPrice: tour.discountPrice,
        difficulty: tour.difficulty,
        groupSize: tour.groupSize,
        category: tour.category,
        highlights: tour.highlights,
        itinerary: tour.itinerary as any,
        inclusions: tour.inclusions,
        exclusions: tour.exclusions,
        rating: tour.rating,
        reviewCount: tour.reviewCount,
        images: tour.images,
        featured: tour.featured,
      },
    });
  }
  console.log(`✅ Seeded ${INITIAL_TOURS.length} tours.`);

  // 3. Seed Bookings
  for (const booking of INITIAL_BOOKINGS) {
    await prisma.booking.upsert({
      where: { bookingCode: booking.bookingCode },
      update: {
        tourId: booking.tourId,
        customerName: booking.customerName,
        customerEmail: booking.customerEmail,
        customerPhone: booking.customerPhone,
        travelDate: booking.travelDate,
        guestsCount: booking.guestsCount,
        totalAmount: booking.totalAmount,
        status: booking.status,
        specialRequests: booking.specialRequests,
      },
      create: {
        id: booking.id,
        bookingCode: booking.bookingCode,
        tourId: booking.tourId,
        customerName: booking.customerName,
        customerEmail: booking.customerEmail,
        customerPhone: booking.customerPhone,
        travelDate: booking.travelDate,
        guestsCount: booking.guestsCount,
        totalAmount: booking.totalAmount,
        status: booking.status,
        specialRequests: booking.specialRequests,
      },
    });
  }
  console.log(`✅ Seeded ${INITIAL_BOOKINGS.length} initial bookings.`);

  // 4. Seed Reviews
  for (const rev of INITIAL_REVIEWS) {
    const existing = await prisma.review.findFirst({
      where: { tourId: rev.tourId, author: rev.author },
    });
    if (!existing) {
      await prisma.review.create({
        data: {
          id: rev.id,
          tourId: rev.tourId,
          author: rev.author,
          rating: rev.rating,
          comment: rev.comment,
          location: rev.location,
        },
      });
    }
  }
  console.log(`✅ Seeded ${INITIAL_REVIEWS.length} reviews.`);
  console.log('🌟 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during database seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
