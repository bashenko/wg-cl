// app/api/proxy/items/Reports/route.js
import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get('filter');

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Reports?${filter}`);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching reports data' }), { status: 500 });
  }
}