import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import MenuButton from './MenuButton';

interface ProjectDetailProps {
  project: {
    title: string;
    date: string;
    image: string;
    sections: Array<{
      heading: string;
      content: string;
    }>;
    category?: string;
  };
  previousProject?: {
    title: string;
    link: string;
  };
  nextProject?: {
    title: string;
    link: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  previousProject,
  nextProject,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <MenuButton />
      <motion.div
        className="min-h-screen bg-background text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Banner Section */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />
          {/* Text Overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4">
                {project.title}
              </h1>
              <p className="inline-flex rounded-full border border-white/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white">
                {project.date}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 max-w-4xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {project.sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-12 sm:mb-16 lg:mb-20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {section.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {section.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Section */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-4xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="border-t border-border pt-8 sm:pt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
              {previousProject ? (
                <motion.button
                  onClick={() => navigate(previousProject.link)}
                  className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
                  whileHover={{ x: -8 }}
                >
                  <ArrowUpLeft className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-foreground/60 group-hover:text-[#A855F7] transition-colors duration-300" />
                  <span className="text-base sm:text-lg md:text-xl text-foreground/60 group-hover:text-foreground transition-colors duration-300">
                    {previousProject.title}
                  </span>
                </motion.button>
              ) : (
                <div />
              )}

              {nextProject ? (
                <motion.button
                  onClick={() => navigate(nextProject.link)}
                  className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
                  whileHover={{ x: 8 }}
                >
                  <span className="text-base sm:text-lg md:text-xl text-foreground/60 group-hover:text-foreground transition-colors duration-300">
                    {nextProject.title}
                  </span>
                  <ArrowUpRight className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-foreground/60 group-hover:text-[#A855F7] transition-colors duration-300" />
                </motion.button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
          <div className="container mx-auto text-xs sm:text-sm text-muted-foreground text-center">
            © 2025 Abhyuday Rai - all rights reserved.
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetail;
