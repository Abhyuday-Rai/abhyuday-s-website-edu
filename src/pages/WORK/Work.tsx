import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar'; // Import the Navbar component
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import { projects } from './content/projects';

interface WorkCategory {
  id: string;
  label: string;
}

const Work = () => {
  const categories: WorkCategory[] = [
    { id: "all", label: "All work" },
    { id: "internship", label: "Internship" },
    { id: "personal", label: "Personal project" },
    { id: "previous", label: "Previous work experience" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects.slice().sort((a, b) => a.allRank - b.allRank)
    : projects
      .filter(project => project.category === activeCategory)
      .slice()
      .sort((a, b) => a.categoryRank - b.categoryRank);

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
            WORK
          </motion.h1>
          
          <motion.div 
            className="overflow-x-auto pb-4 mb-8 sm:mb-10"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex space-x-5 sm:space-x-8 border-b border-gray-800 pb-2 min-w-max">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className={`text-sm sm:text-base md:text-lg whitespace-nowrap pb-2 ${
                    activeCategory === category.id 
                      ? "text-white font-bold border-b-2 border-white" 
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="max-w-7xl mx-auto space-y-6 sm:space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    date={project.date}
                    image={project.image}
                    link={project.link} // Pass the link prop
                    passwordEnabled={project.passwordEnabled}
                    password={project.password}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Layout>
    </>
  );
};

export default Work;
