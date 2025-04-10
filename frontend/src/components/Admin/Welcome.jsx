// src/components/Welcome.js
import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import StatCard from "./StatCard";
import axios from "axios";
import { FaUsers, FaTools, FaStar, FaProjectDiagram } from "react-icons/fa";

const Welcome = () => {
  const [data, setData] = useState({
    clients: { value: 0, details: [] },
    services: { value: 0, details: [] },
    reviews: { value: 0, details: [] },
    projects: { value: 0, details: [] },
    resumes: { value: 0, details: [] },
  });

  console.log("clients", data.clients.details);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamResponse = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/team/all`
        );
        // console.log("Team:", teamResponse.data);

        const servicesResponse = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/services/all`
        );
        // console.log("Services:", servicesResponse.data);

        const reviewsResponse = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/reviews/all`
        );
        // console.log("Reviews:", reviewsResponse.data);

        const projectsResponse = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/projects/all`
        );
        // console.log("Projects:", projectsResponse.data);

        const resumeResponse = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/api/jobs/applications`
        );
        // console.log("Resumes:", resumeResponse.data);

        setData({
          clients: {
            value: teamResponse.data.teamMember.length,
            details: teamResponse.data.teamMember,
          },
          services: {
            value: servicesResponse.data.length,
            details: servicesResponse.data,
          },
          reviews: {
            value: reviewsResponse.data.length,
            details: reviewsResponse.data,
          },
          projects: {
            value: projectsResponse.data.length,
            details: projectsResponse.data,
          },
          resumes: {
            value: resumeResponse.data.length,
            details: resumeResponse.data,
          },
        });
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Admin>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
        <StatCard
          title="ManageTeam"
          value={data.clients.value}
          icon={<FaUsers />}
        />
        <StatCard
          title="Services"
          value={data.services.value}
          icon={<FaTools />}
        />
        <StatCard
          title="ManageReviews"
          value={data.reviews.value}
          icon={<FaStar />}
        />
        <StatCard
          title="ManageProducts"
          value={data.projects.value}
          icon={<FaProjectDiagram />}
        />
        <StatCard title="Resumes" value={data.resumes.value} />
      </div>

      <div className="mt-10  md:ml-16   container text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="max-h-[30vh] overflow-y-auto rounded-md   bg-[#fff]">
            <h2 className="text-xl font-bold  text-black shadow-lg p-4 text-center">
              Service Details
            </h2>
            <table className="min-w-full bg-white mt-4">
              <thead>
                <tr>
                  <th className="px-6 py-2 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                    Service Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.services.details.map((service) => (
                  <tr
                    key={service._id}
                    className="group relative hover:bg-[#1F003A] hover:text-white transition duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray-300">
                      {service.serviceName}
                    </td>
                    <td className="absolute left-0 right-0 bottom-0 bg-[#1F003A] text-white hidden group-hover:block p-2 transition duration-300">
                      <p>{service.description}</p>
                      <p>
                        Created At:{" "}
                        {new Date(service.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-h-[30vh] overflow-y-auto bg-[#fff] rounded-md">
            <h2 className="text-xl font-bold  text-black shadow-lg p-4 text-center">
              Review Details
            </h2>

            <table className="min-w-full bg-white  mt-4">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                    Text
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.reviews.details.map((review) => (
                  <tr
                    key={review._id}
                    className="group relative hover:bg-[#1F003A] hover:text-white transition duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray-300">
                      {review.companyName}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      {review.message}
                    </td>
                    <td className="absolute left-0 right-0 bottom-0 bg-[#1F003A] text-white hidden group-hover:block p-2 transition duration-300">
                      <p>Reviewer Name: {review.companyName}</p>
                      <p>Ratings: {review.rating}</p>
                      <p>
                        Created At:{" "}
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-h-[30vh] overflow-y-auto bg-[#fff] rounded-md">
            <h2 className="text-xl font-bold mb-4 shadow-lg text-black p-4  text-center">
              Product Details
            </h2>
            <table className="min-w-full bg-white mt-2">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                    Product Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.projects.details.map((project) => (
                  <tr
                    key={project._id}
                    className="group relative hover:bg-[#1F003A] hover:text-white transition duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray-300">
                      {project.name}
                    </td>
                    <td className="absolute left-0 right-0 bottom-0 bg-[#1F003A] text-white hidden group-hover:block p-2 transition duration-300">
                      <p>{project.description}</p>
                      <p>
                        Created At:{" "}
                        {new Date(project.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-h-[30vh] overflow-y-auto bg-[#fff] rounded-md">
            <h2 className="text-xl font-bold mb-4 shadow-lg text-black p-4  text-center">
              Team Details
            </h2>
            <table className="min-w-full bg-white mt-2">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.clients &&
                  data.clients.details.map((client) => (
                    <tr
                      key={client._id}
                      className="group relative hover:bg-[#1F003A] hover:text-white transition duration-300"
                    >
                      <td className="px-6 py-4 border-b border-gray-300">
                        {client.name}
                      </td>
                      <td className="absolute left-0 right-0 bottom-0 bg-[#1F003A] text-white hidden group-hover:block p-2 transition duration-300">
                        <p>Role: {client.designation}</p>
                        <p>
                          Created At:{" "}
                          {new Date(client.createdAt).toLocaleDateString()}
                        </p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="max-h-[30vh] overflow-y-auto bg-[#fff] rounded-md">
            <h2 className="text-xl font-bold mb-4 shadow-lg text-black p-4  text-center">
              Resume Details
            </h2>
            <table className="min-w-full bg-white mt-2">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                    Candidate Name
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.resumes.details.map((resume) => (
                  <tr
                    key={resume._id}
                    className="group relative hover:bg-[#1F003A] hover:text-white transition duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray-300">
                      {resume.name}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      <p>{resume.email}</p>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      <p>{resume.phone}</p>
                    </td>
                    <td className="absolute left-0 right-0 bottom-0 bg-[#1F003A] text-white hidden group-hover:block p-2 transition duration-300">
                      <a
                        href={`${import.meta.env.VITE_APP_BASE_URL}/${
                          resume.resume
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline"
                      >
                        View Resume
                      </a>
                      <p>
                        Created At:{" "}
                        {new Date(resume.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default Welcome;
