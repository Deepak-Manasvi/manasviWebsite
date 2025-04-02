/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import  image1 from "../assets/webServices/web-development.png";
import  image2 from "../assets/webServices/whyCooseUs.jpg";
import  image3 from "../assets/webServices/Web-Development-Process.jpg";
import  image4 from "../assets/webServices/1100-W-X-600-H-Pixel1-1536x693.jpg";
import  image5 from "../assets/webServices/Latest-technologies-for-web-development1.jpg";
import ServicesPage from "../components/ServicesPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";

import clientImage1 from "../assets/Client Logo/BobbySkinClinic.png"
import clientImage2 from "../assets/Client Logo/LogoRoShield.png"
import clientImage3 from "../assets/Client Logo/MahamayaLogo.png"
import clientImage4 from "../assets/Client Logo/ShivanshAssociates.png"
import clientImage5 from "../assets/Client Logo/drtooth.png"
import clientImage6 from "../assets/Client Logo/aaradhyahomeopathy.png"
import clientImage7 from "../assets/Client Logo/anteriordesinrstudio.png"
import clientImage8 from "../assets/Client Logo/bellissimointerior.png"
import clientImage9 from "../assets/Client Logo/monuelectronics.jpg"
import clientImage10 from "../assets/Client Logo/ROshield.png"


const WebServices = () => {
  const [showMore, setShowMore] = useState(false);
 
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const clientLogos = [
    clientImage1, clientImage2, clientImage3, clientImage4,
    clientImage5, clientImage6, clientImage7, clientImage8,
    clientImage9, clientImage10,
  ];
  const cards = [
    {
      title: "Custom Website Development",
      description:
        "We create fully customized websites tailored to your business goals, ensuring a seamless user experience.",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Boost your online sales with feature-rich, secure, and user-friendly e-commerce websites.",
    },
    {
      title: "Responsive Web Design",
      description:
        "Our websites adapt to any screen size, providing an optimal experience across all devices.",
    },
    {
      title: "Web Application Development",
      description:
        "We build dynamic and interactive web applications that streamline operations and improve efficiency.",
    },
    {
      title: "CMS Development",
      description:
        "Easily manage your content with powerful CMS platforms like WordPress, Shopify, and custom-built solutions.",
    },
    {
      title: "SEO-Optimized Websites",
      description:
        "Get found on search engines with our SEO-friendly development strategies.",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "We provide ongoing maintenance to keep your website secure, updated, and performing at its best.",
    },
    {
      title: "AI-Powered Web Solutions",
      description:
        "We integrate AI and machine learning capabilities to enhance automation and decision-making.",
    },
    {
      title: "Cloud-Based Web Solutions",
      description:
        "We develop scalable cloud-based web applications that ensure data security and easy access.",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center" >
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
      <div className="w-full overflow-x-hidden ">
        <div className="flex flex-col md:flex-row bg-white py-10 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="md:w-1/2 text-left space-y-4 ml-10 mt-10">
            <h3 className="text-xl font-semibold text-[#a6adb9]">
              Web Development Services | Manasvi Technology
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Build, Innovate, and Scale with Manasvi Technology
            </h1>
            <h2 className="text-lg text-gray-700">
              At Manasvi Technology, we specialize in crafting high-performance,
              scalable, and visually stunning websites that help businesses
              thrive in the digital world. Whether you're a startup, an
              enterprise, or an individual, our expert team delivers tailored
              web solutions to meet your unique needs.
            </h2>
            <button className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition">
              Request a demo
            </button>
          </div>

          {/* Image Section (Smaller but aligned) */}
          <div className="md:w-2/4 flex justify-center md:justify-end">
            <img
              src={image1}
              alt="Demand Planning"
              className="w-[500px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Client Slider */}
        <div className="bg-black py-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-10">
            Trusted by 1k+ businesses
          </h2>
          <div className="w-full">
  <Slider {...settings}>
    {clientLogos.map((logo, index) => (
      <div key={index} className="flex items-center justify-center h-32"> 
        <img
          src={logo}
          alt={`Client ${index + 1}`}
          className="w-50 mx-auto max-h-full"
        />
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
            Our Web Development Services
          </h1>
          <p className="text-xl font-semibold text-[#a6adb9] mx-auto mt-20 mb-20">
            We provide modern, scalable, and high-performance web development
            solutions tailored to your needs.
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
              <img
                className="w-3/4"
                src={image2}
                alt="Create Weekly and Monthly Open To Buy Plans"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl md:text-5xl font-bold text-gray-800">
                Why Choose Manasvi Technology?
              </h1>
              <ul className="mt-7 space-y-2">
                <li className="flex items-start gap-4">
                  <img
                    className="h-6 w-6 mt-1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K"
                    alt="dot"
                  />
                  <p className="text-gray-700">
                    At Manasvi Technology, we combine innovation, expertise, and
                    modern technology to deliver high-quality web solutions. Our
                    team focuses on performance, security, and user experience
                    to create websites that drive business growth.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img
                    className="h-6 w-6 mt-1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K"
                    alt="dot"
                  />
                  <p className="text-gray-700">
                    We prioritize SEO-friendly, mobile-responsive, and scalable
                    web solutions to ensure long-term success. With a commitment
                    to on-time delivery and ongoing support, we help businesses
                    stay ahead in the digital world.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img
                    className="h-6 w-6 mt-1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K"
                    alt="dot"
                  />
                  <p className="text-gray-700">
                    Whether you need a custom website, e-commerce platform, or
                    web application, we provide cost-effective, future-proof
                    solutions tailored to your needs. 🚀
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Our Web Development Process
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img
                    className="h-6 w-6 mt-1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K"
                    alt="dot"
                  />
                  <p className="text-gray-700">
                    At Manasvi Technology, we follow a streamlined process from
                    planning and prototyping to development, testing, and
                    deployment. We ensure your website is fast, secure, and
                    scalable, delivering a seamless user experience. After
                    launch, we provide ongoing support and maintenance to keep
                    your website performing at its best. 🚀
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="w-3/4"
                src={image3}
                alt="Category-Wise Buying Plan"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 flex justify-center">
              <img className="w-3/4" src={image4} alt="AI Forecasts" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Industries We Serve
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img
                    className="h-6 w-6 mt-1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K"
                    alt="dot"
                  />
                  <p className="text-gray-700">
                    At Manasvi Technology, we cater to a wide range of
                    industries, providing custom web solutions tailored to
                    specific business needs. From corporate websites and
                    e-commerce platforms to real estate portals and healthcare
                    systems, we develop high-performance websites that drive
                    engagement and growth.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <img
                    className="h-6 w-6 mt-1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K"
                    alt="dot"
                  />
                  <p className="text-gray-700">
                    Our expertise extends to education, finance, travel, and
                    entertainment, ensuring businesses of all sizes get
                    scalable, secure, and user-friendly digital solutions. No
                    matter your industry, we create websites that enhance brand
                    presence, streamline operations, and boost customer
                    interactions. 🚀
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-20 mt-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Technologies We Use 🚀
              </h1>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-4">
                  <img
                    className="h-6 w-6 mt-1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K"
                    alt="dot"
                  />
                  <p className="text-gray-700">
                    At Manasvi Technology, we utilize the latest technologies to
                    build fast, secure, and scalable web solutions.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  {/* <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" /> */}
                  <p className="text-gray-700">
                    🖥 Frontend: React.js ⚛️ | Vue.js 🔥 | Angular 🅰️ | Next.js
                    🚀 | Tailwind CSS 🎨
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  {/* <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" /> */}
                  <p className="text-gray-700">
                    ⚙️ Backend: Node.js 🟢 | Express.js 🚄 | PHP 🐘 | Python 🐍
                    | Laravel 🎯
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  {/* <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" /> */}
                  <p className="text-gray-700">
                    📊 Databases: MongoDB 🍃 | MySQL 🐬 | PostgreSQL 🏛
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  {/* <img className="h-6 w-6 mt-1" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik05LjM5NiAwSDIuNzc1TDAgOS4wMjNoNC40M0wzLjUyIDE4bDkuNjc3LTEzLjE1aC01LjQxTDkuMzk4IDB6bTEuMDI2IDYuMjQ5LTQuOTkgNi44MDguNTYtNS40MUgxLjg5TDMuOCAxLjRoMy42NmwtMS42MDkgNC44NWg0LjU3eiIgZmlsbD0iIzY2NkFGNiIvPgo8L3N2Zz4K" alt="dot" /> */}
                  <p className="text-gray-700">
                    ☁️ Cloud & Hosting: AWS ☁️ | Firebase 🔥 | DigitalOcean 🌊
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  {/* <img className="h-6 w-6 mt-1" src="" alt="dot" /> */}
                  <p className="text-gray-700">
                    🔒 Security: SSL 🔑 | Firewalls 🔥 | Data Encryption 🛡
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

export default WebServices;
