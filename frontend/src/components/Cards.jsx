import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import React from 'react';

const Cards = ({ i, tag, title, points, image, progress, range, targetScale }) => {

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className='cardContainer'>
      <motion.div
        style={{ scale, top: `calc(10vh + ${i * 40}px)` }}
        className='cards'
      >
        <div className="space-y-6 mt-12 w-[50%]">
          <p className="bg-violet-700 rounded-md text-white text-sm font-bold p-1 w-fit">
            {tag}
          </p>
          <h1 className="text-3xl font-bold break-words">{title}</h1>
          <ul className="text-gray-500 space-y-3 break-words">
            {points.map((point, i) => (
              <li key={i} className="flex gap-4 items-center">
                <TiTick size={20} className="bg-violet-600 text-white rounded-full w-fit" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-[50%] mt-20">
          <img src={image} className="w-[100%]" alt=" Image" />
          <div className="bg-violet-600 mx-auto text-white flex gap-2 font-semibold rounded-full p-2 w-fit">
            <button>Know More</button>
            <IoIosArrowDropright className="mt-1" size={20} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Cards


