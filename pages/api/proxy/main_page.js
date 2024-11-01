import axios from 'axios';

const DIRECTUS_API_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_URL;

export default async function handler(req, res) {
  try {
    const response = await axios.get(`${DIRECTUS_API_URL}/items/Main_Page`, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}