import React from 'react';
import backgroundImage from '../assets/Images/Footer.jpg'; // Update this path

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <div className="mb-4">
              <button className="px-4 py-2 bg-[#13193c] rounded-full text-sm hover:bg-purple-600">
                About Us
              </button>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
              Empower Your Financial Future
            </h1>
            <p className="mb-6 text-lg text-gray-300">
              Take control of your finances with our comprehensive solutions tailored to your needs.
            </p>
            <ul className="mb-6 text-left">
              <li className="mb-2 flex items-center">
                <span className="text-purple-500 mr-2">●</span> Saving
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-purple-500 mr-2">●</span> Payments
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-purple-500 mr-2">●</span> Investing
              </li>
              <li className="mb-2 flex items-center">
                <span className="text-purple-500 mr-2">●</span> Scheduling
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">●</span> Tracking
              </li>
            </ul>
            <button className="px-4 py-2 bg-[#13193c] rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Learn More
            </button>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img src="" alt="Phone Mockup" className="" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
