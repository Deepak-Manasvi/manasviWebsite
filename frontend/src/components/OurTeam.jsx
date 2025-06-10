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
import TeamMember5 from "../assets/image/Shruti.png";

// const experts = [
//   { name: "Natalie Carter", role: "Developer", image: TeamMember1 },
//   { name: "Vishal Yadav", role: "MERN Developer", image: TeamMember2 },
//   { name: "Shailja Tomer", role: "Developer", image: TeamMember1 },
//   { name: "Anil Patidar", role: "Python Developer", image: TeamMember4 },
//   { name: "Shruti Kamboj", role: "MERN Developer", image: TeamMember5 },
//   { name: "Shraddha Palotra", role: "MERN Developer", image: TeamMember3 },
// ];

const OurTeam = () => {
  const [teams, setTeams] = useState([]);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/contacts/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setTimeout(() => {
        setIsModalOpen(true); // Show modal on success
      }, 500);
      if (response.ok) {
        setFormData({ name: "", address: "", phoneNumber: "", email: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/team/all`);
        console.log(response.data)
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
          <a href="tel:8319955741">
            <button className="px-6 py-3 flex items-center gap-2 bg-gray-200 rounded-full text-black text-sm md:text-base shadow-md hover:bg-gray-300 transition">
              <Phone className="w-5 h-5" /> Book a Call
            </button>
          </a>
          <a
            href="https://wa.me/918319955741?text=Hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 flex items-center gap-2 bg-indigo-600 text-white rounded-full text-sm md:text-base shadow-md hover:bg-indigo-700 transition">
              Book a Demo
            </button>
          </a>

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
            {teams.map((expert, index) => (
              <SwiperSlide key={index} className="group">
                <div className="relative w-48 h-60 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                  <img
                    src={`data:image/png;base64,${expert.image}`}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {expert.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{expert.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-white py-8 px-4 mt-8 rounded-lg shadow-lg">
  {/* Contact Form */}
  <div className="bg-gray-100 shadow-md rounded-lg p-4 w-full md:w-2/3">
    <h2 className="text-lg font-semibold mb-3 text-center">Contact Sales</h2>
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        value={formData.name}
        className="w-full px-3 py-1.5 border rounded-md text-sm"
      />
      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
        value={formData.address}
        className="w-full px-3 py-1.5 border rounded-md text-sm"
      />
      {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}

      {/* Email & Phone in one row */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          className="w-full px-3 py-1.5 border rounded-md text-sm"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phoneNumber}
          className="w-full px-3 py-1.5 border rounded-md text-sm"
        />
      </div>
      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}

      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        value={formData.message}
        className="w-full px-3 py-1.5 border rounded-md text-sm h-14 resize-none"
      ></textarea>
      {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

      <button type="submit" className="w-full bg-indigo-600 text-white py-1.5 rounded-md text-sm hover:bg-indigo-700 transition">
        Send
      </button>
    </form>
  </div>
  {isModalOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold">Success!</h2>
            <p className="text-gray-600 mt-2">
              Your request has been submitted. Our sales team will reach out soon.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

  {/* Contact Info Section (Centered) */}
  <div className="w-full md:w-1/3 flex flex-col items-center space-y-3 text-center">
    <div>
      <h3 className="text-base font-semibold">Chat with Sales</h3>
      <p className="text-gray-600 text-xs">Speak to our friendly team.</p>
      <a href="mailto:manasharptech@gmail.com" className="text-indigo-600 font-medium text-sm">
      manasharptech@gmail.com
      </a>
    </div>
    <div>
      <h3 className="text-base font-semibold">Live Chat</h3>
      <p className="text-gray-600 text-xs">24/7 instant support available.</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default OurTeam;
