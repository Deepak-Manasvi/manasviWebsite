/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import backgroundImage from '../assets/Images/Footer.jpg';
import backgroundImage2 from '../assets/Images/backimg2.png';
import image from '../assets/digitalMarketing/digital-marketing-with-icons-business-people_53876-94833.avif';
import image2 from '../assets/digitalMarketing/how-to-choose-a-digital-marketing-agency.webp';
import image3 from '../assets/digitalMarketing/download.jpeg';
import image4 from '../assets/digitalMarketing/premium_photo-1661693870771-dbbd8b95b2b1.jpeg';
import image5 from '../assets/digitalMarketing/1708433841540.jpeg';

import ServicesPage from '../components/ServicesPage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DigitalServices = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const settings = {
    infinite: true,
    speed: 5000, // Adjust speed for smooth scrolling
    slidesToShow: 5, // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Makes it continuous
    cssEase: "linear", // Makes scrolling smooth
    pauseOnHover: false,
  };

  const clientLogos = [
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
    "https://www.supplymint.com/_next/static/images/Kalki-7018965a9189f7f83be76a56d893604a.svg",
  ];
  const cards = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your Google rankings and drive organic traffic with expert SEO strategies.",
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Engage your audience and build brand awareness on platforms like Facebook, Instagram, and LinkedIn.",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Get instant leads and maximize ROI with targeted ad campaigns on Google, Facebook, and more.",
    },
    {
      title: "Content Marketing",
      description: "Boost engagement with high-quality blogs, website content, infographics, and video marketing.",
    },
    {
      title: "Email Marketing & Automation",
      description: "Convert leads into customers with personalized email campaigns and automated workflows.",
    },
    {
      title: "Online Reputation Management (ORM)",
      description: "Enhance your brand’s image by managing reviews, customer feedback, and online presence.",
    },
  ];

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
      <div className="w-full overflow-x-hidden ">
      <div className="flex flex-col md:flex-row bg-white py-30 rounded-lg shadow-lg">
  {/* Text Section */}
  <div className="md:w-1/2 text-left space-y-4 ml-10 mt-20">
    <h3 className="text-xl font-semibold text-[#a6adb9]">
      Digital Marketing Services 🚀
    </h3>
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
      Boost Your Brand with Our Expert Digital Marketing Services 🚀
    </h1>
    <h2 className="text-lg text-gray-700">
      At Manasvi Technology, we specialize in data-driven digital marketing strategies that help businesses boost their online presence, brand awareness, and conversions. Whether you're a startup or an established business, our customized marketing solutions ensure that you reach the right audience and maximize your ROI.
    </h2>
    <button className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition">
      Request a demo
    </button>
  </div>

  {/* Image Section (Smaller but aligned) */}
  <div className="md:w-2/4 flex justify-center md:justify-end">
    <img
      src={image}
      alt="Demand Planning"
      className="w-[700px] h-auto object-contain"
    />
  </div>
</div>


        {/* Client Slider */}
        <div className="bg-black py-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-10">Trusted by 1k+ businesses</h2>
          <div className="w-full">
            <Slider {...settings}>
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <img src={logo} alt={`Client ${index + 1}`} className="w-50 mx-auto" />
                </div>
              ))}
            </Slider>
          </div>
          <button className="mt-10 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition">
            View All Clients
          </button>
        </div>


        {/* Designed For Modern Teams */}
        <div className="bg-gray-100 py-20 overflow-x-auto text-center px-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl font-semibold text-[#a6adb9] mx-auto mt-20 mb-20">
          We offer result-driven digital marketing strategies to boost your online presence and grow your business.
          </p>

          {/* 6 cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <div key={index} className="bg-white p-6 shadow-lg">
                <img
                  className="mb-5 w-12 h-10"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjY2NjcgMjcuNDM5N0MxNS4zMzMzIDI3LjQzOTcgMTguMzMzMyAyNC4zODk3IDE4LjMzMzMgMjAuNjg5N0MxOC4zMzMzIDE4Ljc1NjQgMTcuMzgzMyAxNi45MjMxIDE1LjQ4MzMgMTUuMzczMUMxMy41ODMzIDEzLjgyMzEgMTIuMTUgMTEuNTIzMSAxMS42NjY3IDkuMTA2MzhDMTEuMTgzMyAxMS41MjMxIDkuNzY2NjcgMTMuODM5NyA3Ljg1IDE1LjM3MzFDNS45MzMzMyAxNi45MDY0IDUgMTguNzczMSA1IDIwLjY4OTdDNSAyNC4zODk3IDggMjcuNDM5NyAxMS42NjY3IDI3LjQzOTdaIiBmaWxsPSIjNjY2QUY2IiBzdHJva2U9IiM2NjZBRjYiIHN0cm9rZS13aWR0aD0iMi41ODQ2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+"
                  alt="Icon"
                />
                <h1 className="font-semibold text-lg mb-4">{card.title}</h1>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open To Buy Plans Section */}
        <div className="bg-white py-10">
          {/* Section 1 */}
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src={image2} alt="Create Weekly and Monthly Open To Buy Plans" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Choose Manasvi Technology for Digital Marketing? 🚀

              </h1>
              <ul className="mt-10 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    At Manasvi Technology, we craft smart digital strategies to boost your brand’s online presence and drive real growth. Our expert team uses SEO, social media, PPC, and content marketing to attract the right audience and increase conversions.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    We believe in data-driven, customized solutions that fit your business needs. Whether you’re a startup or an established brand, our cost-effective and results-oriented approach ensures success in the competitive digital world. 🚀
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Our Step-by-Step Approach to Success 🔄
              </h1>
              <ul className="mt-10 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    At Manasvi Technology, we craft tailored digital marketing strategies that align with your business goals. From in-depth research and planning to execution and continuous optimization, we ensure every campaign drives measurable results. With a data-driven approach, we help your brand grow and stay ahead in the digital world. 🚀
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src={image3} alt="Category-Wise Buying Plan" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src={image4} alt="AI Forecasts" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Stay Ahead with the Latest Digital Marketing Trends 🚀
              </h1>
              <ul className="mt-10 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Digital marketing is constantly evolving, and staying updated with the latest trends is key to success. From AI-driven marketing and voice search optimization to influencer collaborations and personalized content, businesses must adapt to stay competitive.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    At Manasvi Technology, we leverage cutting-edge strategies like automation, data-driven insights, and emerging social media trends to help brands grow. Our expert team ensures your business stays ahead in the ever-changing digital landscape. 📈
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Get a Free Digital Marketing Audit – Boost Your Online Presence! 🚀
              </h1>
              <ul className="mt-10 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    At Manasvi Technology, we analyze your website, SEO, and marketing performance to identify growth opportunities. Get expert insights and actionable strategies to improve your online presence—completely free! 💡
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src={image5} alt="Sales Forecast" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DigitalServices;
