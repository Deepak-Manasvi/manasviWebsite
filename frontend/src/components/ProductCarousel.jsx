/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from "react-router-dom";
import Blog1 from "../assets/image/productTwo.jpeg";
import Blog2 from "../assets/image/productOne.jpeg";
import Blog3 from "../assets/image/productThree.jpeg";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/projects/all');
        console.log(response.data, "productcarausal");

        // Check if response data is an array before setting state
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setProducts([]); // Set to an empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Set to an empty array in case of error
      }
    };

    fetchProducts();
  }, []);

  const navigate = useNavigate();

  const resources = [
    {
      id: 1,
      image: Blog1,
      title: "Tiffin Management System",
      category: "Food & Service",
      content: "Discover how a Tiffin Management System streamlines meal planning and delivery.",
      route: "/tiffin-management",
    },
    {
      id: 2,
      image: Blog2,
      title: "Inventory Management System",
      category: "Business & Logistics",
      content: "Understand how an Inventory Management System helps optimize stock levels and reduce losses.",
      route: "/inventory-management",
    },
    {
      id: 3,
      image: Blog3,
      title: "E-Commerce Website",
      category: "Online Business",
      content: "Learn how an E-Commerce website enhances digital sales and customer engagement.",
      route: "/ecommerce-website",
    },
  ];  

  return (
    <div className="container mx-auto md:py-24 lg:py-12 text-center min-h-screen">
      <h2 className="text-center text-2xl font-bold bg-white text-black inline-block rounded-full px-8 py-2 mb-6 border border-gray-300 hover:bg-[#a7a7eb]">
        Our Featured Products
      </h2>
      <h1 className='text-4xl -tracking-normal capitalize font-bold text-black md:mb-12'>
        Let me know <span className="text-[#9595f1]">if you need</span> <br /> any other modifications!
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-6xl font-bold text-center mb-6">
          Our Latest Resources
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="relative group cursor-pointer p-4"
              onClick={() => navigate(resource.route)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
                      Read More
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  {/* <div className="flex justify-between text-md text-gray-600 mt-2">
                    <p>Blog</p>
                    <p>21/03/2025</p>
                  </div> */}

                  <h3 className="text-lg font-semibold text-gray-800 mt-2 text-start p-5">
                    {resource.title}
                  </h3>
                  <span className="bg-pink-100 text-gray-800 text-sm px-3 py-1 rounded-full mt-3 inline-block text-satrt">
                    {resource.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
