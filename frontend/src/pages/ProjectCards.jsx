import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/api/projects/all"
        );
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 py-12">{error}</div>;
  }

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 px-4 py-2 bg-[#3c4785] text-white rounded-md">
           Our Products 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div
                className="h-56 w-full rounded-t-xl bg-cover bg-center"
                style={{
                  backgroundImage: project.image
                    ? `url(data:image/jpeg;base64,${project.image})`
                    : "url(/placeholder-image.png)",
                }}
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  {project.link ? (
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#3c4785] text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Demo
                    </Link>
                  ) : (
                    <span className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No projects available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectCards;