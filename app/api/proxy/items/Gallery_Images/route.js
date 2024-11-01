// app/api/proxy/items/Gallery_Videos/route.js
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Gallery_Videos`);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching gallery videos data' }), { status: 500 });
  }
}