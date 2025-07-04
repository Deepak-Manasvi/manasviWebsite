/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import mission from "../assets/mission.svg";
import vision from "../assets/vision.svg";

const AboutUsPage = () => {
  const [showMission, setShowMission] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent bg-center">
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
        {/* vision and mission */}
        <div className="bg-white shadow-lg">
          <div className="px-10 flex flex-col gap-5 py-20 mx-auto ">
            <div className="flex lg:flex-row w-full sm:flex-col md:flex-col lg:justify-evenly ">
              <div className="lg:w-[50%] space-y-3">
                <p className="text-3xl font-bold">Mission</p>
                <p className="text-lg break-words lg:w-[95%] tracking-wider">
                  "At Mansharp Technologies Pvt. Ltd., our mission is to
                  leverage cutting-edge technology and innovative solutions to
                  simplify business operations and drive growth. We aim to
                  empower organizations with smarter, more efficient tools that
                  streamline processes, enhance productivity, and deliver
                  sustainable value. By focusing on customer-centric solutions
                  and fostering an environment of continuous innovation, we
                  aspire to be a trusted partner in transforming industries and
                  driving digital excellence."
                </p>
              </div>

              <div className="flex w-[50%] mx-auto justify-center lg:mr-12">
                <img src={mission} className="" />
              </div>
            </div>
            <div className="flex w-full lg:flex-row-reverse lg:justify-between items-center sm:flex-col md:flex-col">
              <div className="lg:w-[50%] space-y-3">
                <p className="text-3xl font-bold">Vision</p>
                <p className="text-lg lg:mb-2  break-words lg:w-[95%] tracking-wider">
                  "To become a globally recognized leader in technology
                  solutions, enabling businesses of all sizes to navigate the
                  complexities of the digital world with ease. We envision a
                  future where Mansharp Technologies empowers enterprises
                  through transformative, agile, and scalable technology that
                  drives efficiency, sustainability, and long-term success."
                </p>
              </div>

              <div className="md:mb-2 w-[45%] mx-auto mt-4 flex items-center justify-center bg-amber-50">
                <img src={vision} className="" />
              </div>
            </div>
          </div>
        </div>

        {/* our story */}
        <div className="relative flex flex-col items-center px-10 bg-transparent">
          <h2 className="text-4xl font-extrabold text-center my-10">
            Our Story
          </h2>

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
                      Founded in <span className="font-medium">2023</span>
                    </h3>
                    <p className="text-gray-600 break-word">
                      In 2023, Mansharp Technologies Pvt. Ltd. was founded with
                      a single vision: to revolutionize the way businesses
                      approach technology and operations. The company was born
                      out of a deep understanding of the challenges faced by
                      businesses in today’s rapidly evolving technological
                      landscape.
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
                      How the company grew
                    </h3>
                    <p className="text-gray-600 break-words">
                      What began as a modest initiative has now evolved into a
                      company on a path to global recognition, driven by a
                      steadfast dedication to creating value through technology.
                      The name Mansharp—meaning "intelligent" or "wise"—was
                      chosen to reflect the company’s core philosophy of
                      intelligent solutions that simplify complex problems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 p-6">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Deep Dive into Mansharp Technologies{" "}
                    </h3>
                    <p className="text-gray-600 break-words">
                      Mansharp Technologies Pvt. Ltd. is an Information
                      Technology company based in Indore, Madhya Pradesh, India.
                      Established on January 6, 2023, it operates as a One
                      Person Company under the leadership of its Director, Arpit
                      Jain.
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
                      Mansharp Technologies to a Full-Fledged SAAS Product
                    </h3>
                    <p className="text-gray-600 break-words">
                      Transforming Mansharp Technologies into a SaaS provider
                      would leverage its existing skills in web development,
                      digital marketing, and UI/UX design, and provide a
                      scalable, subscription-based business model. By developing
                      a targeted product that solves customer problems,
                      integrating automated solutions, and scaling effectively,
                      Mansharp could position itself as a key player in the SaaS
                      market.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 p-6">
                  <div className="bg-white  shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Scaled Mansharp Technologies to 400+ active users,{" "}
                      <span className="font-medium">2024</span>
                    </h3>

                    <div className="grid lg:grid-cols-2 space-y-2 mt-2 mb-2">
                      <div className="border-l-5 rounded-md border-indigo-800 p-2">
                        <p>+30</p>
                        <p>Retailer</p>
                      </div>
                      <div className="border-l-5 rounded-md border-indigo-800 p-2">
                        <p>+300</p>
                        <p>Suppliers</p>
                      </div>
                      <div className="border-l-5 rounded-md border-indigo-800 p-2">
                        <p>25 Crores +</p>
                        <p>Transaction Value</p>
                      </div>
                      <div className="border-l-5 rounded-md border-indigo-800 p-2">
                        <p>97%</p>
                        <p>Client Satisfaction</p>
                      </div>
                    </div>
                    <p className="text-gray-600 break-words">
                      Through innovation, user engagement, and strategic
                      scaling, they would have built a strong, loyal user base,
                      positioning themselves for future growth.
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
                      The company might be involved in areas such as software
                      development, IT consulting, or tech product innovation,
                      aiming to stay ahead in a rapidly changing market. Their
                      goal is probably to offer solutions that are not only
                      efficient but also transformative, positioning themselves
                      as leaders in innovation for the future.
                    </p>
                  </div>
                </div>
              </div>
              {/* AI Story*/}
              {/* Timeline Item 5 */}
              <div className="flex items-center w-full">
                <div className="w-1/2 p-6">
                  <div className="bg-white  shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-3xl mb-4">
                      Mansharp Technologies: Built on AI, Driven by Innovation
                    </h3>
                    <p className="text-gray-600 break-words">
                      At Mansharp, AI isn't just a feature — it's our
                      foundation. We build intelligent solutions that automate
                      tasks, generate insights, and drive smarter decisions.
                      From AI chatbots to predictive systems, our tools are
                      designed to think, learn, and scale with your business.
                    </p>
                  </div>
                </div>
                {/* Dot */}
                <div className="w-10 flex justify-center z-10">
                  <div className="h-6 w-6 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
              {/* Fintech */}
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
                      Mansharp Technologies: AI-Driven FinTech Solutions
                    </h3>
                    <p className="text-gray-600 break-words">
                      At Mansharp Technologies, we’re redefining finance with
                      AI. From fraud detection to smart insights, our adaptive,
                      scalable systems power faster, safer, and more intelligent
                      FinTech experiences.
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
