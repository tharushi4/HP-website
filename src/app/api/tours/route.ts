import { NextResponse } from 'next/server';
import { getTours } from '@/lib/data-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || undefined;
    const category = searchParams.get('category') || undefined;
    const difficulty = searchParams.get('difficulty') || undefined;
    const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined;

    const tours = await getTours({ query, category, difficulty, maxPrice });
    return NextResponse.json(tours);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch tours' }, { status: 500 });
  }
}
