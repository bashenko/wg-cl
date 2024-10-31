"use client";
import { motion } from "framer-motion";
import React from "react";

interface AboutProps {
  content: string;
}

// Animation variants for fade-in from the bottom with customizable delay
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});

export default function About({content}: AboutProps) {
  return (
    <div className="flex justify-center flex-col scroll-mt-[100px]" id="about">
      <div className="md:grid md:grid-cols-12 flex flex-col gap-8 relative">
        {/* Animated heading with no delay */}
        <motion.h4
          className="md:col-span-12 col-span-4 text-wgs-blue"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0)} // No delay for the first element
        >
          About
        </motion.h4>
        <motion.p
          className="md:col-span-12 col-span-8 md:columns-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.2)} // 0.2s delay for the first paragraph
        >
          {content}
        </motion.p>
      </div>

      {/* Animated button with 0.6s delay */}
      <motion.a
        className="flex flex-row mt-8 w-full md:justify-end justify-center"
        href="#"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp(0.6)} // 0.6s delay for the button
      >
        <button>Previous editions →</button>
      </motion.a>
    </div>
  );
}