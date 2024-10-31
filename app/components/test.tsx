"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Test() {
  const [headerData, setHeaderData] = useState({ title: '', subtitle: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8055/items/header');
        
        // Check if data is returned as an object and has the required fields
        if (response.data.data) {
          const { title, subtitle } = response.data.data;
          setHeaderData({ title, subtitle });
        } else {
          console.error('No data found in response');
          setError('No data found in response');
        }
      } catch (error) {
        console.error('Error fetching header data:', error);
        setError('Error fetching header data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-10 bg-orange-600 py-5'>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <p>{headerData.title}</p>
          <p>{headerData.subtitle}</p>
        </>
      )}
    </div>
  );
}