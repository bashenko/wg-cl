"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Navigation({ forceScrolled = false }) { // Accept forceScrolled prop
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (forceScrolled) return; // Skip scroll handling if forced to be scrolled

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [forceScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#forum", label: "GSF 2025" },
    {
      label: "GSF International ▼",
      dropdown: [
        { href: "/tampere", label: "Tampere" },
        // { href: "/malta", label: "Malta" }
      ]
    },
    { href: "/#reports", label: "Reports" },
    { href: "/#gallery", label: "Gallery" }
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg ' : 'bg-transparent '
      }`}
    >
      <nav className="container xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md mx-auto flex justify-between items-center h-[100px] lg:px-14 md:px-8 px-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="/" className={`px-[-10] transition-all duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
            {scrolled ? (
              <Image
                src="/images/gsf-blue.png"
                alt="GSF logotype"
                width={256}
                height={75}
                priority
              />
            ) : (
              <Image
                src="/images/gsf.png"
                alt="GSF logotype"
                width={256}
                height={75}
                priority
              />
            )}
          </a>
        </div>

        {/* Navigation Links */}
        <div className={`hidden lg:flex space-x-8 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          {navLinks.map((link, index) => (
            link.dropdown ? (
              <div key={index} className="relative">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                  className="menu-item transition-all"
                >
                  {link.label}
                </a>
                {isDropdownOpen && (
                  <div className="absolute w-full flex flex-col top-full mt-1 bg-white text-black shadow-lg rounded-md">
                    {link.dropdown.map((sublink) => (
                      <a key={sublink.href} href={sublink.href} className="flex flex-1 px-4 py-2 hover:bg-gray-100 menu-item rounded-md">
                        {sublink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={link.href} href={link.href} className="menu-item transition-all">
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className={`transition-all p-4 rounded-md border border-solid ${scrolled ? 'text-black border-gray-300' : 'text-white border-white'} bg-transparent`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[100px] right-0 w-full bg-white shadow-md py-12 gap-12 z-40 flex flex-col justify-start items-start">
            {navLinks.map((link, index) => (
              link.dropdown ? (
                <div key={index} className="px-4">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown();
                    }}
                    className="block menu-item transition-all"
                  >
                    {link.label}
                  </a>
                  {isDropdownOpen && (
                    <div className="pl-4 flex flex-col">
                      {link.dropdown.map((sublink) => (
                        <a key={sublink.href} href={sublink.href} className="menu-item transition-all block px-4 py-2 pl-2">
                          {sublink.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.href} href={link.href} className="menu-item transition-all px-4 block">
                  {link.label}
                </a>
              )
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}