import React, { useState, useEffect } from "react";
import varshaImage from "../assets/Images/varsha.jpg";
import rahulImage from "../assets/Images/rahul.jpg";
import mahiImage from "../assets/Images/mahi.jpg";
import soumyaImage from "../assets/Images/soumya.jpg";
import kamalImage from "../assets/Images/kamal.jpg";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample testimonial data with designations and individual images
  const testimonials = [
    {
      id: 1,
      name: "Monu Electronics",
      designation: "Electronics Retailer",
      image: varshaImage,
      text: "Partnering with this company has significantly boosted our online sales. Their e-commerce solutions provided seamless inventory management and a user-friendly interface, making our business operations smoother than ever.",
    },
    {
      id: 2,
      name: "Bellissimo Interior Zone",
      designation: "Interior Designer",
      image: rahulImage,
      text: "Their digital marketing services have given our business a new edge. From social media campaigns to SEO optimization, we’ve seen a remarkable increase in client inquiries and engagement.",
    },
    {
      id: 3,
      name: "Ro Water Purifier",
      designation: "Water Purification Expert",
      image: mahiImage,
      text: "The web development team built an outstanding e-commerce platform for us, enabling easy online sales and customer support. Their commitment to quality and service has been exceptional.",
    },
    {
      id: 4,
      name: "Shivansh Associate",
      designation: "Real Estate Consultant",
      image: kamalImage,
      text: "The CRM solutions provided by this company have streamlined our lead management and improved client communication. Their expertise in automation has truly enhanced our efficiency.",
    },
    {
      id: 5,
      name: "Dr. Smile Tooth Care",
      designation: "Dental Clinic",
      image: soumyaImage,
      text: "Their website and appointment booking system have greatly improved our patient experience. The seamless integration of technology into our practice has made scheduling and patient management effortless.",
    },
    {
      id: 6,
      name: "Aaradhya Homeopathy",
      designation: "Homeopathic Practitioner",
      image: soumyaImage,
      text: "With their digital marketing and website optimization, we've seen a significant increase in patient inquiries and online consultations. Their team truly understands the needs of healthcare professionals.",
    },
  ];  

  // Auto-rotate functionality with increased speed
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Reduced from 7000ms to 5000ms for faster rotation

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to get the center testimonial and rearrange the array
  const getCircularArray = () => {
    const result = [];
    const length = testimonials.length;

    // Calculate positions so that activeIndex is in the center
    for (let i = 0; i < length; i++) {
      // Calculate position in the original array
      const position =
        (activeIndex - Math.floor(length / 2) + i + length) % length;
      result.push(testimonials[position]);
    }

    return result;
  };

  const circularTestimonials = getCircularArray();
  const centerIndex = Math.floor(testimonials.length / 2);

  // Function to calculate the size for each image based on distance from center
  const getImageSize = (index) => {
    const distanceFromCenter = Math.abs(index - centerIndex);

    // Size classes based on distance from center
    if (distanceFromCenter === 0) {
      return "w-32 h-32 sm:w-28 sm:h-28 md:w-32 md:h-32"; // Center (largest)
    } else if (distanceFromCenter === 1) {
      return "w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24"; // Adjacent to center
    } else if (distanceFromCenter === 2) {
      return "w-16 h-16 sm:w-16 sm:h-16 md:w-18 md:h-18"; // Further out
    } else {
      return "w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14"; // Outermost
    }
  };

  // Function to calculate opacity based on distance from center
  const getOpacity = (index) => {
    const distanceFromCenter = Math.abs(index - centerIndex);
    return 1 - distanceFromCenter * 0.2; // 1, 0.8, 0.6, 0.4, 0.2
  };

  return (
    <div className="bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Testimonials Header */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-serif mb-6 sm:mb-8 md:mb-12">
           Ours Happy Clients
        </h2>

        {/* Main Testimonial with Quote Marks */}
        <div className="relative mb-10 sm:mb-12 md:mb-16 px-2 sm:px-6 md:px-10">
          {/* Left Quote Mark */}
          <div className="absolute left-0 top-0 text-[#7f22fe] text-5xl sm:text-6xl md:text-8xl font-serif -mt-4 md:-mt-6">
            &#8220;
          </div>

          {/* Testimonial Text */}
          <div className="text-center text-gray-800 text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-16 min-h-40">
            {testimonials[activeIndex].text}
          </div>

          {/* Right Quote Mark */}
          <div className="absolute right-0 bottom-0 text-[#7f22fe] text-5xl sm:text-6xl md:text-8xl font-serif -mb-8 sm:-mb-12 md:-mb-16">
            &#8221;
          </div>
        </div>

        {/* Profile Images Carousel with Smooth Transition */}
        <div className="flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8 md:mb-10">
          {circularTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`
                rounded-full cursor-pointer 
                transition-all duration-500 ease-in-out
                ${getImageSize(index)}
                hover:scale-110
              `}
              style={{
                opacity: getOpacity(index),
                transform: `translateY(${
                  index === centerIndex ? "-10px" : "0px"
                })`,
                zIndex: testimonials.length - Math.abs(index - centerIndex),
              }}
              onClick={() =>
                setActiveIndex(
                  testimonials.findIndex((t) => t.id === testimonial.id)
                )
              }
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Name and Designation of Current Testimonial */}
        <div className="text-center transition-all duration-500">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide">
            {testimonials[activeIndex].name}
          </h3>
          <p className="text-sm sm:text-base mt-1 italic">
            {testimonials[activeIndex].designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;