import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get('ids');

  if (!ids) {
    return NextResponse.json({ error: 'Missing or invalid ids parameter' }, {
      status: 400,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // No caching for invalid requests
      },
    });
  }

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/GSF_International_Items`, {
      params: {
        'filter[id][_in]': ids, // Filter items by the IDs from Main_Page
      },
      headers: {
        'Cache-Control': 'no-store', // Prevent caching on the axios request level
      },
    });

    // Return the fetched data with no-cache headers
    return NextResponse.json(response.data, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevent caching on the response level
      },
    });
  } catch (error) {
    console.error('Error fetching GSF_International_Items data:', error);
    return NextResponse.json({ message: 'Error fetching GSF_International_Items data' }, {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // No caching for error responses
      },
    });
  }
}