"use client";

import React, { useEffect, useState } from 'react';
import Menu from './menu'; // The main menu component
import { motion } from 'framer-motion'; // Import framer-motion

interface StickyMenuProps {
  scrollThreshold?: number; // Allow customizable scroll threshold
}

export default function StickyMenu({ scrollThreshold = 100 }: StickyMenuProps) {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return (
    <motion.div
      initial={{ y: '-100%' }} // Start position when the menu is hidden
      animate={{ y: showMenu ? 0 : '-100%' }} // Animate between hidden and visible states
      transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Spring animation for smoothness
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} // Fixed positioning
    >
      <Menu /> {/* This is your main menu component */}
    </motion.div>
  );
}