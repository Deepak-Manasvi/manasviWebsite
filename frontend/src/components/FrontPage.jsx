import React from "react";

//  import bgvideo from "../assets/Services.mp4";
import bgVideoMansharp from "../assets/Mansharp_Technologies_video.mp4";

const FrontPage = () => {
  return (
    <div className="relative h-[30vh] md:min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          zIndex: -1,
        }}
      >
        <source src={bgVideoMansharp} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="bg-gradient-to-r from-[#070006] via-[#210136]  to-[#140149]">
        {/* <Header/> */}
        {/* <img src={mlogo} alt="Mansharp Technologies Logo" className="w-40 md:w-60" /> */}
        {/* <h1 className="text-center mt-4 md:text-5xl">Welcome to Mansharp Technologies</h1> */}
      </div>
    </div>
  );
};

export default FrontPage;
