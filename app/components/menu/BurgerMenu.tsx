import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BurgerMenuProps {
  color: 'white' | 'blue';
}

export default function BurgerMenu({ color }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Burger button to toggle menu */}
      <button
        type="button"
        className={`flex min-w-6 h-6 gap-8 top-menu ${color === 'white' ? 'text-white' : 'text-blue'}`}
        onClick={toggleMenu}
        style={{background: "none"}}
      >
        <Image
          src={`/images/icons/menu-${color}.png`}
          alt="Menu icon"
          width={24}
          height={24}
          priority
          layout="fixed"
        />
      </button>

      {/* Fullscreen menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-blue-5 text-white flex flex-col items-center justify-center"
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4" style={{background: "none"}}>
            {/* Close icon */}
            <Image
              src="/images/icons/close-white.png" // Assuming you have a close icon
              alt="Close menu"
              width={24}
              height={24}
              priority
              layout="fixed"
            />
          </button>

          {/* Menu list */}
          <div className='burger'>
            <ul>
              <li>
                <a href="/#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="/#forum" onClick={toggleMenu}>
                  GSF 2025
                </a>
              </li>
              <li>
                <a href="/#international" onClick={toggleMenu}>
                  GSF International
                </a>
              </li>
              <li>
                <a href="/#reports" onClick={toggleMenu}>
                  Reports
                </a>
              </li>
              <li>
                <a href="/#gallery" onClick={toggleMenu}>
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          
        </motion.div>
      )}
    </>
  );
}