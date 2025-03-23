import React, { useState } from 'react';
import backgroundImage from '../assets/Images/Footer.jpg';
import backgroundImage2 from '../assets/Images/backimg2.png';

import ServicesPage from '../components/ServicesPage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DigitalServices = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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
      "title": "Highly Adaptable to Ever-Evolving Markets",
      "descriptions": [
        "Our cloud-based software adapts to the ever-evolving needs of the retail market, staying flexible for diverse business requirements.",
        "We create retail solutions that evolve with changing demands, keeping your business competitive.",
        "Our platform is designed to grow with you, offering custom options to match your unique needs."
      ]
    },
    {
      title: "Customizable Solutions",
      description: "We create retail solutions that evolve with changing demands, keeping your business competitiveWe create retail solutions that evolve with changing demands, keeping your business competitive.",
    },
    {
      title: "Scalable for Growth",
      description: "Our platform is designed to grow with you, offering custom options to match your unique needs.",
    },
    {
      title: "Real-Time Analytics",
      description: "Track your business performance with real-time data insights and analytics.",
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate with existing tools and software to streamline operations.Easily integrate with existing tools and software to streamline operations.Easily integrate with existing tools and software to streamline operations.Easily integrate with existing tools and software to streamline operations.Easily integrate with existing tools and software to streamline operations.",
    },
    {
      title: "AI-Powered Recommendations",
      description: "Leverage AI to optimize demand planning and improve decision-making.",
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
          <div className="flex-1 text-left space-y-4 ml-10 mr-10 mt-10">
            <h3 className="text-xl font-semibold text-[#a6adb9]">Procurement Management</h3>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Make Procurement Quick, Transparent, and Hassle-Free
            </h1>
            <h2 className="text-lg text-gray-700">
              Configure procurement processes as per your specifications. Bring your team and vendors together on a single platform to collaborate and close purchase orders in a jiffy.
            </h2>
            <button className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition">
              Request a demo
            </button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="https://www.supplymint.com/_next/static/images/ProcMainGraph-203a27af214a302f90caeee2fb7be222.svg"
              alt="Demand Planning"
              className="w-full max-w-md"
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
            Designed For Modern Teams
          </h1>
          <p className="text-xl font-semibold text-[#a6adb9] mx-auto mt-20 mb-20">
            Empowering Collaboration, Streamlining Operations, and Maximizing Productivity
            for Today's Agile Workforce.
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
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/ProcGraphSixth-04cc0d5769d3c7604fbc64f9c5b88a1f.svg" alt="Create Weekly and Monthly Open To Buy Plans" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Quickly Create and Process Purchase Indents
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Reduce Errors: Simplify purchase indent creation with assisted dropdown values that eliminate manual errors and ensure data accuracy.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Streamline Approvals: Speed up the review process by editing, approving, and batching purchase indents in just a few clicks. </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Direct Ordering: Save time by ordering directly from vendors' catalogs, making procurement faster and more reliable.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-30">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Purchase Order Creation
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    One-Click Conversions: Convert approved purchase indents into purchase orders instantly, reducing processing time and increasing efficiency.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Flexible Order Options: Duplicate or reference previous purchase orders for repeat transactions, or create ad-hoc orders from scratch to meet specific needs.</p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    One-Click Conversions: Convert approved purchase indents into purchase orders instantly, reducing processing time and increasing efficiency.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/ProcGraphEighth-63d7f43d0cbf799a84527f9f496e77a5.svg" alt="Category-Wise Buying Plan" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-6 lg:px-20 mt-30">
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/ProcGraphSeventh-498338e3e601665c88f642bac24b3203.svg" alt="AI Forecasts" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Transparency in Transactio
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Collaborative Workflows: Foster seamless collaboration across teams for internal processes, ensuring a smooth and efficient workflow.</p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Vendor Interaction: Easily collaborate with verified vendors for sample approvals, pricing negotiations, and quotation requests all within a single platform.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Remove Lags
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Partial Approvals: Enable teams to process partial orders without requiring additional approvals, cutting down delays and improving efficiency.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/ProcGraphForth-29b6c3d21ef20c3f5cafbde3fe009690.svg" alt="Sales Forecast" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DigitalServices;
