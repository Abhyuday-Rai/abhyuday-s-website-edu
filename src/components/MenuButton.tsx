import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

const menuVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuIconPath = '/menubuttonsvg.svg';

  const toggleMenu = () => {
    const openingMenu = !isOpen;

    if (openingMenu && window.innerWidth < 640) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    setIsOpen(openingMenu);
  };

  const goToPage = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 right-0 z-50 p-2 sm:p-3 lg:p-4">
      <motion.button
        className="focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <X className="h-8 w-8" />
          </motion.div>
        ) : (
          <motion.img
            src={menuIconPath}
            alt="Menu"
            className="h-7 w-7 sm:h-8 sm:w-8 -translate-x-0.5"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-background flex flex-col items-start justify-start overflow-y-auto z-40 pt-8 sm:items-center sm:justify-center sm:pt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="container mx-auto max-w-7xl px-4 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
              >
                {/* First Row */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <PortfolioCard title="Projects" subtitle="A collection of all my projects and work" path="/work" outlineText onSelect={() => setIsOpen(false)} />
                </motion.div>
                <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <PortfolioCard title="Résumé" subtitle="My Resume" path="/resume" outlineText onSelect={() => setIsOpen(false)} />
                </motion.div>
                <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <PortfolioCard title="Social" subtitle="My media handles" path="/social" outlineText onSelect={() => setIsOpen(false)} />
                </motion.div>

                {/* Second Row */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <PortfolioCard title="Awards" subtitle="awards" path="/awards" outlineText onSelect={() => setIsOpen(false)} />
                </motion.div>
                <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <PortfolioCard title="Patents and Papers" subtitle="" path="/patents" outlineText onSelect={() => setIsOpen(false)} />
                </motion.div>
                <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <PortfolioCard title="Store" subtitle="things to sell" path="/store" outlineText onSelect={() => setIsOpen(false)} />
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-foreground"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-7 w-7 sm:h-8 sm:w-8" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuButton;