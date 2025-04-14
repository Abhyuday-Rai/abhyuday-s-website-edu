import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar'; // Import the Navbar component
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      name: 'Design Excellence Award',
      organization: 'Design Association',
      year: '2023',
      link: '/awards/design-excellence-award' // Add a link for this award
    },
    {
      name: 'Best Portfolio Website',
      organization: 'Web Design Awards',
      year: '2022',
      link: '/awards/best-portfolio-website' // Add a link for this award
    },
    {
      name: 'Innovation in Digital Design',
      organization: 'Digital Arts Foundation',
      year: '2021',
      link: '/awards/innovation-digital-design' // Add a link for this award
    },
    {
      name: 'User Experience Achievement',
      organization: 'UX Society',
      year: '2020',
      link: '/awards/user-experience-achievement' // Add a link for this award
    },
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 md:mb-12"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Honor & Awards
          </motion.h1>
          
          <div className="max-w-3xl mx-auto px-0 sm:px-2">
            {awards.map((award, index) => (
              <a
                href={award.link} // Use the link property
                key={index}
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
                className="block"
              >
                <motion.div 
                  className="portfolio-card mb-4 sm:mb-6 flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                  whileHover={{ 
                    x: 10,
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <Award className="h-8 w-8 mr-4 mt-1 text-yellow-300" />
                  <div>
                    <h3 className="text-2xl font-bold">{award.name}</h3>
                    <p className="text-gray-400">{award.organization}</p>
                    <p className="text-sm mt-2">{award.year}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Awards;
