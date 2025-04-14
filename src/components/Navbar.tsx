import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  // Define an array of colors for each character
  const characterColors = [
    { char: '.', color: '#12FFF3' }, // Cyan for the first dot
    { char: '-', color: '#12FFF3' }, // Magenta for the first dash
    { char: '/', color: '#FFFFFF' }, // White for the slash
    { char: '.', color: '#FFFFFF' }, // Yellow for the second dash
    { char: '-', color: '#FFFFFF' }, // Yellow for the second dash
    { char: '.', color: '#FFFFFF' }, // Green for the second dot
    { char: '.', color: '#FFFFFF' }, // Red for the third dot
    { char: '-', color: '#FFFFFF' }, // Blue for the fourth dot
    { char: '.', color: '#FFFFFF' }, // Orange for the third dash
    { char: '.', color: '#FFFFFF' }, // Purple for the fifth dot
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-black bg-opacity-50 backdrop-blur-md`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Centered Logo */}
        <Link to="/" className="text-lg sm:text-2xl font-bold tracking-widest flex items-center">
          {characterColors.map((item, index) => (
            <span
              key={index}
              style={{ color: item.color }}
              className="mx-[2px] sm:mx-1"
            >
              {item.char}
            </span>
          ))}
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;