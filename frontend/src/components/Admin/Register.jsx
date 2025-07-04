import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/Images/manasvilogo.png';
import Mansharp_Technologies_Logo_Blue from "../../assets/Mansharp_Technologies_Logo_Blue.png";

import backgroundImage from "../../assets/Images/Footer.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    password: '',
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
      const response = await axios.post('/api/admins/register', formData);
      setSuccess(response.data.message);
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-center mb-6">
          <img src={Mansharp_Technologies_Logo_Blue} alt="Register" className="rounded-lg" style={{ width: '300px', height: '60px' }} />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input className="p-2 border rounded-md" name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input className="p-2 border rounded" name="mobileNumber" type="number" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required maxLength={10} minLength={10} />
            <input className="p-2 border rounded" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input className="p-2 border rounded" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>
          <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600" type="submit">
            Register
          </button>
        </form>
        {error && <div className="mt-4 text-center text-red-500">{error}</div>}
        {success && <div className="mt-4 text-center text-green-500">{success}</div>}
        <div className="mt-4 text-center">
          <span className="text-sm">Already have an account?</span>
          <a href="/login" className="text-blue-500"> Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
