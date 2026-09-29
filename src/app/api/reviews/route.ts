import { NextResponse } from 'next/server';
import { createReview } from '@/lib/data-service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tourId, author, rating, comment, location } = body;

    if (!tourId || !author || !rating || !comment) {
      return NextResponse.json({ error: 'tourId, author, rating, and comment are required' }, { status: 400 });
    }

    const review = await createReview({
      tourId,
      author,
      rating: Number(rating),
      comment,
      location,
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to submit review' }, { status: 500 });
  }
}
