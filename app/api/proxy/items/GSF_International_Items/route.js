import axios from 'axios';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get('filter') || "";

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/GSF_International_Items?${filter}`);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching GSF_International_Items data' }), { status: 500 });
  }
};