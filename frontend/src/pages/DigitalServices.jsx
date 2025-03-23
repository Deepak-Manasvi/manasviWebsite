import React, { useState } from 'react';
import backgroundImage from '../assets/Images/Footer.jpg';
import backgroundImage2 from '../assets/Images/backimg2.png';

import ServicesPage from '../components/ServicesPage';

const DigitalServices = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="min-h-screen bg-cover bg-center">
      <div className="h-[40vh] p-4 flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-bold">Digital Marketing</h1>
          <nav className="mt-2">
            <a href="/" className="text-white">Home</a>
            <span className="text-white mx-2">→</span>
            <a href="/services/digital" className="text-white font-bold underline">Digital Marketing</a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap" >
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-center font-semibold mb-4 py-2 px-20 bg-[#BDBDFA] rounded-lg">Digital Marketing</h2>
            <h3 className="text-2xl font-bold mb-2">Transform Your Business with Digital Marketing</h3>
            <p className="text-gray-700 mb-4">
              At Manasvi Technologies, we offer comprehensive digital marketing services designed to elevate your brand and reach your target audience effectively.
            </p>
            <div className="flex flex-wrap mb-4">
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">Web</span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">Software</span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">SMO</span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">Ads</span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">SEO</span>
            </div>
            <div className={`overflow-hidden transition-all duration-700 ${showMore ? 'max-h-screen' : 'max-h-40'}`}>
              <p className="text-gray-700 mb-4">
                Our digital marketing services encompass SEO, social media optimization, online advertising, and content marketing. We help you build a robust online presence, engage with your audience, and drive conversions.
              </p>
              <p className="text-gray-700 mb-4">
                With our data-driven approach, we create customized strategies that align with your business goals. We analyze market trends, understand consumer behavior, and implement effective campaigns to maximize your ROI.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of digital marketing experts is committed to staying ahead of industry trends and utilizing the latest tools and techniques to deliver measurable results. From boosting your website's search engine ranking to creating engaging social media content, we cover all aspects of digital marketing.
              </p>
              <p className="text-gray-700 mb-4">
                Partner with us to enhance your digital footprint, attract more customers, and achieve sustainable growth. Let's harness the power of digital marketing to transform your business.
              </p>
            </div>
            <button onClick={toggleShowMore} className="bg-[#3c4785] text-white py-2 px-4 rounded-full">
              {showMore ? 'Show Less' : 'Learn More'}
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1674027326252-a09b3473e18f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Digital Marketing" className="rounded-lg shadow-md" />
        </div>
      </div>
      {/* <ServicesPage /> */}
    </div>
  );
};

export default DigitalServices;
