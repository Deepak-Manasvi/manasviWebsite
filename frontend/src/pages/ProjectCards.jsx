import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects/all");
        setProjects(response.data);
        console.log(response,"projectCards");
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      className="bg-gray-100 py-12"
      style={{
        backgroundImage: "url('/path/to/your/background/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 px-4 py-2 bg-[#3c4785] text-white rounded-md">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col sm:flex-row"
            >
              <div
                className="flex-none w-full sm:w-1/3 h-48 sm:h-auto"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                  <p className="text-gray-700 text-base">{project.description}</p>
                </div>
                <div className="mt-4 flex space-x-2">
                {
                    project.link ? (
                      <Link to={project.link} target="_blank" rel="noopener noreferrer" className="badge badge-outline">Demo</Link>
                    )
                      : (
                        <Link to={''} className="badge badge-outline">Soon</Link>
                      )
                  }
                  {/* <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
                    Details
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
