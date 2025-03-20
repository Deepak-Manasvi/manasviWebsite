import React, { useState } from 'react';
import axios from 'axios';
import Contactimg from "../assets/Images/contact.png";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contacts/create', formData);
      setSuccess('Message sent successfully');
      setError('');
      // Handle success (e.g., clear form, show a success message)
      console.log(response.data);
      setFormData({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send message');
      setSuccess('');
    }
  };

  return (
    <div className="relative py-10">
      {/* Background Image Overlay */}
      <img src={Contactimg} alt="Background" className="absolute mt-[40px] inset-0 w-[480px] h-[600] object-cover" />
      
      {/* Contact Form Container */}
      <div className="relative flex items-center justify-center">
        <div className="bg-black p-8 rounded-tl-[80px] shadow-lg w-full max-w-3xl  md:ml-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form className="space-y-4 rounded-xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                name="name"
                className="border border-gray-300 p-2 rounded w-full" 
                value={formData.name} 
                onChange={handleChange}
                required 
              />
              <input 
                type="text" 
                placeholder="Address" 
                name="address"
                className="border border-gray-300 p-2 rounded w-full" 
                value={formData.address} 
                onChange={handleChange}
                required 
              />
              <input 
                type="text" 
                placeholder="Phone Number" 
                name="phoneNumber"
                className="border border-gray-300 p-2 rounded w-full" 
                value={formData.phoneNumber} 
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                placeholder="Email" 
                name="email"
                className="border border-gray-300 p-2 rounded w-full" 
                value={formData.email} 
                onChange={handleChange}
                required 
              />
            </div>
            <textarea 
              placeholder="Message" 
              name="message"
              className="border border-gray-300 p-2 rounded w-full h-32"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="flex items-center text-white">
              <input type="checkbox" className="mr-2" required />
              <span>
                By sending this form I confirm that I have read and accept the 
                <a href="#" className="text-blue-500"> Privacy Policy</a>
              </span>
            </div>
            <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded mt-4 hover:bg-purple-600">
              Submit
            </button>
          </form>
          {error && <div className="mt-4 text-center text-red-500">{error}</div>}
          {success && <div className="mt-4 text-center text-green-500">{success}</div>}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
