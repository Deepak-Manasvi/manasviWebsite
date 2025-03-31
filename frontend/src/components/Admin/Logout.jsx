// src/components/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (!token) {
    navigate('/login');
    return null;
  }

  useEffect(() => {
    // Call the logout API
    const logout = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/admins/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        // Clear local storage or any other user data
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        // Redirect to the login page or home page
        navigate('/login');
      } catch (error) {
        console.error('Error logging out:', error);
        // Handle error (optional)
      }
    };

    logout();
  }, [navigate, token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold">Logging out...</h1>
    </div>
  );
};

export default Logout;
