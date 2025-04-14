import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar'; // Import the Navbar component

interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const Social = () => {
  const socialLinks: SocialLink[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <Linkedin size={40} />,
      url: 'https://linkedin.com/',
      color: 'hover:bg-blue-600'
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: <Github size={40} />,
      url: 'https://github.com/',
      color: 'hover:bg-gray-600'
    },
    {
      id: 'email',
      name: 'Email',
      icon: <Mail size={40} />,
      url: 'mailto:contact@example.com',
      color: 'hover:bg-red-600'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <Instagram size={40} />,
      url: 'https://instagram.com/',
      color: 'hover:bg-pink-600'
    }
  ];

  return (
    <>
      <Navbar /> {/* Add the Navbar component */}
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-12 sm:mb-16 lg:mb-24 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            SOCIAL MEDIA
          </motion.h1>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-card border border-border p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${link.color}`}
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
              >
                <div className="mb-6">
                  {link.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{link.name}</h3>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="mt-16 sm:mt-20 lg:mt-24 text-base sm:text-lg lg:text-xl text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Feel free to connect with me on any platform
          </motion.p>
        </motion.div>
      </Layout>
    </>
  );
};

export default Social;
