import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/Images/manasvilogo.png';
import backgroundImage from "../../assets/Images/Footer.jpg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await axios.post('/api/admins/login', formData);
      setSuccess('Login successful');
      console.log(response.data);

      const { token, role } = response.data;

      if (token) {
        localStorage.setItem('role', role);
        localStorage.setItem('token', token);
      }

      if (role && role === 'admin') {
        navigate('/admin/welcome');
      } else {
        navigate('/');
      }

      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Login" className="rounded-lg" style={{ width: '300px', height: '60px' }} />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input className="p-2 border rounded" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input className="p-2 border rounded" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
            Login
          </button>
        </form>
        {error && <div className="mt-4 text-center text-red-500">{error}</div>}
        {success && <div className="mt-4 text-center text-green-500">{success}</div>}
        <div className="mt-4 text-center">
        </div>
        
      </div>
    </div>
  );
};

export default Login;
