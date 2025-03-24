import React,{useEffect} from "react";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

const ContactR = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/contacts/create",
        formData
      );
      setSuccess("Message sent successfully");
      setError("");
      console.log(response.data);
      setFormData({
        name: "",
        address: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send message");
      setSuccess("");
    }
  };

  return (
    <div className="bg-gray-200 py-6">
      <div className="font-[sans-serif] max-w-6xl mx-auto relative rounded-lg py-6">
        <div className="grid lg:grid-cols-3 items-center">
          <div className="grid sm:grid-cols-2 gap-4 p-4 z-20 relative lg:left-16 max-lg:px-4">
            <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <SlLocationPin className="w-7 text-3xl fill-blue-600" />
              <h4 className="text-gray-800 text-base font-bold mt-4">
                Visit office
              </h4>

              <Link to="/map">Bhopal</Link>
              <Link to="/indoremap">Indore</Link>
              {/* <p className="text-sm text-gray-600 mt-2">Prabhat Bhopal</p> */}
            </div>
            <Link
              to="tel:8319955741"
              className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
            >
              <LuPhoneCall className="w-7 text-3xl" />
              <h4 className="text-gray-800 text-base font-bold mt-4">
                Call us
              </h4>
              <Link to="tel:8319955741" className="text-sm text-gray-600 mt-2">
                8319955741
              </Link>
            </Link>
            <Link
              to="https://wa.me/8319955741"
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
            >
              <IoChatboxEllipsesOutline className="w-7 text-3xl fill-blue-600" />
              <h4 className="text-gray-800 text-base font-bold mt-4">
                Chat to us
              </h4>
              {/* <p className="text-sm text-gray-600 mt-2">huaaaaaaa.com</p> */}
            </Link>
            <div className="grid grid-cols-2  items-center justify-center rounded-lg  h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <Link
                to="https://www.instagram.com/manasvi.technologies/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex items-center justify-center"
              >
                <IoLogoInstagram className="w-10 h-10 text-black  hover:text-gray-600 transform transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link
                to="https://www.facebook.com/people/Manasvi-Technologies-OPC-Pvt-Ltd/61555158365754/"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex items-center justify-center"
              >
                <IoLogoFacebook className="w-10 h-10 text-black  hover:text-gray-600  transform transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link
                to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHAAqowuN-m9AAAAZDAuUoY5uxO81U7SEwFB42PI9wsJ2PJ_yCmar--HYuTGEQnqKueTr__SIp9r42Rur5oDJjqQY4QKWA981SoUAaS5jYta0xWrl2F2EU8duJ07NHIV8zFT5A=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmanasvi-technologies-7aa426262%2F"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex items-center justify-center"
              >
                <IoLogoLinkedin className="w-10 h-10 text-black  hover:text-gray-600  transform transition-transform duration-300 hover:scale-110" />
              </Link>
              <Link
                to="https://x.com/i/flow/login?redirect_after_login=%2Fmanasvitech01"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex items-center justify-center"
              >
                <IoLogoTwitter className="w-10 h-10 text-black  hover:text-gray-600  transform transition-transform duration-300 hover:scale-110" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#091E55] rounded-lg sm:p-10 p-4 max-lg:-order-1 max-lg:mb-8">
            <h2 className="text-3xl text-white text-center font-bold mb-6">
              Contact us
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="max-w-md mx-auto space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone No."
                  className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="6"
                  className="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className=" w-full relative text-white bg-[#05102C] hover:bg-white hover:text-black font-semibold rounded-lg text-sm px-6 py-3 !mt-6"
                >
                  <BsFillSendFill
                    className="mr-2 inline"
                    fill="currentColors"
                  />
                  Send Message
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
                {success && <p className="text-green-500 mt-4">{success}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactR;
