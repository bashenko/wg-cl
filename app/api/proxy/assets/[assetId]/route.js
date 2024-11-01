import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { assetId } = params;

  if (!assetId) {
    return NextResponse.json({ error: 'Missing asset ID' }, { status: 400 });
  }

  try {
    const directusUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${assetId}`;
    const response = await fetch(directusUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch asset from Directus');
    }

    // Stream the image data directly to the client
    return new Response(response.body, {
      status: 200,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'image/jpeg', // Adjust based on expected type
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error fetching asset:', error);
    return NextResponse.json({ error: 'An error occurred while fetching the asset' }, { status: 500 });
  }
}