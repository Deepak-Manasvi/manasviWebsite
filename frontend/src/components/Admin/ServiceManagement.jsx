import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin from './Admin';
import { Link } from 'react-router-dom';

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ serviceName: '', description: '', serialNumber: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/services/all');
      console.log(response,"servicemanagerment")
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`/api/services/update/${editId}`, form);
      } else {
        await axios.post('/api/services/create', form);
      }
      setForm({ serviceName: '', description: '', serialNumber: '' });
      setEditId(null);
      fetchServices();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (service) => {
    setForm({ serviceName: service.serviceName, description: service.description, serialNumber: service.serialNumber });
    setEditId(service._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/services/delete/${id}`);
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <Admin>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Service Management</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="serviceName"
            value={form.serviceName}
            onChange={handleInputChange}
            placeholder="Service Name"
            className="p-2 border rounded text-black"
            required
          />
          <input
            type="text"
            name="serialNumber"
            value={form.serialNumber}
            onChange={handleInputChange}
            placeholder="Serial Number"
            className="p-2 border rounded text-black"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="p-2 border rounded text-black"
            required
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          {editId ? 'Update Service' : 'Create Service'}
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service._id} className="p-4 border rounded shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{service.serviceName}</h2>
            <p className="text-sm text-gray-600">Serial Number: {service.serialNumber}</p>
            <p className="text-gray-700">{service.description}</p>
            <div className="mt-4 flex space-x-2">
              <button onClick={() => handleEdit(service)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">
                Edit
              </button>
              <button onClick={() => handleDelete(service._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Admin>  
  );
};

export default ServiceManagement;
