import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Images/backimg2.png";
import OurTeam from "./OurTeam";
import Marquee from "./Marquee";
import about1 from "../assets/image/about1.png";
import about2 from "../assets/image/about2.png";
import about3 from "../assets/image/about3.png";
import about4 from "../assets/image/about4.png";

const AboutUsPage = () => {
  const navigate = useNavigate();
  // const imageUrl =
  //   "https://images.unsplash.com/photo-1649877508777-1554357604eb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className="bg-cover bg-center py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex  items-center">
        {/* Left side - Image grid */}

        <div className="relative h-[35vw] w-1/2 p-8">
          <div className="absolute top-0 w-[15vw] h-[15vw] left-[15vw] z-20">
            <img
              src={about1}
              alt="Team collaboration"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[5vw] z-30 right-[8vw] mt-8 w-[15vw] h-[15vw]">
            <img
              src={about2}
              alt="Team collaboration"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-[8vw] w-[15vw] h-[15vw] left-[8vw] mt-8 z-10">
            <img
              src={about3}
              alt="Team collaboration"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 w-[15vw] h-[15vw] right-[11vw] mt-8 z-40">
            <img
              src={about4}
              alt="Team collaboration"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - About Us content (preview only) */}
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-[#7f22fe] mb-6">About Us</h2>

            <div className="text-gray-700">
              <p className="mb-4">
                Welcome to the heart of innovation, where every line of code we
                write is a step towards transforming dreams into digital
                realities. At Manasvi Technologies (OPC) Pvt. Ltd, we don't just
                craft websites, applications, and software, we sculpt
                experiences that resonate.
              </p>
              <p className="mb-4">
                Welcome to Manasvi Technologies (OPC) Pvt. Ltd, where the
                journey of transformation begins. Our journey began with a
                simple mission:to bridge the gap between technology and human
                connection. From the moment you step into our digital world, you
                embark on a journey beyond conventional boundaries. Our team of
                tech artisans thrives on challenges, turning complexities into
                elegant solutions. But we're more than just developers, we're
                dream weavers.{" "}
              </p>{" "}
              <p className="mb-4">
                From Website development to digital marketing strategies, we're
                your trusted companions on the road to success. But our journey
                doesn't end with deployment. We're here for the long
                haul,navigating the ever-changing landscape of technology
                alongside you. We provide not just solutions, but partnerships
                built on trust, integrity, and a shared vision for tomorrow.{" "}
              </p>
            </div>

            <button
              onClick={() => navigate("/about")}
              className="bg-[#7f22fe] text-white py-2 px-6 mt-4 rounded-full hover:bg-purple-500 transition duration-300 flex items-center"
            >
              <span className="mr-1">Learn More</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
