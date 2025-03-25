import React from "react";
import Blog1 from "../assets/image/ProductTwo.jpeg";

const TiffinManagementBlog = () => {
  return (
    <div className="max-w-3xl mx-auto my-10">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={Blog1}
          alt="Tiffin Management System"
          className="w-full rounded-lg shadow-md"
        />
        <div className="absolute top-2 right-2 bg-green-400 text-white px-4 py-2 rounded-full text-sm flex items-center">
          15
        </div>
      </div>
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mt-4">
        How a Tiffin Management System Transforms Meal Delivery Services
      </h2>
      {/* Meta Info */}
      <div className="text-center text-gray-600 mt-2">
        <span>27/12/2023</span> • <span>15 Min read</span>
      </div>
      {/* Blog Content */}
      <p className="text-gray-800 mt-4 text-start">
        A Tiffin Management System is a revolutionary solution for meal service
        providers, ensuring seamless order management, delivery tracking, and
        customer satisfaction. With rising demand for home-cooked meals and
        office lunches, a structured system helps optimize meal distribution,
        reduce food wastage, and improve service efficiency.
      </p>
      {/* Subheading */}
      <h3 className="text-xl font-semibold mt-6 text-start">
        Efficient Meal Ordering and Customization
      </h3>
      <p className="text-gray-800 mt-2 text-start">
        Customers can easily browse meal options, customize their dietary
        preferences, and place orders through an intuitive interface. Whether
        it's vegetarian, gluten-free, or high-protein meals, the system ensures
        customers receive what they need without confusion.
      </p>
      {/* Subheading */}
      <h3 className="text-xl font-semibold mt-6 text-start">
        Automated Scheduling and Delivery Optimization
      </h3>
      <p className="text-gray-800 mt-2 text-start">
        The system automates meal scheduling, ensuring timely deliveries. It
        optimizes routes for delivery personnel, reducing delays and fuel
        costs. Customers receive real-time tracking updates, enhancing
        transparency and reliability.
      </p>
      {/* Subheading */}
      <h3 className="text-xl font-semibold mt-6 text-start">
        Inventory and Waste Management
      </h3>
      <p className="text-gray-800 mt-2 text-start">
        By tracking ingredient usage and order patterns, the system minimizes
        food wastage. It alerts suppliers when inventory is low, ensuring fresh
        ingredients are always in stock without over-purchasing.
      </p>
      {/* Subheading */}
      <h3 className="text-xl font-semibold mt-6 text-start">
        Customer Engagement and Feedback
      </h3>
      <p className="text-gray-800 mt-2 text-start">
        Customers can rate meals, provide feedback, and suggest improvements.
        This data helps service providers refine their menus and enhance
        customer satisfaction.
      </p>
      {/* Subheading */}
      <h3 className="text-xl font-semibold mt-6 text-start">
        Conclusion: The Future of Meal Management
      </h3>
      <p className="text-gray-800 mt-2 text-start">
        A Tiffin Management System is a game-changer in the food service
        industry. It enhances efficiency, improves customer experience, and
        ensures a seamless workflow from meal preparation to delivery. With the
        right system in place, tiffin service providers can scale their
        operations and meet growing demand effortlessly.
      </p>
    </div>
  );
};

export default TiffinManagementBlog;
