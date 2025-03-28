/* eslint-disable no-unused-vars */

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        <div ref={container} className="" >
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
