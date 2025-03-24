/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import OurTeam from "../components/OurTeam";
import Marquee from "./../components/Marquee";
import ball from "../assets/Images/ball.png";
import { FaPlus } from "react-icons/fa6";
import mission from '../assets/mission.svg'
import vision from '../assets/vision.svg'

const AboutUsPage = () => {
  const [showMission, setShowMission] = useState(true);

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  
  return (
    <div className="min-h-screen bg-cover bg-center bg-black">
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold">
            About Us
          </h1>
          <nav className="mt-4">
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a
              href="/about"
              className="text-white font-bold underline hover:text-gray-200"
            >
              About Us
            </a>
          </nav>
        </div>
      </div>
      <div className=" mx-auto space-y-10">
        <div className="px-10 mb-20">

          <p className="font-bold text-5xl text-gray-50 break-words">
            Simplifying Supply Chain{" "}
            <span className="hidden sm:inline lg:hidden">
              {" "}
              <br />{" "}
            </span>
            Planning{" "}
            <span className="hidden sm:inline">
              {" "}
              <br />{" "}
            </span>
            and Operations
          </p>
        </div>

        {/* vision and mission */}
        <div className="bg-white shadow-lg">
          <div className="px-10 flex flex-col gap-5 py-20 mx-auto " >
            <div className="flex lg:flex-row w-full sm:flex-col md:flex-col lg:justify-evenly ">
              <div className="lg:w-[50%] space-y-3">
                <p className="text-3xl font-bold">Mission</p>
                <p className="text-lg break-words lg:w-[95%] tracking-wider">
                  Supplymint’s mission is to revolutionise retail supply chain
                  management by digitising and automating operations. We strive to
                  create a seamless and transparent ecosystem where collaboration
                  thrives, empowering businesses to make smarter, faster decisions
                  that drive efficiency and growth.
                </p>
              </div>

              <div className="flex w-[52%] mx-auto justify-center lg:mr-12">
                <img src={mission} className="" />
              </div>
            </div>
            <div className="flex w-full lg:flex-row-reverse lg:justify-between sm:flex-col md:flex-col">
              <div className="lg:w-[45%] space-y-3">
                <p className="text-3xl font-bold">Vision</p>
                <p className="text-lg lg:mb-2  break-words lg:w-[95%] tracking-wider">
                  Our vision is to be the world’s most trusted provider of
                  automation solutions for the retail supply chain. We aspire to
                  lead a global movement toward streamlined, data-driven
                  operations, enabling businesses of all sizes to unlock their
                  full potential in an increasingly dynamic market.
                </p>
              </div>

              <div className="md:mb-2 w-[60%] mx-auto mt-4 flex items-center justify-center">
                <img src={vision}
                  className="w-[90%]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* our story */}
        <div className="relative flex flex-col items-center px-10">
          <h2 className="text-4xl font-extrabold text-center my-10">Our Story</h2>

          {/* Timeline Container */}
          <div className="w-[90%] mx-auto">
            <div className="absolute left-1/2 mt-9 lg:h-[91%] md:h-[95%] sm:h-[95%] w-[5px] bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="flex flex-col space-y-10 max-w-max">
              {/* Timeline Item 1 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 p-10">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Founded in <span className="font-medium">2015</span>
                    </h3>
                    <p className="text-gray-600 break-word">
                      Our journey began with the establishment of TurningCloud Solutions Pvt Ltd in 2015. With a small team of ambitious tech experts, we launched into providing digital solutions to Startups, SME and large enterprises.
                    </p>
                  </div>
                </div>
                {/* Dot */}
                <div className="w-10 flex justify-center z-10">
                  <div className="h-6 w-6 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2 "></div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center w-full">
                <div className="w-1/2"></div>
                {/* Dot */}
                <div className="w-10 flex justify-center z-10">
                  <div className="h-6 w-6 ml-1 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2 p-6">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Expanding Technology Solutions
                    </h3>
                    <p className="text-gray-600 break-words">
                      With a diverse portfolio of technology services,
                      TurningCloud rapidly grew to a team size of 50 by 2018. We
                      helped brands achieve their digital transformation
                      objectives with custom softwares and integrations, some of
                      which include: Dalmia Bharat Group, Patanjali, Hindware,
                      Core Diagnostics, Resurgent India, Medecube, EasyMyGST,
                      ScoreMe etc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 p-6">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Deep Dive into Supply Chain Solutions{" "}
                    </h3>
                    <p className="text-gray-600 break-words">
                      While building solutions around supply chain management for
                      a few of our clients, we gained in-depth knowledge and began
                      to develop an out-of-the-box software solution which
                      entirely aimed at improvising and automating supply chain
                      planning and operations.
                    </p>
                  </div>
                </div>
                {/* Dot */}
                <div className="w-10 flex justify-center z-10">
                  <div className="h-6 w-6 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2"></div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-center w-full">
                <div className="w-1/2"></div>
                {/* Dot */}
                <div className="w-10 flex justify-center z-10">
                  <div className="h-6 w-6 ml-1 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2 p-6">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Supply Chain Solutions to a Full-Fledged SAAS Product
                    </h3>
                    <p className="text-gray-600 break-words">
                      In 2018, we merged all of our disconnected out-of-the-box
                      supply chain solutions and introduced them in a single
                      platform software called Supplymint. With seamlessly
                      connected and ready-to-use workflows, we made it convenient
                      for our clients looking for reliable supply chain software.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 p-6">
                  <div className="bg-white  shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Scaled Supplymint to 4000+ active users,{" "}
                      <span className="font-medium">2021</span>
                    </h3>

                    <div className="grid lg:grid-cols-2 space-y-2 mt-2 mb-2">
                      <div className="border-l-5 rounded-md border-indigo-800 p-2">
                        <p>+30</p>
                        <p>Retailer</p>
                      </div>
                      <div className="border-l-5 rounded-md border-indigo-800 p-2">
                        <p>+3000</p>
                        <p>Suppliers</p>
                      </div>
                      <div className="border-l-5 rounded-md border-indigo-800 p-2">
                        <p>2500 Crores +</p>
                        <p>Transaction Value</p>
                      </div>
                      <div className="border-l-5 rounded-md border-indigo-800 p-2">
                        <p>97%</p>
                        <p>Client Satisfaction</p>
                      </div>
                    </div>
                    <p className="text-gray-600 break-words">
                      With an objective to cater to a wider market, we’ve added
                      more depth to our platform with numerous use cases.
                    </p>
                  </div>
                </div>
                {/* Dot */}
                <div className="w-10 flex justify-center z-10">
                  <div className="h-6 w-6 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2"></div>
              </div>

              {/* Timeline Item 6 */}
              <div className="flex items-center w-full">
                <div className="w-1/2"></div>
                {/* Dot */}
                <div className="w-10 flex justify-center z-10">
                  <div className="h-6 w-6 ml-1 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2 p-6">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Innovation is our Future
                    </h3>
                    <p className="text-gray-600 break-words">
                      We continue to evolve our solution with rising modern supply
                      chain needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;