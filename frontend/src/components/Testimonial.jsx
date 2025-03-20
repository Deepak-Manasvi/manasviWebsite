
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/api/reviews/all');
        console.log(response, "testimonial");
        
        // Verify that response data is an array
        if (Array.isArray(response.data)) {
          setTestimonials(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setTestimonials([]); // Set to an empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials([]); // Set to an empty array in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 bg-gray-100">
      <h2 className="text-xl text-center text-gray-500 mb-4">
        {testimonials.length} people have said how good Rareblocks
      </h2>
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Our happy clients say about us
      </h1>
      <div className="relative w-full max-w-5xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 rounded-lg opacity-60"></div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative w-full"
        >
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex justify-center py-10">
                <div className="bg-white h-72 p-6 rounded-lg shadow-md max-w-sm w-full relative z-10">
                  <div className="flex items-center mb-4">
                    <img
                      src={`data:image/jpeg;base64,${testimonial.clientImage}`}
                      alt={testimonial.clientName}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.clientName}</h3>
                      <p className="text-gray-600">{testimonial.companyName}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.message}</p>
                  <p className="text-yellow-500">
                    {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                  </p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center text-gray-700">
              No testimonials available at the moment.
            </div>
          )}
        </Swiper>
      </div>
      <button className="mt-8 px-4 py-2 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 text-black rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
        Check all {testimonials.length} reviews
      </button>
    </div>
  );
};

export default Testimonial;
