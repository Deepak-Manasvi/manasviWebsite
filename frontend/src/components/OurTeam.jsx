/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import backgroundImage from "../assets/Images/Footer.jpg";
import { Phone } from "lucide-react";

import TeamMember1 from "../assets/image/shailja.png";
import TeamMember2 from "../assets/image/vishal.png";
import TeamMember3 from "../assets/image/shraddha.png";
import TeamMember4 from "../assets/image/anil.jpg";
import TeamMember5 from "../assets/image/shruti.png";


const experts = [
  { name: "Natalie Carter", role: "Developer", image: TeamMember1 },
  { name: "Vishal Yadav", role: "MERN Developer", image: TeamMember2 },
  { name: "Shailja Tomer", role: "Developer", image: TeamMember1 },
  { name: "Anil Patidar", role: "Python Developer", image: TeamMember4 },
  { name: "Shruti Kamboj", role: "MERN Developer", image: TeamMember5 },
  { name: "Shraddha Palotra", role: "MERN Developer", image: TeamMember3 },
];

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("/api/team/all");
        if (Array.isArray(response.data)) {
          setTeams(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setTeams([]);
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
        setTeams([]);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg py-16 px-6 text-center mt-20 mb-20">
        {/* Header Section */}
        <h1 className="text-indigo-600 text-sm font-semibold uppercase">
          Contact Us
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Our Team of Experts Are Here to Help
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Get support 24/7 from our award-winning network of growth experts.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 flex items-center gap-2 bg-gray-200 rounded-full text-black text-sm md:text-base shadow-md hover:bg-gray-300 transition">
            <Phone className="w-5 h-5" /> Book a Call
          </button>
          <button className="px-6 py-3 flex items-center gap-2 bg-indigo-600 text-white rounded-full text-sm md:text-base shadow-md hover:bg-indigo-700 transition">
            Book a Demo
          </button>
        </div>

        {/* Swiper Slider for Team Cards */}
        <div className="mt-10 w-full max-w-screen-lg mx-auto">
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            modules={[Autoplay]}
            className="w-full"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 30 },
              768: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
          >
            {experts.map((expert, index) => (
              <SwiperSlide key={index} className="group">
                <div className="relative w-48 h-60 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {expert.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{expert.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 bg-white py-10 px-6 mt-12 rounded-lg shadow-lg">
          {/* Contact Form */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 md:p-8 w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">Contact Our Sales Team</h2>
            <form className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border rounded-lg outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border rounded-lg outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2 border rounded-lg outline-none"
              />
              <div className="flex">
                <select className="px-4 py-2 border rounded-l-lg bg-gray-100">
                  <option>AU</option>
                  <option>US</option>
                  <option>IN</option>
                </select>
                <input
                  type="tel"
                  placeholder="+61 400 000 000"
                  className="w-full px-4 py-2 border rounded-r-lg outline-none"
                />
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Chat to Sales</h3>
              <p className="text-gray-600 text-sm">Speak to our friendly team.</p>
              <a href="mailto:sales@untitledui.com" className="text-indigo-600 font-medium">
                sales@untitledui.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email Support</h3>
              <p className="text-gray-600 text-sm">Get back within 24 hours.</p>
              <a href="mailto:support@untitledui.com" className="text-indigo-600 font-medium">
                support@untitledui.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Live Chat</h3>
              <p className="text-gray-600 text-sm">24/7 instant support available.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
