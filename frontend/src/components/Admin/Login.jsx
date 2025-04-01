import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/Images/manasvilogo.png';
import backgroundImage from "../../assets/Images/Footer.jpg";
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaShieldAlt } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState("password"); // Default login method is password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(""); // Store OTP for email OTP login
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false); // Flag to show OTP input field
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Function to handle form submission for both password and OTP login methods
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let payload;

      // Login with password method
      if (loginMethod === "password") {
        payload = { email, password };

        const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/admins/login`, payload);
        console.log("Login Response:", response);
        setSuccess('Login successful');
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

      } 
      
      // If user chooses OTP method, send OTP
      else if (loginMethod === "emailOtp") {
        // First send OTP to the email
        const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/admins/sendOTP`, { email });

        console.log(response.data.success)
        if (response.data.success) {
          setShowOtpField(true); // Show OTP input field
          setSuccess('OTP sent to your email');
          setLoginMethod("verifyOtp")
          setError('');
        } else {
          setError('Failed to send OTP');
          setSuccess('');
        }
      } 
      
      // If OTP is already sent and user submits the OTP, verify OTP
      else if (loginMethod === "verifyOtp" && otp) {
        const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/admins/verifyOTP`, { email, otp });

        if (response.data.success) {
          setSuccess('OTP verified successfully');
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
        } else {
          setError('Invalid OTP');
          setSuccess('');
        }
      }

    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6">

        <div>
          <div className="flex justify-center">
            <img src={logo} alt="Mansavi Tech Logo" className="w-40 sm:w-48" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 flex items-center mt-3 sm:mt-5 gap-">
            Welcome Back👋
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">Sign in to your account to be with us again!</p>

          <h3 className="text-gray-700 text-sm sm:text-base mt-3 sm:mt-5">Login With</h3>

          <div className="grid grid-cols-2 gap-2 mb-3 sm:mb-5">
            <button
              className={`px-2 py-1 sm:px-3 sm:py-1.5 ml-10 border text-xs sm:text-sm border-indigo-600 rounded-lg
      ${loginMethod === "password" ? "text-indigo-600" : "text-gray-700"}`}
              onClick={() => setLoginMethod("password")}
            >
              Password
            </button>
            <button
              className={`px-2 py-1 sm:px-3 sm:py-1.5 border mr-10 text-xs sm:text-sm border-indigo-600 rounded-lg
      ${loginMethod === "emailOtp" ? "text-indigo-600" : "text-gray-700"}`}
              onClick={() => setLoginMethod("emailOtp")}
            >
              Email OTP
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {loginMethod === "password" ? (
              <>
                <label className="text-gray-500 text-xs sm:text-sm mb-2 block">Username</label>
                <div className="relative border rounded-lg flex items-center px-3 py-2 focus-within:ring-2 ring-indigo-400">
                  <FaUser className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    className="w-full outline-none text-gray-700 text-sm"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <label className="text-gray-500 text-xs sm:text-sm mb-2 block">Password</label>
                <div className="relative border rounded-lg flex items-center px-3 py-2 focus-within:ring-2 ring-indigo-400">
                  <FaLock className="text-gray-500 mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full outline-none text-gray-700 text-sm"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 ml-2">
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
              </>
            ) : (
              <>
                <label className="text-gray-500 text-xs sm:text-sm">Email</label>
                <div className="relative border rounded-lg flex items-center px-3 py-2 focus-within:ring-2 ring-indigo-400">
                  <input
                    type="email"
                    className="w-full outline-none text-gray-700 text-sm"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {showOtpField && (
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
                )}
              </>
            )}

            <div className="text-right">
              <a href="/forget-password" className="text-gray-500 text-xs sm:text-sm">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className={`w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition
              ${((loginMethod === "password" && email && password) || (loginMethod === "emailOtp" && email) || (loginMethod === "verifyOtp" && otp))
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-blue-300 cursor-not-allowed"}`}
              disabled={!((loginMethod === "password" && email && password) || (loginMethod === "emailOtp" && email) || (loginMethod === "verifyOtp" && otp))}
            >
              {loginMethod === "emailOtp" ? "Send OTP" : loginMethod === "verifyOtp" ? "Verify OTP & Login" : "Log In"}
            </button>
          </form>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

          <div className="border-t border-gray-300 pt-4 sm:pt-5 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 text-blue-600">
              <FaShieldAlt size={18} />
              <p className="text-xs sm:text-sm font-light">We ensure the privacy of your data at all times.</p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">&copy; Mansavi Technology 2025 | All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
