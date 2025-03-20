import React from "react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TeamSection = () => {

    const [Team, setTeam] = useState([

        {
            pic:'',
            name:'Basant',
            roll:'Mern-Stack',
            url:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            pic:'',
            name:'prashant',
            roll:'',
            url:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            pic:'',
            name:'basant',
            roll:'hr',
            url:'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            pic:'',
            name:'manav',
            roll:'owner',
            url:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ])
  return (
    <div className="w-full h-screen">
      <div className="font-[sans-serif] bg-gray-50 p-4">
        <div className="max-w-5xl max-sm:max-w-sm mx-auto">
          <h2 className="text-gray-800 text-4xl font-extrabold text-center">
            Meet Our Team
          </h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-12">
            {
                Team.map((item,index)=>(
                    <div  key={index} className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
                    <img
                      src={item.url}
                      className="w-36 h-36 rounded-full inline-block object-cover"
                    />
      
                    <div className="mt-4">
                      <h4 className="text-gray-800 text-base font-bold">{item.name}</h4>
                      <p className="text-gray-600 text-xs mt-1">{item.roll}</p>
      
                      <div className="space-x-4 mt-4">
                        <button
                          type="button"
                          className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                        >
                          <FaFacebook />
                        </button>
                        <button
                          type="button"
                          className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                        >
                          <FaTwitterSquare />
                        </button>
                        <button
                          type="button"
                          className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                        >
                          <FaLinkedin />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            }




            {/* <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
              <img
                src=""
                className="w-36 h-36 rounded-full inline-block object-cover"
              />

              <div className="mt-4">
                <h4 className="text-gray-800 text-base font-bold">John Doe</h4>
                <p className="text-gray-600 text-xs mt-1">Software Engineer</p>

                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <FaFacebook />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <FaTwitterSquare />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <FaLinkedin />
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
              <img
                src=""
                className="w-36 h-36 rounded-full inline-block object-cover"
              />

              <div className="mt-4">
                <h4 className="text-gray-800 text-base font-bold">
                  Mark Adair
                </h4>
                <p className="text-gray-600 text-xs mt-1">Software Engineer</p>

                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <FaFacebook />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <FaTwitterSquare />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <FaLinkedin />
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-36 h-36 rounded-full inline-block object-cover"
              />

              <div className="mt-4">
                <h4 className="text-gray-800 text-base font-bold">
                  Simon Konecki
                </h4>
                <p className="text-gray-600 text-xs mt-1">Web Designer</p>

                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <FaFacebook />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <FaTwitterSquare />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <FaLinkedin />
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div className="bg-white py-4 px-2 shadow-md rounded-lg hover:scale-110 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-36 h-36 rounded-full inline-block object-cover"
              />

              <div className="mt-4">
                <h4 className="text-gray-800 text-base font-bold">Sophia</h4>
                <p className="text-gray-600 text-xs mt-1">Software Developer</p>

                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <FaFacebook />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <FaTwitterSquare />
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <FaLinkedin />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
