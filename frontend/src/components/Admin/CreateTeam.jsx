import React, { useState } from 'react';
import axios from 'axios';
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';

const CreateTeam = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('designation', formData.designation);
    data.append('image', formData.image);

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/team/create`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setTeams([...teams, response.data]);
      if (response.data) {
        navigate('/admin/ManageTeam');
      }
      setFormData({
        name: '',
        designation: '',
        image: null
      });
    } catch (error) {
      console.error('Error creating team member:', error);
    }
  };

  return (
    <Admin>
    <div className="flex flex-col items-center justify-center text-black  p-4">
      
      <form onSubmit={handleSubmit} className="mt-8 w-full  max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl mt-4 mb-5 text-center font-extrabold text-black bg-white px-12 py-2  rounded-xl shadow-lg">
        Create Team
      </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
          Add Team Member
        </button>
      </form>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={team.image || 'https://via.placeholder.com/150'}
              alt={team.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">{team.name}</h3>
            <p className="text-gray-600">{team.designation}</p>
          </div>
        ))}
      </div>
    </div>
    </Admin>
  );
};

export default CreateTeam;
