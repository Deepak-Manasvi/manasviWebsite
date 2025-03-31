import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [clientName, setClientName] = useState('');
  const [message, setMessage] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [rating, setRating] = useState('');
  const [clientImage, setClientImage] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/reviews/all`);
      setReviews(response.data);
      console.log(response, "reviewmanagemrnt");
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('clientName', clientName);
      formData.append('message', message);
      formData.append('companyName', companyName);
      formData.append('rating', rating);
      if (clientImage) {
        formData.append('clientImage', clientImage);
      }

      await axios.put(`${import.meta.env.VITE_APP_BASE_URL}/api/reviews/update/${selectedReview._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      fetchReviews();
      setSelectedReview(null);
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/api/reviews/delete/${reviewId}`);
      fetchReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const selectReview = (review) => {
    setSelectedReview(review);
    setClientName(review.clientName);
    setMessage(review.message);
    setCompanyName(review.companyName);
    setRating(review.rating);
  };

  return (
    <Admin>
      <div className="container mx-auto text-black">
        <h1 className="text-3xl font-bold mb-8">Review Management</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {reviews.map((review) => (
            <div key={review._id} className="bg-white shadow-md rounded-lg p-4">
              {review.clientImage && (
                <img
                  src={`data:image/jpeg;base64,${review.clientImage}`}
                  alt={review.clientName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-bold mb-2">{review.clientName}</h2>
              <p className="text-gray-700">{review.message}</p>
              <p className="text-gray-700">{review.companyName}</p>
              <p className="text-gray-700">Rating: {review.rating}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => selectReview(review)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedReview && (
          <form onSubmit={handleUpdate} className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Update Review</h2>
            <div className="mb-4">
              <label htmlFor="clientName" className="block text-lg font-medium text-gray-700">
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-lg font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-lg font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="clientImage" className="block text-lg font-medium text-gray-700">
                Client Image
              </label>
              <input
                type="file"
                id="clientImage"
                className="mt-1 block w-full text-gray-700"
                onChange={(e) => setClientImage(e.target.files[0])}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </Admin>
  );
};

export default ReviewManagement;
