
import React, { useState, useEffect } from 'react';
import MenuButton from './MenuButton';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    setPageLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
      <MenuButton />
      
      <motion.div 
        className="container mx-auto w-full flex-1 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 sm:pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: pageLoaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        key={location.pathname}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </motion.div>

      <div className="mt-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <div className="container mx-auto text-xs sm:text-sm text-muted-foreground">
        © 2025 Abhyuday Rai-all rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Layout;
