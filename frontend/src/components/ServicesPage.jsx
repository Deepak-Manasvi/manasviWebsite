
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import Lenis from "lenis";
import { useScroll } from "framer-motion";
import { serviceData } from "../data";
import Cards from "../components/Cards";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:4500/api/services/all");
        // Ensure response data is an array
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setServices([]); // Set to an empty array if data is not an array
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]); // Set to an empty array in case of error
      }
    };

    fetchServices();
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    // <section className="py-12 bg-gray-100">
    //   <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4">
    //     <div className="text-start mb-4 md:w-1/3">
    //       <h2 className="bg-[#BDBDFA] text-black text-lg font-semibold inline-block py-1 px-4 rounded-xl mb-5">
    //         Our Services
    //       </h2>
    //       <h3 className="text-2xl font-bold">
    //         Professional Solutions Tailored to Your Needs
    //       </h3>
    //       <p className="text-gray-600 mt-4">
    //         We offer a comprehensive suite of services designed to help you achieve your financial goals with ease and efficiency. Our team of experts is dedicated to providing personalized solutions that cater to your unique requirements.
    //       </p>
    //       <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
    //         Discover More
    //       </button>
    //     </div>

    //     <div className="relative w-full max-w-5xl md:w-2/3">
    //       <Swiper
    //         modules={[Autoplay, Navigation, Pagination]}
    //         autoplay={{ delay: 3000, disableOnInteraction: false }}
    //         navigation
    //         pagination={{ clickable: true }}
    //         spaceBetween={30}
    //         slidesPerView={1}
    //         disableOnInteraction={true}
    //         breakpoints={{
    //           640: { slidesPerView: 1 },
    //           768: { slidesPerView: 1 },
    //           1024: { slidesPerView: 2 },
    //         }}
    //         className="relative w-full"
    //       >
    //         {Array.isArray(services) && services.map((service, index) => (
    //           <SwiperSlide key={index} className="flex justify-center items-center py-16">
    //             <div className="bg-[#BDBDFA] shadow-md p-4 rounded-lg text-center h-44 w-72 md:h-44 md:w-80 lg:h-44 lg:w-96">
    //               <div className="text-2xl font-bold text-gray-800 mb-1 rounded-full">
    //                 <p className="px-2 bg-white inline-block rounded-full">{service.serialNumber}</p>
    //               </div>
    //               <h4 className="text-xl font-semibold mb-1">{service.serviceName}</h4>
    //               <p className="text-gray-600 tracking-tighter">{service.description}</p>
    //             </div>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //   </div>
    // </section>
    <>
      <div className="mt-10">
        <div className="text-center mx-auto mb-10">
          <p className="text-violet-500 text-center rounded-md mx-auto font-semibold bg-gray-300 w-fit px-1">
            {" "}
            Services
          </p>
          <p className="font-bold text-3xl break-words">
            Explore our advanced features for
            <span className="block">better business success.</span>
          </p>
          <p>
            Unlock growth and success with our advanced features and custom
            solutions.
          </p>
        </div>

        {/* cards  */}
        <div ref={container}>
          {serviceData.map((data, i) => {
            const targetScale = 1 - (serviceData.length - i) * 0.05;

            return (
              <Cards
                key={`p_${i}`}
                i={i}
                {...data}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
