/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import OurTeam from "../components/OurTeam";
import Marquee from "./../components/Marquee";
import ball from "../assets/Images/ball.png";
import { FaPlus } from "react-icons/fa6";

const AboutUsPage = () => {
  const [showMission, setShowMission] = useState(true);

  return (
    <div className="min-h-screen bg-cover bg-center bg-black">
      <div
        className="h-[40vh] inset-0 p-4 flex justify-center items-center bg-no-repeat  bg-center bg-cover"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" mx-auto text-center border border-[#C761E4] rounded-3xl px-20 py-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold ">
            About Us
          </h1>
          <nav className="mt-2 text-white">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2">→</span>
            <a href="/about" className="font-bold underline">
              About Us
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap">
        <div className="w-full md:w-1/2 p-4 border-none">
          <div className=" p-6 rounded-lg shadow-md border-none">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <h3 className="text-4xl text-gray-200 font-bold mb-2">
              <span className="text-4xl text-yellow-600">Manasvi </span>{" "}
              Technologies (OPC) Pvt. Ltd
            </h3>
            <p className="text-gray-100 mb-4 text-sm">
              Welcome to the heart of innovation, where every line of code we
              write is a step towards transforming dreams into digital
              realities. <br /> At Manasvi Technologies (OPC) Pvt. Ltd, we don't
              just craft websites, applications, and software, we sculpt
              experiences that resonate.
            </p>
            <p className="text-gray-100 mb-4 text-sm">
              Welcome to Manasvi Technologies (OPC) Pvt. Ltd, where the journey
              of transformation begins. Our journey began with a simple mission:
              to bridge the gap between technology and human connection. From
              the moment you step into our digital world, you embark on a
              journey beyond conventional boundaries. Our team of tech artisans
              thrives on challenges, turning complexities into elegant
              solutions. But we're more than just developers, we're dream
              weavers.
            </p>
            <p className="text-gray-100 mb-4 text-sm">
              From Website development to digital marketing strategies, we're
              your trusted companions on the road to success. But our journey
              doesn't end with deployment. We're here for the long haul,
              navigating the ever-changing landscape of technology alongside
              you. We provide not just solutions, but partnerships built on
              trust, integrity, and a shared vision for tomorrow.
            </p>

            <button className="inline-block text-yellow-600 border-b-2 border-blue-600 px-3 py-1 rounded-full text-2xl mb-4 transition duration-300">
              Learn more
            </button>
          </div>
        </div>
        <div className="right-container w-full md:w-1/2 p-4 flex flex-col items-center justify-center ">
          <div className="bg-[] p-16 rounded-md overflow-hidden">
            <div className="rounded-lg shadow-md overflow-hidden w-full max-h-[400px] animate-bounce">
              <img
                src={ball}
                alt="Manage your finances the easy way"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 text-center w-full overflow-hidden py-4  ">
          <div
            className={`transition-transform duration-700 ease-in-out ${
              showMission ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h2 className="text-4xl text-yellow-500 font-bold mb-2">
              Our Mission
            </h2>
            <p className="text-gray-200 mb-4 tracking-tighter p-14 ">
              At MANASVI TECHNOLOGIES (OPC) PVT. LTD. our mission is to empower
              businesses with cutting-edge technology solutions that drive
              growth and innovation. <br /> Through expert web development,
              application creation, and strategic digital marketing, we strive
              to elevate your online presence and maximize your impact in the
              digital sphere. <br /> With a focus on creativity, efficiency, and
              results, we are committed to delivering exceptional value and
              helping you achieve your goals in the ever-evolving digital
              landscape.
            </p>
          </div>
          <div
            className={`transition-transform duration-700 ease-in-out ${
              showMission ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <h2 className="text-4xl text-yellow-600 font-bold mb-2 ">
              Our Vision
            </h2>
            <p className="text-gray-200 mb-4 tracking-tighter pt-6 ">
              At MANASVI TECHNOLOGIES (OPC) PVT. LTD. our vision is to be the
              beacon of innovation in the digital realm,
              <br /> revolutionizing businesses through bespoke web and
              application development, and strategic digital marketing solutions{" "}
              <br />. We aspire to empower our clients with cutting-edge
              technology, driving their success and growth in the dynamic online
              landscape. <br /> With a relentless pursuit of excellence and a
              commitment to staying ahead of industry trends, we aim to be the
              catalyst for transformative change in the digital world.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <button
              className={`py-2 px-4 rounded-full transition duration-300 ${
                showMission ? "bg-[#3c4785] text-white" : "bg-gray-300"
              }`}
              onClick={() => setShowMission(true)}
            >
              Our Mission
            </button>
            <button
              className={`py-2 px-4 rounded-full transition duration-300 ${
                !showMission ? "bg-[#3c4785] text-white" : "bg-gray-300"
              }`}
              onClick={() => setShowMission(false)}
            >
              Our Vision
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* <div class="flex flex-col  items-center justify-between p-8 text-white">
          <div class="flex-1 text-center tracking-tighter">
            <span class="inline-block text-yellow-600 border-b-2 border-blue-600 px-3 py-1 rounded-full text-4xl mb-4">
              Manasvi-techno
            </span>

            <h1 class="text-3xl font-bold text-foreground  mb-4">
              All in one for you payment transaction online without <br />{" "}
              having to leave the house to make transactions
            </h1>
            <p class="text-muted-foreground mb-4">
              Pellentesque ipsum nulla in eget interdum a. Neque pellentesque
              pulvinar mauris pulvinar diam.
            </p>
            <p class="text-muted-foreground mb-4">
              Turpis aliquet pellentesque velit vitae nisi sed morbi ultrices
              sed. Egestas interdum elit integer <br /> nec pharetra eget
              blandit dolor purus. A sed nisi congue morbi fermentum blandit.
              Turpis pretium dignissim risus ultrices purus et amet netus nibh.
            </p>
          </div>
          <div class=" flex-1 items-center justify-center flex mt-8 md:mt-0 md:ml-8 md:w-[80%] ">
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
              alt="img"
              class="rounded-lg object-cover shadow-lg  md:w-[90%] md:h-[420px]"
            />
          </div>
        </div> */}
        {/* new dev section */}
        {/* <div className="w-full  border-t border-yellow-500 p-4 py-20">
          <div className="grid md:grid-cols-2 md:items-center gap-6 md:h-[400px] font-[sans-serif] max-w-4xl mx-auto relative px-4 md:mt-4 md:before:absolute md:before:right-0 md:before:w-[300px] md:before:rounded-md md:before:h-full md:before:bg-yellow-700">
            <div className="flex items-center">
              <img
                src=""
                className="object-contain h-[150px] max-sm:h-32 rounded-md"
              />
              <div className="ml-6">
                <div>
                  <h4 className="text-base font-semibold text-gray-200">Manasvi Technologies (OPC) PVT. LTD.</h4>
                  <p className="text-xs text-gray-300 mt-0.5">manasvitech01@gmail.com</p>
                </div>

                <div className="space-x-3 mt-6">
                  <a
                    href="javascript:void(0)"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 155.139 155.139"
                    >
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002"
                      />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4"
                      />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <h2 className="text-gray-200 text-2xl font-semibold">
                Prompt Delivery and Enjoyable Dining Experience.
              </h2>
              <p className="mt-6 text-sm text-gray-100">
                The service was amazing. I never had to wait that long for my
                food. The staff was friendly and attentive, and the delivery was
                impressively prompt.
              </p>
            </div>
          </div>
        </div> */}
        {/* new dev section */}
        <div className="flex flex-col  items-center justify-between p-8 text-white">
          {/* <div className="flex-1 text-center tracking-tighter">
            <span className="inline-block text-yellow-600 border-b-2 border-blue-600 px-3 py-1 rounded-full text-4xl mb-4">
              Manasvi-technology
            </span>

            <h1 className="text-3xl font-bold text-foreground  mb-4">
              All in one for you payment transaction online without <br />{" "}
              having to leave the house to make transactions
            </h1>
            <p className="text-muted-foreground mb-4">
              Pellentesque ipsum nulla in eget interdum a. Neque pellentesque
              pulvinar mauris pulvinar diam.
            </p>
            <p className="text-muted-foreground mb-4">
              Turpis aliquet pellentesque velit vitae nisi sed morbi ultrices
              sed. Egestas interdum elit integer <br /> nec pharetra eget
              blandit dolor purus. A sed nisi congue morbi fermentum blandit.
              Turpis pretium dignissim risus ultrices purus et amet netus nibh.
            </p>
          </div> */}
          <div className=" flex-1 items-center justify-center flex mt-8 md:mt-0 md:ml-8 md:w-[80%] ">
            {/* <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
              alt="img"
              className="rounded-lg object-cover shadow-lg  md:w-[90%] md:h-[420px]"
            /> */}
          </div>
        </div>

        <div className="">
          <div className="p-16 max-w-7xl max-md:max-w-xl mx-auto font-[sans-serif]">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={ball} className="w-full rounded-md animate-pulse" />
              </div>

              <div className="xl:col-span-2 max-md:px-6">
                <div>
                  <h2 className="text-gray-200 sm:text-3xl text-2xl font-extrabold">
                    Discover Our Exclusive Features
                  </h2>
                  <p className="text-sm text-gray-200 leading-relaxed mt-6">
                    Unlock a world of possibilities with our exclusive features.
                    Explore how our unique offerings can transform your journey
                    and empower you to achieve more.
                  </p>
                </div>

                <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-12">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Customization</h6>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Security</h6>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Support</h6>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Performance</h6>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Global Reach</h6>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Communication</h6>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Integration</h6>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Scalability</h6>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      className="fill-green-500 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <h6 className="text-base text-gray-200">Security</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="">
          <div className="p-4 font-[sans-serif]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2  className="inline-block text-yellow-600 border-b-2 border-blue-600 px-3 py-1 rounded-full text-4xl mb-4">
                Testimonials
              </h2>
              <p className="text-sm mt-6 leading-relaxed text-gray-200">
                Veniam proident aute magna anim excepteur et ex consectetur
                velit ullamco veniam minim aute sit. Elit occaecat officia et
                laboris Lorem minim. Officia do aliqua adipisicing ullamco in
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12 text-gray-200">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex">
                  <img src="" className="w-10 h-10 rounded-full" />
                  <div className="ml-4 text-left">
                    <p className="text-sm font-bold text-gray-200">prashu</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      prashant@gmail.com
                    </p>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="text-sm leading-relaxed text-gray-200">
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex">
                  <img src="" className="w-10 h-10 rounded-full" />
                  <div className="ml-4 text-left">
                    <p className="text-sm font-bold text-gray-200">Mack</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      rjmack23@gmail.com
                    </p>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="text-sm leading-relaxed ">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit. Elit occaecat officia
                    et laboris Lorem minim. Officia do aliqua adipisicing
                    ullamco in Veniam proident aute magna anim excepteur et ex
                    consectetur velit ullamco veniam minim aute sit.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex">
                  <img src="" className="w-10 h-10 rounded-full" />
                  <div className="ml-4 text-left">
                    <p className="text-sm font-bold text-gray-200">Basant</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      basantmeena@gmail.com
                    </p>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="text-sm leading-relaxed ">
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="">
          <div className="font-[sans-serif] space-y-4 max-w-6xl mx-auto text-center p-4 ">
            {/* <h2  className="inline-block text-yellow-600 border-b-2 border-blue-600 px-3 py-2 rounded-full text-4xl mb-4">FAQS</h2> */}
            <div className="rounded-lg hover:bg-blue-50 transition-all text-center">
              {/* <button
                
                className="w-full text-base font-semibold text-left py-5 px-6 text-blue-600 flex items-center"
                
              >
                <span className="mr-4 text-center" >
                  Are there any special discounts or promotions available during
                  the event.
                </span>
                <FaPlus className="w-4 text-white ml-auto shrink-0 -rotate-90"/>
              </button> */}
              {/* <div className="hidden pb-5 px-6">
                <p className="text-sm text-[#333]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  auctor auctor arcu, at fermentum dui. Maecenas vestibulum a
                  turpis in lacinia. Proin aliquam turpis at erat venenatis
                  malesuada. Sed semper, justo vitae consequat fermentum, felis
                  diam posuere ante, sed fermentum quam justo in dui. Nulla
                  facilisi. Nulla aliquam auctor purus, vitae dictum dolor
                  sollicitudin vitae. Sed bibendum purus in efficitur consequat.
                  Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi
                  congue facilisis sapien, a semper orci facilisis in.</p>
              </div> */}
            </div>
           
           
           
          </div>
        </div>
      </div>
      {/* <OurTeam /> */}
      {/* <Marquee /> */}
    </div>
  );
};

export default AboutUsPage;