import React from 'react';
import image1 from '../assets/website/amanda.png';
import image2 from '../assets/website/myAi.png';
import image3 from '../assets/website/chel.png';
import image4 from '../assets/website/esi.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <div>
        <NavBar />
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12 overflow-hidden">
      {/* Central Text Block */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">We are the people who make up Eshop</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Our philosophy is simple; hire great people and give them the resources and support to do their best work.
        </p>
      </div>

      {/* Images surrounding the text */}
      <div className="relative w-full max-w-6xl h-full mx-auto">
        <div className="absolute top-0 left-4 transform -translate-x-1/2">
          <img src={image1} alt="Team Member 1" className="w-48 h-48 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="absolute top-0 right-11 transform translate-x-1/2">
          <img src={image2} alt="Team Member 2" className="w-48 h-48 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="absolute bottom-56 left-16 transform -translate-x-1/2 translate-y-1/2">
          <img src={image3} alt="Team Member 3" className="w-48 h-48 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="absolute bottom-56 right-16 transform translate-x-1/2 translate-y-1/2">
          <img src={image4} alt="Team Member 4" className="w-48 h-48 object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Bouncing Arrow */}
      <div className="mt-8 z-10">
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default AboutUs;
