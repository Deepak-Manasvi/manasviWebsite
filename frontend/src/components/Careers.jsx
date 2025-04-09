import React, { useState, useEffect } from "react";
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import TeamMember1 from "../assets/image/shailja.png";
import TeamMember2 from "../assets/image/vishal.png";
import TeamMember3 from "../assets/image/shraddha.png";
import TeamMember4 from "../assets/image/anil.jpg";
import TeamMember5 from "../assets/image/shruti.png";
import backgroundImage from "../assets/Images/Footer.jpg";
import axios from "axios";

const CareersComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState();
  const [categories, setCategories] = useState([]);
  const [applyModal, setApplyModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: null,
    resume: null,
  });

  const showAllCategories = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/api/career/showAllCategories`
      );
      setCategories(res.data.categories);
    } catch (error) {
      console.log("Error in fetching categories", error);
    }
  };
  useEffect(() => {
    showAllCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({
        ...prev,
        resume: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/jobs/apply`, formData
      );
    } catch (error) {
      console.log("Error in submiting form", error);
    }
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: null,
      resume: null,
    });
    setApplyModal(false);
  };

  // gallery data
  const galleryImages = [
    { id: 1, src: TeamMember1, alt: "Gallery Image 1" },
    { id: 2, src: TeamMember2, alt: "Gallery Image 2" },
    { id: 3, src: TeamMember3, alt: "Gallery Image 3" },
    { id: 4, src: TeamMember4, alt: "Gallery Image 4" },
    { id: 5, src: TeamMember5, alt: "Gallery Image 5" },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling while lightbox is open
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div
        className="h-[40vh] p-4 flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container  mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold">
            Career
          </h1>
          <nav className="mt-4">
            <a href="/" className="text-white hover:text-gray-200">
              Home
            </a>
            <span className="text-white mx-2">→</span>
            <a
              href="/career"
              className="text-white font-bold underline hover:text-gray-200"
            >
              Career
            </a>
          </nav>
        </div>
      </div>
      {/* Hero Section */}
      <section className=" bg-[#f0f0fe] text-black py-8">
        <div className="mx-auto px-4 mt-0">
          <h3 className="text-gray-400 text-2xl">career </h3>
          <h1 className="font-bold text-4xl">Let’s Grow Together</h1>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Integrity */}
            <div className="flex items-start">
              <div className="mr-6 mt-2">
                <FaUsers className="text-6xl text-indigo-400 " />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Integrity
                </h3>
                <p className="text-gray-700">
                  We appreciate honesty and believe in keeping strong moral
                  principles.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="flex items-start">
              <div className="mr-6 mt-2">
                <FaLightbulb className="text-6xl text-indigo-400 " />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We love working with innovative minds that believe they have
                  the power to design the future.
                </p>
              </div>
            </div>

            {/* Respect & Diversity */}
            <div className="flex items-start">
              <div className="mr-6 mt-2">
                <RiTeamLine className="text-6xl text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Respect & Diversity
                </h3>
                <p className="text-gray-700">
                  We thrive on diverse voices and recognize how everyone's
                  thoughts, feelings, and backgrounds are equally important as
                  our own.
                </p>
              </div>
            </div>

            {/* Healthy Work Relationships */}
            <div className="flex items-start">
              <div className="mr-6 mt-2">
                <FaHandshake className="text-6xl text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Healthy Work Relationships
                </h3>
                <p className="text-gray-700">
                  We ensure a positive work environment and offer
                  family-friendly employment events & initiatives to build
                  stronger employee relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thrive With Us */}
      <section className="py-16 bg-gradient-to-r from-blue-100 via-blue-200 to-purple-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Thrive With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="text-pink-500 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Create Value to Get Value
              </h3>
              <p className="text-gray-600">
                Take ownership and drive your work with passion to create value
                for the organisation and for your own self.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="text-green-500 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Grow Your Career
              </h3>
              <p className="text-gray-600">
                We work in a fast-paced collaborative environment where
                employees have the opportunity to take on more responsibilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="text-orange-500 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Holistic Work Environment
              </h3>
              <p className="text-gray-600">
                We at SupplyMint, care for all our employees equally and ensure
                that our entire team is well supported to work productively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="text-blue-500 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Learning</h3>
              <p className="text-gray-600">
                If there's anything new our employees wish to learn, we're
                always there to help.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
              <div className="flex items-start mb-4">
                <div className="text-yellow-500 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Advancement Opportunities
              </h3>
              <p className="text-gray-600">
                We encourage internal advancement for all employees when work is
                diligent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*gallery */}
      <section className="py-16 lg:bg-gray-50 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="bg-white shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <div className="w-70 h-80 flex items-center justify-center bg-gray-50">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox/Popup */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-70 flex items-center justify-center">
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white z-10 p-2"
                onClick={closeLightbox}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Current image */}
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="max-h-[80vh] max-w-full object-contain"
              />

              {/* Navigation arrows */}
              {currentImageIndex > 0 && (
                <button
                  className="absolute left-4 p-2 bg-black bg-opacity-50 text-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              <button
                className="absolute right-4 p-2 bg-black bg-opacity-50 text-white rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Current Openings */}
      <section className="py-12 bg-[#dedffc]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Current Openings
          </h1>

          {/* Category tabs */}
          <div className="flex justify-start mb-12">
            <div className="flex mx-auto mt-8 gap-x-8 rounded-sm overflow-hidden">
              {categories.map((category, i) => (
                <button
                  key={i}
                  className={`px-8 py-3 cursor-pointer font-medium gap-2 border border-solid-black  hover:bg-gray-200 ${
                    activeTab === category.categoryName
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setActiveTab(category.categoryName)}
                >
                  {category.categoryName}
                </button>
              ))}
            </div>
          </div>

          {activeTab && (
            <div>
              {categories
                .filter((category) => category.categoryName === activeTab) // Filter the selected category
                .map((category) => (
                  <div
                    key={category.categoryName}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
                  >
                    {category.careers.map((job) => (
                      <div
                        key={job.id}
                        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
                      >
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {job.title}
                          </h3>
                          <p className="text-gray-600 mb-1">{job.location}</p>
                          <p className="text-gray-600 mb-4">{job.experience}</p>
                          <div className="bg-gray-200 inline-block px-3 py-1 rounded-full text-sm text-gray-700 mb-6">
                            {job.openings} OPENINGS
                          </div>
                          <button
                            onClick={() => setApplyModal(true)}
                            className="w-full py-2 cursor-pointer border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-100 transition-colors"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
      {applyModal && (
        <div className="fixed  inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white  p-6 border rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4">Application Form</h3>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-2 mb-4 border rounded"
          />
           <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience in yrs(0,1...)"
            className="w-full p-2 mb-4 border rounded"
          />

            <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full p-2 cursor-pointer mb-4 border rounded"
            required
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setApplyModal(false)}
              className="px-4 py-2 cursor-pointer bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
};

export default CareersComponent;
