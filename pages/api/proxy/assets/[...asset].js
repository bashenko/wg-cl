import axios from 'axios';

export default async function handler(req, res) {
  const { asset } = req.query;

  const url = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${asset.join('/')}`;

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    res.setHeader('Content-Type', response.headers['content-type']);
    res.status(200).send(response.data);
  } catch (error) {
    console.error(`Error fetching asset from Directus: ${error.message}`);
    res.status(error.response?.status || 500).json({ message: 'Error fetching asset from Directus' });
  }
}