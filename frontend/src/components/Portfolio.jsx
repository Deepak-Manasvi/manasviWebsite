import React from 'react'
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import backgroundImage from '../assets/Images/Footer.jpg';

export default function Portfolio() {
    const navigate = useNavigate();

    const projects = [
        { id: 1, title: "Brand design & identity for Sezane", category: "Branding", company: "Sezane", image: image1 },
        { id: 2, title: "Logo design & branding for Lacausa co", category: "Branding", company: "Lacausa co", image: image2 },
        { id: 3, title: "Sofa furniture design for Burrow", category: "Industrial", company: "Burrow", image: image3 },
        { id: 4, title: "Fyrn local showroom interior design & decoration", category: "Industrial", company: "Fryn", image: image4 },
        { id: 5, title: "Website design for finance startup", category: "UX/UI", company: "App X", image: image5 },
        { id: 6, title: "Brand refresh for Technology app", category: "UX/UI", company: "Technology", image: image6 },
    ];
    return (
        <div>
            <div
                className="h-[40vh] p-4 flex justify-center items-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl text-white font-extrabold">
                        Portfolio
                    </h1>
                    <nav className="mt-4">
                        <a href="/" className="text-white hover:text-gray-200">
                            Home
                        </a>
                        <span className="text-white mx-2">→</span>
                        <a
                            href="/portfolio"
                            className="text-white font-bold underline hover:text-gray-200"
                        >
                            Portfolio
                        </a>
                    </nav>
                </div>
            </div>
            {/* Portfolio Section */}
            <section className="text-center py-12 px-4 mt-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">Portfolio</h2>
                <p className="text-gray-500 max-w-xxl font-md mx-auto mt-4">
                    A portfolio's meaning can be defined as a collection of financial
                    assets and investment tools that are held by an individual, a
                    financial institution or an investment firm. To develop a profitable
                    portfolio, it is essential to become familiar with its fundamentals
                    and the factors that influence it.
                </p>

                {/* Filter Buttons */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <button className="px-6 py-2 bg-black text-white rounded-md">All projects</button>
                    <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">UI/UX</button>
                    <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">Branding</button>
                    <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">Industrial</button>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="group perspective" onClick={() => navigate(`/another/${project.id}`)}>
                            <div className="relative w-full h-80 transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">
                                {/* Front Side */}
                                <div className="absolute inset-0 backface-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full rounded-lg object-cover" />
                                </div>

                                {/* Back Side (Flip Effect) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white rounded-lg rotate-y-180 backface-hidden group-hover:rotate-y-0">
                                    <p className="text-sm">View Project</p>
                                </div>
                            </div>

                            {/* Text Below Image */}
                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-600">
                                    {project.company} — {project.category}
                                </p>
                                <h3 className="text-lg font-bold text-black">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
