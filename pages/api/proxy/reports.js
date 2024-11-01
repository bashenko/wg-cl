import axios from 'axios';

export default async function handler(req, res) {
  const { ids } = req.query;

  try {
    const url = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/items/Reports`;
    const response = await axios.get(ids ? `${url}?filter[id][_in]=${ids}` : url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ message: 'Error fetching data from Reports in Directus' });
  }
}