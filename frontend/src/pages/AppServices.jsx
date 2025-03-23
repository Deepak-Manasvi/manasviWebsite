import React, { useState } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import ServicesPage from "../components/ServicesPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppServices = () => {
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
      {/* <div className="container mx-auto mt-8 flex flex-wrap">
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
      </div> */}
      {/* <ServicesPage /> */}
      <div className="w-full overflow-x-hidden ">
        <div className="flex flex-col md:flex-row bg-white py-30 rounded-lg shadow-lg">
          <div className="flex-1 text-left space-y-4 ml-10 mt-20">
            <h3 className="text-xl font-semibold text-[#a6adb9]">Sales Order Management</h3>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Accurate OTB Forecasting with Automated Planning
            </h1>
            <h2 className="text-lg text-gray-700">
              Improve forecasting of Open To Buy Plans with consideration of changing seasons,
              sales patterns, closing inventory, and other anticipated changes.
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
              <img className="w-3/4" src="https://www.supplymint.com/_next/static/images/DemandGraph1-2d35d7926385336eb8fd78579cdc8b95.svg" alt="Create Weekly and Monthly Open To Buy Plans" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Create Weekly and Monthly Open To Buy Plans
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Automatically generate customized Open-to-Buy (OTB) forecasts to align inventory with market demands.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Create Category and Sub Category-Wise Buying Plans
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Build comprehensive OTB plans for different product categories and subcategories.
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
                Get Precise Forecasts with AI
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Leverage AI to assess key variables like seasonal trends, historical sales, and market fluctuations.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Synchronize OTB forecasts seamlessly with ERP and Warehouse Management Systems.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Discover Gaps in Sales Forecast
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" />
                  <p className="text-gray-700">
                    Compare actual sales with predicted and budgeted sales.
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

export default AppServices;
