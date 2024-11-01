import axios from 'axios';

export default async function handler(req, res) {
  try {
    const url = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Gallery_Images`;
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ message: 'Error fetching data from Gallery_Images in Directus' });
  }
}