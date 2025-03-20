import React, { useState } from "react";
import backgroundImage from "../assets/Images/backimg2.png";
import OurTeam from "./OurTeam";
import Marquee from "./Marquee";

const AboutUsPage = () => {
  const [showMission, setShowMission] = useState(true);

  return (
    <div className=" bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover",   }}>
      <div className="container mx-auto mt-8 flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <h3 className="text-2xl font-bold mb-2">
              Welcome to Manasvi Technologies (OPC) Pvt. Ltd
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              Welcome to the heart of innovation, where every line of code we
              write is a step towards transforming dreams into digital
              realities. At Manasvi Technologies (OPC) Pvt. Ltd, we don't just
              craft websites, applications, and software, we sculpt experiences
              that resonate.
            </p>
            <p className="text-gray-700 mb-4 text-sm">
              Welcome to Manasvi Technologies (OPC) Pvt. Ltd, where the journey
              of transformation begins. Our journey began with a simple mission:
              to bridge the gap between technology and human connection. From
              the moment you step into our digital world, you embark on a
              journey beyond conventional boundaries. Our team of tech artisans
              thrives on challenges, turning complexities into elegant
              solutions. But we're more than just developers, we're dream
              weavers.
            </p>
            <p className="text-gray-700 mb-4 text-sm">
              From Website development to digital marketing strategies, we're
              your trusted companions on the road to success. But our journey
              doesn't end with deployment. We're here for the long haul,
              navigating the ever-changing landscape of technology alongside
              you. We provide not just solutions, but partnerships built on
              trust, integrity, and a shared vision for tomorrow.
            </p>

            <button className="bg-[#3c4785] text-white py-2 px-4 rounded-full hover:bg-[#2c3569] transition duration-300">
              Learn more
            </button>
          </div>
        </div>
        <div className="right-container w-full md:w-1/2 p-4 flex flex-col items-center justify-center ">
          <div className=" p-16 rounded-md overflow-hidden bg-white">
            <div className="rounded-lg shadow-md overflow-hidden w-full max-h-[400px]  ">
              <img
                src="https://images.unsplash.com/photo-1649877508777-1554357604eb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Manage your finances the easy way"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
