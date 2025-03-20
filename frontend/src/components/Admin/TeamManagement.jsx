import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin from './Admin';

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get('/api/team/all');
      console.log(response,"team managerment ")
      setTeamMembers(response.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('designation', designation);
      if (image) {
        formData.append('image', image);
      }

      await axios.put(`/api/team/update/${selectedTeamMember._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      fetchTeamMembers();
      setSelectedTeamMember(null);
    } catch (error) {
      console.error('Error updating team member:', error);
    }
  };

  const handleDelete = async (teamMemberId) => {
    try {
      await axios.delete(`/api/team/delete/${teamMemberId}`);
      fetchTeamMembers();
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  const selectTeamMember = (teamMember) => {
    setSelectedTeamMember(teamMember);
    setName(teamMember.name);
    setDesignation(teamMember.designation);
  };

  return (
    <Admin>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Team Management</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {teamMembers.map((teamMember) => (
          <div key={teamMember._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={`data:image/jpeg;base64,${teamMember.image}`}
              alt={teamMember.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{teamMember.name}</h2>
            <p className="text-gray-700">{teamMember.designation}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => selectTeamMember(teamMember)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(teamMember._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTeamMember && (
        <form onSubmit={handleUpdate} className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Update Team Member</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="designation" className="block text-lg font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-lg font-medium text-gray-700">
              Change Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/jpeg,image/png"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
    </Admin>
  );
};

export default TeamManagement;
