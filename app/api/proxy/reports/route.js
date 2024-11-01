import axios from 'axios';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get('ids');

  if (!ids) {
    return new Response(JSON.stringify({ message: 'Missing or invalid ids parameter' }), { status: 400 });
  }

  try {
    // Construct the Directus URL with the provided IDs to filter
    const directusUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Reports?filter[id][_in]=${ids}`;
    console.log('Fetching from Directus URL:', directusUrl);

    // Fetch data from Directus
    const response = await axios.get(directusUrl);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error fetching Reports data:', error);
    return new Response(JSON.stringify({ message: 'Error fetching Reports data' }), { status: 500 });
  }
};