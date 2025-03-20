import React from "react";
import backgroundImage from "../assets/Images/Footer.jpg";

function Indoremap() {
  return (
    <div className="mt-0  min-h-screen">
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold">
            Visit Us
          </h1>
          <nav className="mt-4">
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a
              href="/map"
              className="text-white font-bold underline hover:text-gray-200"
            >
              Map
            </a>
          </nav>
        </div>
      </div>
      <div className="flex  justify-center p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.440921476888!2d75.89051558079174!3d22.749012573299563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd55eb6e3771%3A0xb5031466b9416817!2sShagun%20Arcade%2C%20Plot%20No-8%2C%20near%20Vijay%20Nagar%2C%20Near%20Apna%20Sweets%2C%20Vijay%20Nagar%20Circle%2C%20Scheme%20No.54%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1721302987392!5m2!1sen!2sin"
          width="800"
          height="600"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Indoremap;
