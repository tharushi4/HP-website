import { NextResponse } from 'next/server';
import { getDestinations } from '@/lib/data-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const featuredParam = searchParams.get('featured');
    const continent = searchParams.get('continent') || undefined;
    const featured = featuredParam !== null ? featuredParam === 'true' : undefined;

    const destinations = await getDestinations({ featured, continent });
    return NextResponse.json(destinations);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch destinations' }, { status: 500 });
  }
}
