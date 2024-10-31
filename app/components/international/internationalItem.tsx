"use client"; // Ensure it's a client component

import React from 'react';
import { motion } from 'framer-motion';

interface InternationalItemProps {
  className?: string; // Optional className prop
  buttonText: string; // Header text to display
  url: string; // Url for the button
  backgroundImage: string; // URL or path to the background image
}

export default function InternationalItem({
  className,
  buttonText,
  url,
  backgroundImage,
}: InternationalItemProps) {
  return (
    <a
      href={url}
      className={`relative flex flex-col ${className}`}
      style={{ textDecoration: 'none' }}
    >
      {/* Container for the image with overflow hidden */}
      <div className="relative h-96 overflow-hidden">
        {/* Motion image that will scale on hover */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 1.2 }} // Only scale the image on hover
          transition={{ duration: 0.5 }} // Smooth transition for scaling
        >
          <div className="w-full h-full" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover"}}></div>
        </motion.div>
      </div>

      <button className="justify-between">
        <h6>{buttonText}</h6>
        <h6>→</h6>
      </button>
    </a>
  );
}