import React, { useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

const CreatePortfolio = () => {
  const [portfolio, setPortfolio] = useState({ title: '', category: '', company: '', image: null });
  const [submittedPortfolio, setSubmittedPortfolio] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPortfolio({ ...portfolio, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', portfolio.title);
    formData.append('category', portfolio.category);
    formData.append('company', portfolio.company);
    formData.append('image', portfolio.image);

    // Debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/portfolio/create`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setSubmittedPortfolio(response.data.portfolio);
      setPortfolio({ title: '', category: '', company: '', image: null });
      document.getElementById('imageInput').value = ''; // Reset file input
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to create portfolio item');
      console.error('Error creating portfolio:', error);
    }
  };

  return (
    <Admin>
      <div className="container mx-auto p-4 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg">
          <h1 className="text-xl mt-4 mb-5 text-center font-extrabold text-black bg-white px-12 py-2 border rounded-xl shadow-lg">
            Create Portfolio Item
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={portfolio.title}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter portfolio title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={portfolio.category}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter category"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={portfolio.company}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter company name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 w-full hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>

        {error && <div className="mt-4 p-2 bg-red-100 text-red-600 rounded-lg">{error}</div>}

        {submittedPortfolio && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{submittedPortfolio.title}</h2>
            <p className="mb-2">Category: {submittedPortfolio.category}</p>
            <p className="mb-2">Company: {submittedPortfolio.company}</p>
            {submittedPortfolio.image && (
              <img
                src={submittedPortfolio.image} 
                alt={submittedPortfolio.title}
                className="max-w-xs h-auto rounded"
              />
            )}
          </div>
        )}
      </div>
    </Admin>
  );
};

export default CreatePortfolio;
