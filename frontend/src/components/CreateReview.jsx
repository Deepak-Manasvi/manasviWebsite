import React, { useState } from "react";
import axios from "axios";
import Admin from "./Admin/Admin";

const CreateReview = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    clientName: "",
    clientImage: null,
    message: "",
    companyName: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "clientImage") {
      setFormData({
        ...formData,
        clientImage: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("clientName", formData.clientName);
    data.append("clientImage", formData.clientImage);
    data.append("message", formData.message);
    data.append("companyName", formData.companyName);
    data.append("rating", formData.rating);

    try {
      const response = await axios.post("/api/reviews/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setReviews([...reviews, response.data]);
      setFormData({
        clientName: "",
        clientImage: null,
        message: "",
        companyName: "",
        rating: "",
      });
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  return (
    <Admin>
      <div className="flex flex-col items-center justify-center  ">
        <form
          onSubmit={handleSubmit}
          className=" w-full max-w-2xl bg-white py-4 px-6 rounded-lg shadow-md"
        >
          <h1 className="text-2xl mb-6 mt-6 font-extrabold text-black text-center px-3 py-2 border rounded-xl shadow-lg">
            Create Review
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold">
              Client Name
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold">
              Client Image
            </label>
            <input
              type="file"
              name="clientImage"
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Add Review
          </button>
        </form>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={review.clientImage || "https://via.placeholder.com/150"}
                alt={review.clientName}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{review.clientName}</h3>
              <p className="text-gray-600">{review.companyName}</p>
              <p className="text-gray-700 mb-4">{review.message}</p>
              <p className="text-yellow-500">Rating: {review.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </Admin>
  );
};

export default CreateReview;
