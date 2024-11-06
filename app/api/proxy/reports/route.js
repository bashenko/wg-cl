import axios from 'axios';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get('ids');

  if (!ids) {
    return new Response(JSON.stringify({ message: 'Missing or invalid ids parameter' }), {
      status: 400,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // No caching for invalid requests
      },
    });
  }

  try {
    // Construct the Directus URL with the provided IDs to filter
    const directusUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Reports?filter[id][_in]=${ids}`;
    console.log('Fetching from Directus URL:', directusUrl);

    // Fetch data from Directus without caching
    const response = await axios.get(directusUrl, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });

    // Return the fetched data with no-cache headers
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevent caching in response
      },
    });
  } catch (error) {
    console.error('Error fetching Reports data:', error);
    return new Response(JSON.stringify({ message: 'Error fetching Reports data' }), {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevent caching even for error responses
      },
    });
  }
};