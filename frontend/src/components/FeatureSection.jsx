import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiReactos } from "react-icons/si";
import { GoCommentDiscussion } from "react-icons/go";

const FeatureSection = () => {
  return (
    <div>
      <div className="font-[sans-serif] bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-16">
            Discover Our Exclusive Features
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
            <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
              <IoSettingsOutline
                className="w-8 mb-6 text-4xl inline-block"
                fill="currentColor"
              />
              <h3 className="text-xl font-semibold mb-3">Customization</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Tailor our product to suit your needs Tailor our product to suit
                your needs.
              </p>
            </div>

            <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
              <MdSecurity
                fill="currentColor"
                className="w-8 mb-6 text-4xl inline-block"
              />
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Your data is protected by the latest security measures.
              </p>
            </div>

            <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
              <MdOutlineSupportAgent
                className="w-8 mb-6 text-4xl inline-block"
                fill="currentColor"
              />
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Tailor our product to suit your needs 24/7 customer support for
                all your inquiries.
              </p>
            </div>

            <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
              <BsGraphUpArrow
                className="w-8 mb-6 text-4xl inline-block"
                fill="currentColor"
              />
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Experience blazing-fast performance with our product.
              </p>
            </div>

            <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
              <SiReactos
                className="w-8 mb-6 text-4xl inline-block"
                fill="currentColor"
              />
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Tailor our product to suit your needs Expand your reach with our
                global network.
              </p>
            </div>

            <div className="rounded-xl group p-8 text-center hover:bg-white text-white hover:text-purple-800 hover:shadow-xl transition duration-300">
              <GoCommentDiscussion
                className="w-8 mb-6 text-4xl inline-block"
                fill="currentColor"
              />
              <h3 className="text-xl font-semibold mb-3">Communication</h3>
              <p className="text-gray-300 group-hover:text-gray-500 text-sm">
                Tailor our product to suit your needs Seamless communication for
                your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
