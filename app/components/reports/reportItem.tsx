"use client"; // Mark this as a Client Component

import React from 'react';
import { motion } from 'framer-motion';

interface ReportItemProps {
  className?: string; // Accept className as an optional prop
  Name: string; // Header text to display
  File: string; // Url for the button
  backgroundImage: string; // URL or path to the background image
}

export default function ReportItem({ className, Name, File, backgroundImage }: ReportItemProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Container for the image with overflow hidden */}
      <div className="relative h-52 overflow-hidden">
        {/* Motion.div for scaling the image on hover */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 1.2 }} // Scale the image on hover
          transition={{ duration: 0.5 }} // Smooth transition
        >
          <div className="w-full h-full" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover"}}></div>
        </motion.div>
      </div>
      {/* Description text */}
      <p className='font-bold text-blue-6 mt-4 min-h-16'>{Name}</p>
      {/* Download button */}
      <a href={File} download className='w-full flex'>
        <button className="mt-1 mb-8 w-full">Download</button>
      </a>
    </div>
  );
}