import axios from 'axios';

export const GET = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Main_Page`, {
      headers: {
        'Cache-Control': 'no-store', // Ensure no caching for each request
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevent caching in response
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching Main_Page data' }), {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, must-revalidate', // Prevent caching even for errors
      },
    });
  }
};