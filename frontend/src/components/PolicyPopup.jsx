import React from "react";

const PolicyPopup = ({ title, content, onClose }) => {
    console.log(title)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg max-w-md relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-black">{title}</h2>

        <div className="text-gray-700 text-sm max-h-96 overflow-auto">
          {content}
        </div>
      </div>
    </div>
  );
};

export default PolicyPopup;
