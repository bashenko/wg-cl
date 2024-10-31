"use client"; // Mark this as a Client Component

import React from 'react';
import { motion } from 'framer-motion';

interface ForumItemProps {
  className?: string; // Optional className prop
  headerText: string; // Header text to display
  paragraphText: string; // Paragraph text to display
  backgroundImage: string; // URL or path to the background image
}

export default function ForumItem({
  className,
  headerText,
  paragraphText,
  backgroundImage,
}: ForumItemProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Container with overflow hidden to keep image contained */}
      <div className="relative h-56 overflow-hidden">
        {/* Motion.div for hover effect on image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          whileHover={{ scale: 1.2 }} // Scale the image on hover
          transition={{ duration: 0.5 }} // Smooth transition effect
        >
          <div className="w-full h-full" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover"}}></div>
        </motion.div>
      </div>
      {/* Text content */}
      <h5 className="mt-4">{headerText}</h5>
      <p className="mt-2">{paragraphText}</p>
    </div>
  );
}