import axios from 'axios';

export const GET = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Gallery_Images`);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching Gallery_Images data' }), { status: 500 });
  }
};