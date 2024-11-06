import axios from 'axios';

export const GET = async () => {
  try {
    // Fetch data from Directus with no caching for fresh data
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Gallery_Images`, {
      headers: {
        'Cache-Control': 'no-store', // Prevents request caching
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Ensures response is also not cached
      },
    });
  } catch (error) {
    console.error('Error fetching Gallery_Images data:', error.message); // Log specific error message for debugging

    return new Response(JSON.stringify({ message: 'Error fetching Gallery_Images data' }), {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevents caching error response
      },
    });
  }
};