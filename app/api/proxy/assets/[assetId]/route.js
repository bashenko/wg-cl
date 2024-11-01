// app/api/proxy/assets/[assetId]/route.js
import axios from 'axios';

export async function GET(req) {
  const { assetId } = req.params;

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${assetId}`, {
      responseType: 'arraybuffer',
    });

    return new Response(response.data, {
      headers: {
        'Content-Type': response.headers['content-type'],
        'Content-Disposition': `inline; filename="${assetId}"`,
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching' }), { status: 500 });
  }
}