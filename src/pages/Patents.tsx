import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar'; // Import the Navbar component
import { FileText } from 'lucide-react';

const Patents = () => {
  const patents = [
    {
      title: 'Smart 3D Printing Filament Dehydrator & Storage System with Automated Temperature and Humidity Controlnteractive User Interface System',
      number: '10.1109/SCEECS68810.2026.11429984',
      year: '2026',
      description: 'filament dehydrator and storage system',
      link: 'https://ieeexplore.ieee.org/document/11429984' // Add a link for this patent
    },
    
    
  ];

  return (
    <>
      <Navbar /> {/* Add the Navbar component */}
      <Layout>
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Patents & Papers</h1>
        
        <div className="max-w-3xl mx-auto px-0 sm:px-2">
          {patents.map((patent, index) => (
            <a
              href={patent.link} // Use the link property
              key={index}
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="block portfolio-card mb-6"
            >
              <div className="flex items-start">
                <FileText className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold">{patent.title}</h3>
                  <p className="text-gray-400">{patent.number} • {patent.year}</p>
                  <p className="mt-4">{patent.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Patents;
