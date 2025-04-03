import React, { useEffect, useState } from "react";
import axios from "axios";
import Admin from "./Admin";
import dayjs from "dayjs";

const ContactUsData = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/contacts/all");
      const sortedContacts = (response.data || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setContacts(sortedContacts);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const isToday = (date) => dayjs(date).isSame(dayjs(), "day");

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      await axios.delete(`http://localhost:4500/api/contacts/delete/${deleteId}`);
      setContacts(contacts.filter(contact => contact._id !== deleteId));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <Admin>
      <div className="flex flex-col items-center justify-center text-black p-4 w-full">
        <h1 className="text-xl mt-4 mb-5 text-center font-extrabold text-black bg-white px-12 py-2 rounded-xl shadow-lg">
          Contact Us Data
        </h1>

        <div className="overflow-x-auto w-full max-w-6xl">
          {loading ? (
            <p className="text-center text-lg font-semibold">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Phone</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Message</th>
                  <th className="border px-4 py-2">Address</th>
                  <th className="border px-4 py-2">Created At</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length > 0 ? (
                  contacts.map((contact) => (
                    <tr
                      key={contact._id}
                      className={`border text-center ${
                        isToday(contact.createdAt) ? "bg-yellow-200" : ""
                      }`}
                    >
                      <td className="border px-4 py-2">{contact.name}</td>
                      <td className="border px-4 py-2">{contact.phoneNumber}</td>
                      <td className="border px-4 py-2">{contact.email}</td>
                      <td className="border px-4 py-2">{contact.message}</td>
                      <td className="border px-4 py-2">{contact.address || "N/A"}</td>
                      <td className="border px-4 py-2">
                        {dayjs(contact.createdAt).format("DD-MM-YYYY HH:mm")}
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => handleDeleteClick(contact._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No contacts found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-black">Are you sure?</h2>
<p className="mt-2 text-black">Do you really want to delete this contact?</p>

            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Admin>
  );
};

export default ContactUsData;
