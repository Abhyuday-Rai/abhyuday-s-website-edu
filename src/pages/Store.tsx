import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar'; // Import the Navbar component
import { ArrowRight } from 'lucide-react';

const Store = () => {
  const products = [
    {
      name: 'Hexarium',
      price: 'xxx',
      description: 'wifi router ups',
      link: '/store/digital-design-templates', // Add a link for this product
      image: '/images_for_website/0a60daf7-4010-4331-9232-1c2f2c7ec675.png' // Add a cover image for this product
    },
    
  ];

  return (
    <>
      <Navbar /> {/* Add the Navbar component */}
      <Layout>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 md:mb-12">Store</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link} // Make the entire box clickable
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="block portfolio-card"
            >
              {/* Cover Image */}
              <div className="mb-4 aspect-[4/3] sm:aspect-video">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{product.name}</h3>
              <p className="text-lg sm:text-xl font-bold text-sidebar-primary mt-2">{product.price}</p>
              <p className="mt-2 text-sm sm:text-base text-gray-400">{product.description}</p>
              <div className="mt-4 flex items-center text-purple-500 hover:text-purple-700">
                <span className="font-medium text-sm sm:text-base">Explore</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </a>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Store;
