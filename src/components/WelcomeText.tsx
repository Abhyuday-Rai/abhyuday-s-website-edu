import React from 'react';
import { motion } from 'framer-motion';

const WelcomeText = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto p-4 text-center"
      >
        <motion.div 
          className="text-6xl md:text-8xl font-bold mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        >
          <span>H</span>
          <span className="ml-4">I</span>
          <span className="mx-8">I'm</span>
          <motion.span 
            className="inline-block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Ab
          </motion.span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl mt-12"
        >
          "rest everything is in the menu"
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeText;