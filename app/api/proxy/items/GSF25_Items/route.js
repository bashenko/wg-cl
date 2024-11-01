import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const ids = searchParams.get('ids');

    if (!ids) {
      return NextResponse.json({ error: 'Missing or invalid ids parameter' }, { status: 400 });
    }

    // Build the Directus API URL with the provided IDs
    const directusUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/GSF25_Items?filter[id][_in]=${ids}`;
    
    // Fetch data from Directus
    const response = await fetch(directusUrl);
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from Directus' }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'An error occurred while fetching data' }, { status: 500 });
  }
}