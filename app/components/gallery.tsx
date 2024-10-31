"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from "@fancyapps/ui";

type GalleryItem = {
  src: string;
  alt: string;
  type: 'photo' | 'video';
  preview?: string; // Optional for photos, required for videos
};

interface GalleryProps {
  images: GalleryItem[] | null; // Accept images prop
  videos: GalleryItem[] | null; // Accept videos prop
}

export default function Gallery({ images, videos }: GalleryProps) {
  const [activeTab, setActiveTab] = useState('photo');
  const [visibleItems, setVisibleItems] = useState(6); // Number of visible items

  useEffect(() => {
    Fancybox.bind("[data-fancybox]:not([href^='#'])", {});
  
    return () => {
      Fancybox.destroy(); // Ensure Fancybox is unbound before re-binding
    };
  }, []);

  // Handle "Load More" functionality
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6); // Show 6 more items
  };

  // Filter data based on the active tab
  const filteredData = activeTab === 'photo' ? images : videos;
  const visibleData = filteredData?.slice(0, visibleItems); // Only show the visible items

  return (
    <div 
      className="bg-blue-7 w-full flex justify-center py-12 mt-24 md:px-0 px-4 scroll-mt-[100px]" 
      id="gallery"
      style={{
        backgroundImage: "url('/images/gallerybg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm relative flex flex-col lg:px-14 md:px-8 px-4">
        <h4 className="col-span-12 text-white mb-4">Media Gallery</h4>
        <div className="col-span-12 flex flex-row gap-2 text-white">
          <ul className="flex " id="gallery-tabs">
            <li
              onClick={() => setActiveTab('photo')}
              className={`cursor-pointer px-2  text-xl ${
                activeTab === 'photo'
                  ? 'text-white border-b-4 border-blue-500'
                  : 'text-wgs-blue border-b-0'
              }`}
            >
              <a>Images</a>
            </li>
            <li
              onClick={() => setActiveTab('video')}
              className={`cursor-pointer text-xl px-2 ${
                activeTab === 'video'
                  ? 'text-white border-b-4 border-blue-500'
                  : 'text-wgs-blue border-b-0'
              }`}
            >
              <a>Videos</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:grid md:grid-cols-12 sm:grid-cols-4 gap-8 relative mt-8">
          {visibleData && visibleData.length > 0 ? (
            visibleData.map((item, index) => (
              <div key={index} className="col-span-4 relative h-72">
                {item.type === 'photo' ? (
                  <a data-fancybox="gallery" href={item.src}>
                    <motion.div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.src})` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      aria-label={item.alt}
                    />
                  </a>
                ) : (
                  <a data-fancybox="gallery" href={item.src}>
                    <motion.div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.preview})` }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      aria-label={item.alt}
                    />
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-white">No media available</p>
          )}
        </div>

        {/* Show "Load More" button if there are more items to display */}
        {filteredData && visibleItems < filteredData.length && (
          <button 
            onClick={handleLoadMore} 
            className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}