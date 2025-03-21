import React from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import Director from "../assets/Images/arpit jain.jpg";

import back2 from "../assets/Images/backimg2.png";
import OurTeam from "../components/OurTeam";
3;
import Marquee from "./../components/Marquee";

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold">
            Meet Our Team
          </h1>
          <nav className="mt-4">
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a
              href="/team"
              className="text-white font-bold underline hover:text-gray-200"
            >
              Our Team
            </a>
          </nav>
        </div>
      </div>
      <section
        className="py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}
      >
        <div className="container mx-auto flex flex-col justify-center items-center px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-xl rounded-lg overflow-hidden w-full md:w-3/4 lg:w-2/3 xl:w-1/2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center md:rounded-ee-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={Director}
                alt="Team Member"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <h3 className="text-3xl font-bold text-gray-800">Arpit Jain</h3>
              <span className="block bg-purple-100 text-purple-800 text-sm font-semibold py-1 px-2 rounded-full mb-4 inline-block">
                Managing Director
              </span>
              <h4 className="text-xl font-semibold mb-4 text-gray-700">
                Leading Innovation with Passion and Excellence.
              </h4>
              <p className="text-gray-600 mb-6">
                Arpit Jain brings a wealth of experience and a passion for
                technology to our team. His leadership and vision drive our
                projects forward, ensuring every client receives the best
                service possible. Arpit is dedicated to fostering innovation and
                excellence in all aspects of our work.
              </p>
              {/* <div className="flex flex-wrap">
                {["Web Development", "Software Solutions", "Social Media Optimization", "Search Engine Optimization", "Digital Advertising"].map(
                  (item, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 text-sm font-semibold py-1 px-2 rounded-full mr-2 mb-2"
                    >
                      {item}
                    </span>
                  )
                )}
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <OurTeam />
      {/* <Marquee /> */}
    </div>
  );
};

export default TeamSection;
