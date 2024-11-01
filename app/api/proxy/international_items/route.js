import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get('ids');

  if (!ids) {
    return NextResponse.json({ error: 'Missing or invalid ids parameter' }, { status: 400 });
  }

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/GSF_International_Items`, {
      params: {
        'filter[id][_in]': ids, // Filter items by the IDs from Main_Page
      },
    });
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error fetching GSF_International_Items data:', error);
    return NextResponse.json({ message: 'Error fetching GSF_International_Items data' }, { status: 500 });
  }
}