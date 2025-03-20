import React, { useEffect, useState } from 'react'
import axios from 'axios'
import backgroundImage from '../assets/Images/Footer.jpg';

export function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews/all')
        console.log(response.data, "testimonial")
        
        // Verify that response data is an array
        if (Array.isArray(response.data)) {
          setReviews(response.data)
        } else {
          console.error('Response data is not an array')
        }
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="mx-auto bg-[#020617] h-auto py-6 pt-20">
      {/* <div className="h-[40vh] flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-bold">Customer Reviews</h1>
          <nav className="mt-2">
            <a href="/" className="text-white">Home</a>
            <span className="text-white mx-2">→</span>
            <a href="/services/digital" className="text-white font-bold underline">Digital Marketing</a>
          </nav>
        </div>
      </div> */}
      <h1 className="text-[50px] font-extrabold mb-4 text-center text-sky-500">Customer Reviews</h1>
      <div className="relative">
        <div className="border-l-4 border-blue-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <ul className="list-none m-0 p-0">
          {reviews.map((review, index) => (
            <li
              key={review.id}
              className={`mb-8 relative lg:w-1/2 md:w-3/4 sm:w-full ${index % 2 === 0 ? 'lg:ml-20 lg:mr-auto md:ml-10 md:mr-auto sm:ml-4 sm:mr-auto' : 'lg:mr-20 lg:ml-auto md:mr-10 md:ml-auto sm:mr-4 sm:ml-auto'}`}
            >
              <div className={`flex items-center mb-1 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                {review.clientImage && (
                  <img
                    src={`data:image/jpeg;base64,${review.clientImage}`}
                    alt={review.clientName}
                    className={`w-16 h-16 rounded-full border-4 border-blue-500 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}
                  />
                )}
                <h2 className="text-2xl font-semibold text-blue-500">{review.clientName}</h2>
                <span className="ml-4 text-gray-500 text-sm">{review.date}</span>
              </div>
              <div className={`bg-gray-900 text-white p-4 rounded-lg shadow ${index % 2 === 0 ? 'ml-20' : 'mr-20'}`}>
                <h3 className="text-xl font-semibold">{review.companyName}</h3>
                <p className="mt-2">{review.message.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}</p>
                <div className="mt-2">
                  <span className="text-yellow-500">{`${review.rating} Stars`}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Reviews
