// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import axios from 'axios';

// const Testimonial = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get('/api/reviews/all');
//         console.log(response, "testimonial");

//         // Verify that response data is an array
//         if (Array.isArray(response.data)) {
//           setTestimonials(response.data);
//         } else {
//           console.error("Expected an array but received:", response.data);
//           setTestimonials([]); // Set to an empty array if data is not an array
//         }
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//         setTestimonials([]); // Set to an empty array in case of error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('http://localhost:4500/api/reviews/all');
//         if (Array.isArray(response.data)) {
//           setReviews(response.data);
//         } else {
//           console.error('Response data is not an array');
//         }
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   if (loading) {
//     return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 bg-gray-100">
//       <h2 className="text-xl text-center text-gray-500 mb-4">
//         {testimonials.length} people have said how good Rareblocks
//       </h2>
//       <h1 className="text-4xl font-extrabold text-center mb-8">
//         Our happy clients say about us
//       </h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {reviews.map((review, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
//           >
//             {review.clientImage && (
//               <img
//                 src={`data:image/jpeg;base64,${review.clientImage}`}
//                 alt={review.clientName}
//                 className="w-20 h-20 rounded-full border-4 border-blue-500 mx-auto mb-6"
//               />
//             )}

//             <p className="text-gray-700 text-lg italic text-center mb-6">
//               "{review.message}"
//             </p>

//             <div className="text-center">
//               <p className="text-gray-800 font-semibold text-xl">{review.clientName}</p>
//               <p className="text-gray-600 text-sm mt-1">{review.companyName}</p>
//               <div className="flex justify-center mt-3">
//                 {[...Array(review.rating)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-yellow-400 fill-current"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.445a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.445a1 1 0 00-1.176 0l-3.366 2.445c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.41 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>

//             <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
//               Read Case Study →
//             </button>
//           </div>
//         ))}
//       </div>
//       <button className="mt-8 px-4 py-2 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 text-black rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
//         Check all {testimonials.length} reviews
//       </button>
//     </div>
//   );
// };

// export default Testimonial;




// {/* <div className="relative w-full max-w-5xl">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 rounded-lg opacity-60"></div>
//         <Swiper
//           modules={[Autoplay, Navigation, Pagination]}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="relative w-full"
//         >
//           {Array.isArray(testimonials) && testimonials.length > 0 ? (
//             testimonials.map((testimonial, index) => (
//               <SwiperSlide key={index} className="flex justify-center py-10">
//                 <div className="bg-white h-72 p-6 rounded-lg shadow-md max-w-sm w-full relative z-10">
//                   <div className="flex items-center mb-4">
//                     <img
//                       src={`data:image/jpeg;base64,${testimonial.clientImage}`}
//                       alt={testimonial.clientName}
//                       className="w-12 h-12 rounded-full mr-4"
//                     />
//                     <div>
//                       <h3 className="text-lg font-bold">{testimonial.clientName}</h3>
//                       <p className="text-gray-600">{testimonial.companyName}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 mb-4">{testimonial.message}</p>
//                   <p className="text-yellow-500">
//                     {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))
//           ) : (
//             <div className="text-center text-gray-700">
//               No testimonials available at the moment.
//             </div>
//           )}
//         </Swiper>
//       </div> */}


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
      name: "SHEFALI ALVARES",
      designation: "Professional Singer",
      image: varshaImage,
      text: "Learning music with Qadir sir has been nothing short of a transformative experience. His unique teaching methods made even the most complex musical concepts easy to grasp. From classical ragas to modern melodies, every lesson is a beautiful blend of tradition and innovation. Qadir sir encourages every student to explore their own musical journey while ensuring a solid foundation. His dedication and endless patience make learning from him a joyful experience. I feel fortunate to call him my teacher.",
    },
    {
      id: 2,
      name: "RAHUL SHARMA",
      designation: "Music Composer",
      image: rahulImage,
      text: "UGMK has been instrumental in my musical growth. The personalized attention and structured curriculum helped me progress rapidly from a beginner to performing on stage. The academy nurtures not just technical skills but also instills a deep appreciation for music across genres. I'm grateful for the supportive community and expert guidance.",
    },
    {
      id: 3,
      name: "PRIYA DESAI",
      designation: "Student's Parent",
      image: mahiImage,
      text: "As a parent, I've seen remarkable growth in my child's confidence since joining UGMK. Beyond just learning an instrument, the holistic approach to music education has improved my child's concentration, discipline, and creative expression. The faculty creates a nurturing environment where students are encouraged to experiment and grow at their own pace.",
    },
    {
      id: 4,
      name: "ARJUN MEHTA",
      designation: "Performing Artist",
      image: kamalImage,
      text: "After trying several music schools, UGMK stands out for its emphasis on both theory and practical application. The masterclasses with industry professionals provide invaluable insights into the music industry. The academy's approach of blending traditional foundations with contemporary techniques has given me versatility as a musician.",
    },
    {
      id: 5,
      name: "SOUMYA PATEL",
      designation: "Online Student",
      image: soumyaImage,
      text: "The online classes at UGMK during the pandemic were seamless and engaging. Despite the distance, the instructors maintained the quality of education and personal connection. The academy's adaptability and commitment to student progress is commendable. I've achieved milestones I never thought possible in such a short time.",
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