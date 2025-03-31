import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/reviews/all`);
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
    return (
      <div className="flex justify-center items-center h-32 text-lg font-semibold text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-gray-600 text-lg font-medium uppercase tracking-widest mt-5">
          Testimonials
        </h3>
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
          What Our Clients Say...
        </h2>

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
      </div>
    </div>
  );
}

export default Reviews;