import React from 'react';
import Marquee from 'react-fast-marquee';

const technologyLogos = [
  {
    src: "https://www.ginfosoft.com/assets/img/technology/psdd.png",
    alt: "PSDD"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/nodejs.png",
    alt: "Node.js"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/elemetor.png",
    alt: "Elementor"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/html5.png",
    alt: "HTML5"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/js.png",
    alt: "JavaScript"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/wordpres1s.png",
    alt: "WordPress"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/ci.png",
    alt: "CodeIgniter"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/laravel.png",
    alt: "Laravel"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/androids.png",
    alt: "Android"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/firebase.png",
    alt: "Firebase"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/flutter.png",
    alt: "Flutter"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/iphone.png",
    alt: "iPhone"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/mongodb.png",
    alt: "MongoDB"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/windows.png",
    alt: "Windows"
  },
  {
    src: "https://www.ginfosoft.com/assets/img/technology/mysql.png",
    alt: "MySQL"
  },
  // Add more images here if needed
];

const MarqueeSection = () => {
  return (
    <section className="sec-pad-10 bg-gradient-to-r from-[#f8d6f3] via-[#210136]  to-[#632cf8]">
      <div>
        <div className="row align-items-center">
          <div className="w-full">
            <Marquee gradient={false} speed={60}>
              {technologyLogos.map((logo, index) => (
                <div key={index} className="p-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-18 mx-4 bg-[#06054b] p-4 rounded-full"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;

