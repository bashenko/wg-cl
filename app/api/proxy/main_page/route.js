import axios from 'axios';

export const GET = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Main_Page`);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching Main_Page data' }), { status: 500 });
  }
};