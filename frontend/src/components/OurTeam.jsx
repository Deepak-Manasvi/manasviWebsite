
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import backgroundImage from "../assets/Images/Footer.jpg";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("/api/team/all");
        console.log(response, "ourteam");

        // Verify that response data is an array
        if (Array.isArray(response.data)) {
          setTeams(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setTeams([]); // Set to an empty array if data is not an array
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
        setTeams([]); // Set to an empty array in case of error
      }
    };

    fetchTeams();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-white bg-[#3c4785] px-5 py-2 border rounded-xl">
        Our Team
      </h1>
      <div className="mt-8 text-center font-semibold text-white">
        <h2 className="text-2xl lg:text-4xl font-bold text-white">Meet Our Team</h2>
        <h3 className="text-xl lg:text-2xl pt-1 font-bold text-[#bea7a7]">
          Passionate. Dedicated. Expert.
        </h3>
        <p className="text-lg lg:text-xl mt-4 text-white">
          Our team consists of experienced and passionate professionals dedicated to delivering excellence.
        </p>
      </div>
      <div className="mt-8 w-full">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {Array.isArray(teams) && teams.map((team, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center rounded-lg shadow-md px-2 p-4">
                <img
                  src={`data:image/jpeg;base64,${team.image}`}
                  alt={team.name}
                  className="w-32 h-32 -mb-4 z-10 rounded-full"
                />
                <div className="w-56 rounded-2xl text-center py-8 bg-[#676bb8]">
                  <h3 className="text-xl capitalize text-gray-100 font-bold mb-1">{team.name}</h3>
                  <p className="text-gray-100 capitalize">{team.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
