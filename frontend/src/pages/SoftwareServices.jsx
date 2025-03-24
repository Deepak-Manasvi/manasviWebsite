import React, { useState } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import ServicesPage from "../components/ServicesPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SoftwareServices = () => {
  const [showMore, setShowMore] = useState(false);

  // eslint-disable-next-line no-unused-vars
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
      title: "Custom Software Development",
      description: "Tailor-made solutions designed to streamline operations and meet your unique business requirements.",
    },
    {
      title: "Enterprise Application Development",
      description: "Robust and scalable software built for large organizations to drive efficiency and growth.",
    },
    {
      title: "SaaS Solutions",
      description: "Cloud-based applications that offer flexibility, scalability, and seamless integration for your business.",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging interfaces crafted to enhance user experience and boost productivity.",
    },
    {
      title: "Software Integration & Migration",
      description: "Seamlessly integrate new solutions with existing systems and upgrade legacy software with minimal disruption.",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing updates, security enhancements, and technical support to ensure your software runs flawlessly.",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center">
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-bold">
            Software Development
          </h1>
          <nav className="mt-2">
            <a href="/" className="text-white">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a
              href="/services/software"
              className="text-white font-bold underline"
            >
              Software Development
            </a>
          </nav>
        </div>
      </div>
      <div className="w-full overflow-x-hidden ">
        <div className="flex flex-col md:flex-row bg-white py-30 rounded-lg shadow-lg">
          <div className="flex-1 text-left space-y-4 ml-10 mt-20">
            <h3 className="text-xl font-semibold text-[#a6adb9]">Software Development Services</h3>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Transform Your Business with Innovative Software Development Solutions
            </h1>
            <h2 className="text-lg text-gray-700">
              At Manasvi Technology, we create robust and scalable software solutions tailored to your business needs. Our experienced team leverages cutting-edge technology and agile methodologies to deliver custom applications that drive efficiency and growth.
            </h2>
            <button className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition">
              Request a demo
            </button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="https://www.supplymint.com/_next/static/images/InventMainGraph-13f0677a8dcac6bc209b7d922011c012.svg"
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
            Explore Our Software Development Services
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
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/DemandGraph1-2d35d7926385336eb8fd78579cdc8b95.svg" alt="Create Weekly and Monthly Open To Buy Plans" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Our Expertise in Software Innovation
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    At Manasvi Technology, our skilled team excels in delivering custom software solutions, SaaS applications, and seamless integrations that drive operational efficiency and business growth.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Why Partner with Manasvi Technology?
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    At Manasvi Technology, we combine innovative approaches with technical expertise to deliver custom software solutions that help your business thrive.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    We work closely with you to understand your unique needs, ensuring timely, scalable, and efficient solutions that drive success.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/DemandGraph1-2d35d7926385336eb8fd78579cdc8b95.svg" alt="Category-Wise Buying Plan" />
            </div>
          </div>

          {/* Section 3 */}
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/DemandGraph1-2d35d7926385336eb8fd78579cdc8b95.svg" alt="AI Forecasts" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Our Agile Development Process
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    We begin by understanding your unique goals and crafting a tailored strategy to ensure your vision comes to life.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Next, our design and development phases use agile methodologies for iterative improvements and rapid delivery.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Finally, rigorous testing, deployment, and ongoing support guarantee a seamless, scalable solution that drives success.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Our Cutting-Edge Technology
              </h1>
              <ul className="mt-8 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    At Manasvi Technology, we harness the latest tools and frameworks to build innovative, secure, and scalable software solutions. Our team stays ahead of industry trends to ensure your applications are future-ready.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    By leveraging advanced technologies like cloud computing, AI, and agile methodologies, we optimize our development process to drive efficiency and business growth.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/DemandGraph4-8a597e5926409c22296f97a77915c01e.svg" alt="Sales Forecast" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SoftwareServices;
