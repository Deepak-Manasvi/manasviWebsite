import React, { useEffect, useState } from "react";
import axios from "axios";
import Admin from "./Admin";

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("/api/contacts/all");
      console.log(response, "/api/contacts/all");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const newContact = { name, address, phoneNumber, email, message };

      const dt = await axios.post("/api/contacts/create", newContact);

      fetchContacts();
      clearForm();
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedContact = { name, address, phoneNumber, email, message };

      await axios.put(
        `/api/contacts/update/${selectedContact._id}`,
        updatedContact
      );

      fetchContacts();
      clearForm();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const handleDelete = async (contactId) => {
    try {
      await axios.delete(`/api/contacts/delete/${contactId}`);
      fetchContacts();
      clearForm();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const clearForm = () => {
    setName("");
    setAddress("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
    setSelectedContact(null);
  };

  const selectContact = (contact) => {
    setSelectedContact(contact);
    setName(contact.name);
    setAddress(contact.address);
    setPhoneNumber(contact.phoneNumber);
    setEmail(contact.email);
    setMessage(contact.message);
  };

  return (
    <Admin>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Management</h1>

        {/* Form for creating new contact */}
        <form 
          onSubmit={selectedContact ? handleUpdate : handleCreate}
          className="max-w-lg mx-auto mb-8 bg-white rounded-lg shadow-md p-8 text-black"
        >
          <h2 className="text-2xl font-bold mb-4">
            {selectedContact ? "Update Contact" : "Create New Contact"}
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
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
            <label
              htmlFor="address"
              className="block text-lg font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <input
              type="text"
              id="message"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-700"
          >
            {selectedContact ? "Update Contact" : "Create Contact"}
          </button>
          {selectedContact && (
            <button
              onClick={() => {
                clearForm();
                setSelectedContact(null);
              }}
              className="mt-4 w-full py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
          )}
        </form>

        {/* Display all contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h2 className="text-xl text-black capitalize font-bold mb-2">{contact.name}</h2>
              <p className="text-gray-700">{contact.address}</p>
              <p className="text-gray-700">{contact.phoneNumber}</p>
              <p className="text-gray-700">{contact.email}</p>
              <p className="text-gray-700">{contact.message}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => selectContact(contact)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
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

export default ContactManagement;
