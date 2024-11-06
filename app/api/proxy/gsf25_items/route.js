import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const ids = searchParams.get('ids');

    if (!ids) {
      return NextResponse.json(
        { error: 'Missing or invalid ids parameter' },
        {
          status: 400,
          headers: {
            'Cache-Control': 'no-store, must-revalidate', // Prevents caching for this error response
          },
        }
      );
    }

    // Construct the Directus URL with the provided IDs to filter
    const directusUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/GSF25_Items?filter[id][_in]=${ids}`;
    console.log('Fetching from Directus URL:', directusUrl);

    // Fetch data from Directus
    const response = await fetch(directusUrl, {
      headers: {
        'Cache-Control': 'no-store', // Disables cache for this request
      },
    });
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch data from Directus' },
        {
          status: response.status,
          headers: {
            'Cache-Control': 'no-store, must-revalidate', // Prevents caching for this failed response
          },
        }
      );
    }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevents caching for successful response
      },
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching data' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, must-revalidate', // Prevents caching for this error response
        },
      }
    );
  }
}