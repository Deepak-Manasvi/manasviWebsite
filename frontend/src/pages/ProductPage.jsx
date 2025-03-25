import React, { useState ,useEffect} from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import ProjectCards from "./ProjectCards";

const ProductPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);

  return (
    <div className="min-h-screen bg-cover bg-center">
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold">
            Our Products
          </h1>
          <nav className="mt-4">
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a
              href="/products"
              className="text-white font-bold underline hover:text-gray-200"
            >
              Products
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Explore Our Products</h2>
            <h3 className="text-2xl font-bold mb-2">
              Empowering your business with cutting-edge solutions.
            </h3>
            <p className="text-gray-700 mb-4">
              Discover our range of innovative products designed to elevate your
              business operations. From scalable web applications to robust
              software solutions, each product is crafted to enhance your
              digital presence and streamline your workflow.
            </p>
            <div
              className={` transition-all duration-700 overflow-hidden ${
                showMore ? "h-aoto" : "h-0"
              }`}
            >
              <p className="text-gray-700 mb-4">
                Our products cater to diverse business needs, providing
                comprehensive solutions for web development, software
                integration, social media optimization, advertising strategies,
                and search engine optimization. Whether you're aiming to expand
                your market reach or improve internal efficiencies, our tailored
                solutions are designed to achieve your goals effectively.
              </p>
            </div>
            <button
              onClick={toggleShowMore}
              className="bg-[#3c4785] text-white py-2 px-4 rounded-full mt-4"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Illustration of product features"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <ProjectCards />
    </div>
  );
};

export default ProductPage;
