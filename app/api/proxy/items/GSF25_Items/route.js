// app/api/proxy/items/GSF25_Items/route.js
import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get('filter');

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/GSF25_Items?${filter}`);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching GSF25 items data' }), { status: 500 });
  }
}