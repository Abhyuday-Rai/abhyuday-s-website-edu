
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
    <div className="min-h-screen bg-background text-foreground relative flex flex-col" style={{ minHeight: '100dvh' }}>
      <MenuButton />
      
      <motion.div 
        className="container mx-auto w-full flex-1 px-3 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12"
        style={{
          paddingTop: 'clamp(2.4rem, 8vw, 5rem)'
        }}
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

      <div className="mt-auto px-3 sm:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-10">
        <div className="container mx-auto text-xs sm:text-sm text-muted-foreground text-center">
        © 2025 Abhyuday Rai - all rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Layout;
