import React from 'react';
import image1 from '../assets/website/amanda.png';
import image2 from '../assets/website/myAi.png';
import image3 from '../assets/website/chel.png';
import image4 from '../assets/website/esi.png';

import image5 from '../assets/website/test2.png';
import image6 from '../assets/website/test3.png';
import image7 from '../assets/website/test4.png';
import image8 from '../assets/website/testm1.png';
import image9 from '../assets/website/testm2.png';
import image10 from '../assets/website/testm3.png';
import Footer from '../components/Footer';
import MindAsk from '../components/MindAsk';
import FaqSection from '../components/Faq';

import MemberWrapper from '../components/TestimonalWrapper';
import LandingNav from '../components/NavBar';


function AboutUs() {
  return (
    <div  className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
        <LandingNav/>
        <MindAsk />
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12 overflow-hidden">
  
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">We are the people who make up Eshop</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Our philosophy is simple; hire great people and give them the resources and support to do their best work.
        </p>
      </div>

      
      <div className="relative w-full max-w-6xl h-full mx-auto bg-gray-900">
  <div className="absolute top-0 left-4 transform -translate-x-1/2">
    <img
      src={image1}
      alt="Team Member 1"
      className="w-48 h-48 object-cover rounded-lg shadow-lg shadow-black"
    />
  </div>
  <div className="absolute top-0 right-11 transform translate-x-1/2">
    <img
      src={image2}
      alt="Team Member 2"
      className="w-48 h-48 object-cover rounded-lg shadow-lg shadow-black"
    />
  </div>
  <div className="absolute bottom-56 left-16 transform -translate-x-1/2 translate-y-1/2">
    <img
      src={image3}
      alt="Team Member 3"
      className="w-48 h-48 object-cover rounded-lg shadow-lg shadow-black"
    />
  </div>
  <div className="absolute bottom-56 right-16 transform translate-x-1/2 translate-y-1/2">
    <img
      src={image4}
      alt="Team Member 4"
      className="w-48 h-48 object-cover rounded-lg shadow-lg shadow-black"
    />
  </div>
</div>


     
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
    <FaqSection />
    <div>
    <h1 className='flex items-center justify-center font-bold text-6xl tracking-tight text-black dark:text-gray-100'>
    Testimonials 
</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 bg-white dark:bg-gray-900 p-6">
  <MemberWrapper
    image={image5}
    name="Lisa Green"
    role="I recommend it to everyone!"
  />
  <MemberWrapper
    image={image8}
    name="Tom White"
    role="A gadget lover's paradise!"
  />
  <MemberWrapper
    image={image6}
    name="Nina Black"
    role="I can't stop shopping!"
  />
  <MemberWrapper
    image={image9}
    name="Jake Blue"
    role="I found my dream laptop here!"
  />
  <MemberWrapper
    image={image7}
    name="Mia Red"
    role="Best prices and selection!"
  />
  <MemberWrapper
    image={image10}
    name="Chris Grey"
    role="This site is a treasure trove of gadgets!"
  />
</div>
    </div>
   


    <Footer />
    </div>
  );
}

export default AboutUs;
