import { NextResponse } from 'next/server';
import { createBooking, getBookingByCode, getAllBookings, updateBookingStatus } from '@/lib/data-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (code) {
      const booking = await getBookingByCode(code);
      if (!booking) {
        return NextResponse.json({ error: 'Booking not found with code: ' + code }, { status: 404 });
      }
      return NextResponse.json(booking);
    }

    // Otherwise return all bookings (operator/admin view)
    const bookings = await getAllBookings();
    return NextResponse.json(bookings);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to process booking request' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tourId, customerName, customerEmail, customerPhone, travelDate, guestsCount, totalAmount, specialRequests } = body;

    if (!tourId || !customerName || !customerEmail || !customerPhone || !travelDate || !guestsCount || !totalAmount) {
      return NextResponse.json({ error: 'Missing required booking fields' }, { status: 400 });
    }

    const booking = await createBooking({
      tourId,
      customerName,
      customerEmail,
      customerPhone,
      travelDate,
      guestsCount: Number(guestsCount),
      totalAmount: Number(totalAmount),
      specialRequests,
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to create booking' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'id and status are required' }, { status: 400 });
    }

    const updated = await updateBookingStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to update booking status' }, { status: 500 });
  }
}
