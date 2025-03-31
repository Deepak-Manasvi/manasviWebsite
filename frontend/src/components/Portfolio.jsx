import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../assets/Images/Footer.jpg";
const baseAddress = import.meta.env.VITE_APP_BASE_URL;


export default function Portfolio() {
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPortfolios = async () => {
      try {
        const response = await axios.get(`${baseAddress}/api/portfolio/all`);
        
        if (Array.isArray(response.data)) {
          setPortfolios(response.data);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setError("Failed to load portfolio.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <div>
      {/* Header */}
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold">Portfolio</h1>
          <nav className="mt-4">
            <a href="/" className="text-white hover:text-gray-200">Home</a>
            <span className="text-white mx-2">→</span>
            <a href="/portfolio" className="text-white font-bold underline hover:text-gray-200">Portfolio</a>
          </nav>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="text-center py-12 px-4">
        <p className="text-gray-500 max-w-xxl font-md mx-auto">
          A portfolio is a collection of creative works showcasing skills, projects, and achievements.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4">
        {loading ? (
          <p className="text-center text-gray-600">Loading portfolios...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((portfolio) => (
              <div
                key={portfolio._id}
                className="group perspective"
                onClick={() => navigate(`/portfolio/${portfolio._id}`)}
              >
                <div className="relative w-full h-80 transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden">
                    <img
                      src={portfolio.image}
                      alt={portfolio.name}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>

                  {/* Back Side (Flip Effect) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white rounded-lg rotate-y-180 backface-hidden group-hover:rotate-y-0">
                    <p className="text-sm">View Project</p>
                  </div>
                </div>

                {/* Text Below Image */}
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold text-black">{portfolio.name}</h3>
                  <p className="text-sm text-gray-600">{portfolio.company} — {portfolio.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
  
