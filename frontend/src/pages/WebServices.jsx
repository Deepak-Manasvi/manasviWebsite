import React, { useState } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import ServicesPage from "../components/ServicesPage";

const WebServices = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="min-h-screen bg-cover bg-center">
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-bold">Web Development</h1>
          <nav className="mt-2">
            <a href="/" className="text-white">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a href="/services/web" className="text-white font-bold underline">
              Web Development
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-center font-semibold mb-4 py-2 px-20 bg-[#BDBDFA] rounded-lg">
              Web Development
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Transform Your Vision into Reality
            </h3>
            <p className="text-gray-700 mb-4">
              At Manasvi Technologies, we specialize in creating dynamic,
              scalable, and secure web solutions tailored to your unique
              business needs. Our team of expert developers and designers are
              dedicated to transforming your vision into a digital masterpiece.
            </p>
            <div className="flex flex-wrap mb-4">
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                Web Development
              </span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                Software Solutions
              </span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                SMO
              </span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                Digital Ads
              </span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                SEO
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${showMore ? "max-h-screen" : "max-h-40"
                }`}
            >
              <p className="text-gray-700 mb-4">
                Our web development services encompass a wide range of
                solutions, including custom web applications, e-commerce
                platforms, and content management systems. We leverage the
                latest technologies to ensure your website is not only visually
                appealing but also fast, responsive, and secure.
              </p>
              <p className="text-gray-700 mb-4">
                Our team works closely with you from the initial consultation to
                the final launch, ensuring that every aspect of your website
                aligns with your business goals and brand identity. We take
                pride in our attention to detail and commitment to delivering
                high-quality, user-friendly web solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Beyond development, we offer comprehensive digital marketing
                services, including SEO, SMO, and digital advertising, to help
                you reach your target audience and achieve your business
                objectives. Our holistic approach ensures that your online
                presence is optimized for success.
              </p>
              <p className="text-gray-700 mb-4">
                Partner with Manasvi Technologies for unparalleled web
                development services that drive growth and innovation. Let's
                build something extraordinary together.
              </p>
            </div>
            <button
              onClick={toggleShowMore}
              className="bg-[#BDBDFA] text-black py-2 px-4 rounded-full"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Web Development"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      {/* <ServicesPage /> */}
    </div>
  );
};

export default WebServices;
