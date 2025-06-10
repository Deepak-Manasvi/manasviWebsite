import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/Images/manasvilogo.png';
import backgroundImage from "../../assets/Images/Footer.jpg";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaShieldAlt } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (!showOtpField) {
        // Step 1: Send OTP to Email
        const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/admins/sendOTP`, { email });
        if (response.data.success) {
          setShowOtpField(true);
          setSuccess("OTP sent to your email");
          setError("");
        } else {
          setError("Failed to send OTP");
          setSuccess("");
        }
      } else {
        // Step 2: Verify OTP and Register
        const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/admins/register`, { name, email, password, otp });
        if (response.data.success) {
          setSuccess("Signup successful! Redirecting to login...");
          setError("");
          setTimeout(() => navigate('/login'), 2000);
        } else {
          setError("Invalid OTP or Registration Failed");
          setSuccess("");
        }
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Signup failed');
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 mt-10" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <img src={logo} alt="Manasvi Tech Logo" className="w-40 sm:w-48" />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 flex items-center mt-3 sm:mt-5">Join Us 🚀</h2>
        <p className="text-gray-500 text-xs sm:text-sm">Create an account to get started!</p>

        <form onSubmit={handleSignup} className="space-y-3 sm:space-y-4">
          {!showOtpField && (
            <>
              <label className="text-gray-500 text-xs sm:text-sm mb-2 block">Full Name</label>
              <div className="relative border rounded-lg flex items-center px-3 py-2 focus-within:ring-2 ring-indigo-400">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  className="w-full outline-none text-gray-700 text-sm"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <label className="text-gray-500 text-xs sm:text-sm mb-2 block">Email</label>
              <div className="relative border rounded-lg flex items-center px-3 py-2 focus-within:ring-2 ring-indigo-400">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  className="w-full outline-none text-gray-700 text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </>
          )}

          {showOtpField ? (
            <>
              <label className="text-gray-500 text-xs sm:text-sm mb-2 block">OTP</label>
              <div className="relative border rounded-lg flex items-center px-3 py-2 focus-within:ring-2 ring-indigo-400">
                <input
                  type="text"
                  className="w-full outline-none text-gray-700 text-sm"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <label className="text-gray-500 text-xs sm:text-sm mb-2 block">Password</label>
              <div className="relative border rounded-lg flex items-center px-3 py-2 focus-within:ring-2 ring-indigo-400">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none text-gray-700 text-sm"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 ml-2">
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
            disabled={!(email && (showOtpField ? otp : password))}
          >
            {showOtpField ? "Verify OTP & Signup" : "Send OTP"}
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

        <div className="border-t border-gray-300 pt-4 sm:pt-5 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-blue-600">
            <FaShieldAlt size={18} />
            <p className="text-xs sm:text-sm font-light">We ensure the privacy of your data at all times.</p>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">&copy; Mansharp Technology 2025 | All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
