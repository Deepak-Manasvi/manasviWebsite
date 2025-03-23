import React, { useState } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import ServicesPage from "../components/ServicesPage";

const AppServices = () => {
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
          <h1 className="text-4xl text-white font-bold">App Development</h1>
          <nav className="mt-2">
            <a href="/" className="text-white">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a href="/services/app" className="text-white font-bold underline">
              App Development
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-center font-semibold mb-4 py-2 px-20 bg-[#BDBDFA] rounded-lg">
              App Development
            </h2>
            <h3 className="text-2xl font-bold mb-2">
              Your personal Project, a few taps away.
            </h3>
            <p className="text-gray-700 mb-4">
              At Manasvi Technologies, we offer comprehensive app development
              services tailored to meet your unique business needs. Our expert
              team specializes in creating high-quality, user-friendly mobile
              applications.
            </p>
            <div className="flex flex-wrap mb-4">
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                Web
              </span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                Software
              </span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                SMO
              </span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">
                Ads
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
                Our app development process includes thorough research, design,
                development, testing, and deployment. We ensure that every app
                we create is optimized for performance and provides an excellent
                user experience.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you need a native app for iOS or Android, or a
                cross-platform solution, we've got you covered. Our developers
                are proficient in the latest technologies and frameworks to
                deliver scalable and secure mobile applications.
              </p>
              <p className="text-gray-700 mb-4">
                We understand the importance of keeping up with the latest
                trends in mobile app development. From integrating AI and
                machine learning to implementing advanced security features, we
                make sure your app stands out in the competitive market.
              </p>
              <p className="text-gray-700 mb-4">
                Partner with us to bring your app idea to life. We are committed
                to delivering top-notch app development services that drive
                business growth and enhance customer engagement.
              </p>
            </div>
            <button
              onClick={toggleShowMore}
              className="bg-[#3c4785] text-white py-2 px-4 rounded-full"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="App Development"
            className="rounded-lg shadow-md animate-pulse"
          />
        </div>
      </div>
      {/* <ServicesPage /> */}
    </div>
  );
};

export default AppServices;
