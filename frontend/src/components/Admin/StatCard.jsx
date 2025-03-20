// src/components/StatCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, icon, percentage, increase }) => {
  return (
    <Link to={`/admin/${title}`} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <div>
        <div className="text-gray-600">{title}</div>
        <div className="text-3xl font-bold text-black">{value}</div>
      </div>
      <div className="text-4xl text-gray-400">{icon}</div>
    </Link>
  );
};

export default StatCard;
