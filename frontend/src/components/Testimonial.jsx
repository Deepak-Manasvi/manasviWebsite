
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  // const [loading, setLoading] = useState(true);

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

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:4500/api/reviews/all');
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          console.error('Response data is not an array');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
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
      {/* <div className="relative w-full max-w-5xl">
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
      </div> */}
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {review.clientImage && (
                <img
                  src={`data:image/jpeg;base64,${review.clientImage}`}
                  alt={review.clientName}
                  className="w-20 h-20 rounded-full border-4 border-blue-500 mx-auto mb-6"
                />
              )}

              <p className="text-gray-700 text-lg italic text-center mb-6">
                "{review.message}"
              </p>

              <div className="text-center">
                <p className="text-gray-800 font-semibold text-xl">{review.clientName}</p>
                <p className="text-gray-600 text-sm mt-1">{review.companyName}</p>
                <div className="flex justify-center mt-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.445a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.445a1 1 0 00-1.176 0l-3.366 2.445c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.41 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Read Case Study →
              </button>
            </div>
          ))}
        </div>
      <button className="mt-8 px-4 py-2 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 text-black rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
        Check all {testimonials.length} reviews
      </button>
    </div>
  );
};

export default Testimonial;
