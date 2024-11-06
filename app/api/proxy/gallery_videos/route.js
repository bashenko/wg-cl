import axios from 'axios';

export const GET = async () => {
  try {
    // Fetch data from Directus
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Gallery_Videos`, {
      headers: {
        'Cache-Control': 'no-store', // Prevent caching
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevent caching for response
      },
    });
  } catch (error) {
    console.error('Error fetching Gallery_Videos data:', error.message); // Enhanced error logging

    return new Response(JSON.stringify({ message: 'Error fetching Gallery_Videos data' }), {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevent caching for error response
      },
    });
  }
};