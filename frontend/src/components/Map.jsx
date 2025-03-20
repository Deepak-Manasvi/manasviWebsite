import React from "react";
import backgroundImage from "../assets/Images/Footer.jpg";

function Map() {
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.9234990718237!2d77.42806977400909!3d23.260137007423562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6977a8c0eaf1%3A0x9474730f15fd13ee!2sManasvi%20Technologies%20(OPC)%20Private%20Limited%20-%20Mobile%20Application%20%7C%20Website%20%2F%20Software%20Development%20Company%20in%20Bhopal!5e1!3m2!1sen!2sin!4v1721214124167!5m2!1sen!2sin"
          width="900"
          height="450"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
