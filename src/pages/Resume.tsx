import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar'; // Import the Navbar component

const Resume = () => {
  const resumeDriveLink = 'https://drive.google.com/';
  const portfolioDriveLink = 'https://drive.google.com/';

  return (
    <>
      <Navbar /> {/* Add the Navbar component */}
      <Layout>
        <div className="max-w-3xl mx-auto px-0 sm:px-2">
          {/* Existing content */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-white pl-4 py-2">
                <h3 className="text-lg sm:text-xl font-semibold">Powertrain engineer</h3>
                <p className="text-sm sm:text-base text-gray-400">Veloce Racing electric • 2024 - Present</p>
                <p className="mt-2 text-sm sm:text-base">
                  worked with a  team of 50+ members to design and develop the powertrain system for a high-performance electric formula student car.worked on the LV and HV harness and components of the car.
                </p>
              </div>

              {/*
              <div className="border-l-2 border-white pl-4 py-2">
                <h3 className="text-lg sm:text-xl font-semibold">UX Designer</h3>
                <p className="text-sm sm:text-base text-gray-400">Previous Company • 2017 - 2020</p>
                <p className="mt-2 text-sm sm:text-base">
                  Designed and implemented user interfaces for web and mobile applications.
                </p>
              </div>
              */}
            </div>
          </section>

          {/* <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-2 border-white pl-4 py-2">
              <h3 className="text-lg sm:text-xl font-semibold">Masters of Technology</h3>
              <p className="text-sm sm:text-base text-gray-400">I • 2024 - 2028</p>
            </div>
          </section> */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-2 border-white pl-4 py-2">
              <h3 className="text-lg sm:text-xl font-semibold">Bachelor of Technology</h3>
              <p className="text-sm sm:text-base text-gray-150">Electronics and telecommunication engineering</p>
              <p className="text-sm sm:text-base text-gray-400">Vishwakarma Institute of technology • 2024 - 2028</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Altium', 'analog design', 'power electronics', 'C/C++', 'Digital Electronics', '3d printing', 'CAD'].map((skill) => (
                <span key={skill} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 mt-10 sm:mt-12">
          {/* Download Resume Button */}
          <div className="flex flex-col items-center text-white">
            <span className="text-xs sm:text-sm mb-2">download resume</span>
            <a
              href={"https://drive.google.com/file/d/1u9gfN7yfbW6SgBfaOnR0NlfXpOjnxZEB/view?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images_for_website/download_gnd_icon.svg"
                alt="Download Resume"
                className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition"
              />
            </a>
          </div>

          {/* Download Portfolio Button */}
          <div className="flex flex-col items-center text-white">
            <span className="text-xs sm:text-sm mb-2">download portfolio</span>
            <a
              href={portfolioDriveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images_for_website/download_gnd_icon.svg"
                alt="Download Portfolio"
                className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Resume;
