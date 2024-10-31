"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

// Utility to get random values for animation duration, delay, and direction
const getRandomValues = () => ({
  duration: Math.random() * 6 + 10, // Random duration between 3-7 seconds
  delay: Math.random() * 10, // Random delay between 0-2 seconds
  direction: Math.random() > 0.2 ? "left" : "right", // Random left-to-right or right-to-left movement
});

// Component to handle the animation of individual images
const AnimatedImage = ({ src }: { src: string; row: string }) => {
  const [animationProps, setAnimationProps] = useState(getRandomValues());

  // Reset animation properties after each animation cycle
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationProps(getRandomValues());
    }, (animationProps.duration + animationProps.delay) * 5000);
    return () => clearTimeout(timeout);
  }, [animationProps]);

  // Define the movement direction randomly (left or right)
  const moveDirection = animationProps.direction === "left" ? [-300, 1000] : [1000, -300];

  // Define the range of the `top` style based on the row (either top or bottom half of the container)
  // const topPosition = row === "top" ? `${Math.random() * 40}%` : `${Math.random() * 40 + 50}%`;
  const topPosition = 0

  return (
    <motion.div
      className="absolute h-full w-[452px]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0], // Fade in, stay visible, then fade out
        x: moveDirection, // Move randomly in either direction (left or right)
      }}
      transition={{
        duration: animationProps.duration,
        delay: animationProps.delay,
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
        repeatType: "loop",
      }}
      exit={{opacity: 0}}
      style={{ top: topPosition}} // Scale image size to fit container
    >
      <div className="h-full w-[452px] head-particle" style={{backgroundImage: src}}></div>
      {/* <Image src={src} alt="Animated Shape" layout="responsive" width={226} height={141} /> */}
    </motion.div>
  );
};

export default function Header({ title, subtitle, image }: HeaderProps) {

  // Arrays containing the paths to your images
  const images = [
    "url('/images/header/head-shape-1.png')",
    "url('/images/header/head-shape-2.png')",
    "url('/images/header/head-shape-3.png')",
    "url('/images/header/head-shape-4.png')",
    "url('/images/header/head-shape-5.png')",
    "url('/images/header/head-shape-6.png')",
    "url('/images/header/head-shape-7.png')",
  ];

  // Inline style to dynamically set background image from the Directus API
  const backgroundStyle = {
    backgroundImage: `url(http://localhost:8055/assets/${image})`, // Use Directus API URL
    backgroundPosition: 'center, center',
    backgroundSize: 'cover, cover', 
    backgroundRepeat: 'no-repeat, no-repeat'
  };

  return (
    <div className="relative pb-24 flex justify-center min-w-full bg-header-layers 
                h-[66vh]
                md:h-[60vh] 
                lg:h-[56vh] 
                xl:h-[765px]" style={backgroundStyle} >
      {/* Background Animation Layer */}
      {/* Top Row Animation */}
      <div className="absolute inset-0 z-10 pointer-events-none h-1/2 overflow-hidden">
        {images.map((src, index) => (
          <AnimatedImage key={index} src={src} row="top" />
        ))}
        
      </div>

      {/* Bottom Row Animation */}
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none h-1/2 overflow-hidden">
        {images.map((src, index) => (
          <AnimatedImage key={index} src={src} row="bottom" />
        ))}
        
      </div>

      {/* Main Content Layer */}
      <div className="relative z-20 grid xl:grid-cols-12 lg:grid-cols-8 grid-cols-4 gap-8 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm lg:px-14 md:px-8 px-4">
        <div className="flex flex-row justify-between xl:col-span-12 lg:col-span-8 col-span-4">
          <div className="flex flex-col gap-8 pt-12">
          </div>
        </div>
        
        <>
        <div className="xl:col-span-7 lg:col-span-8 col-span-4 text-white">
          <h1>{title}</h1>
        </div>
        <h4 className="xl:col-span-12 lg:col-span-8 col-span-4 text-white">
        {subtitle}
        </h4>
        </>
  
      </div>
    </div>
  );
}