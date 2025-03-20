import React, { useEffect, useState } from "react";

// Data
const initialImages = [
  {
    img: "https://plus.unsplash.com/premium_photo-1720798650953-1bb37db7241c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
    name: "Image 1",
    desc: "Description for Image 1",
  },
  {
    img: "https://via.placeholder.com/600/771796",
    name: "Image 2",
    desc: "Description for Image 2",
  },

  {
    img: "https://via.placeholder.com/600/771796",
    name: "Image 2",
    desc: "Description for Image 2",
  },
  // ... other images ...
];

const Slider = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
    }, 3000); // Change the interval (in milliseconds) as desired

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (
    <div className="carousel-container text-center  flex items-center justify-center w-full h-screen border border-black">
      <div className="flex flex-col">
        <div className="carousel-items flex items-center">
          {/* Render 5 items on the screen */}
          {Array(5)
            .fill()
            .map((_, index) => {
              const imageItem =
                images[
                  getCircularIndex(currentIndex + index - 2, images.length)
                ];
              return (
                <div
                  key={index}
                  className={`${
                    index === 2 ? "scale-150" : "opacity-70"
                  } ${index === 0 || index === 4 ? "scale-60" : "hidden md:block lg:block"
                  }`}
                  onClick={() =>
                    handleItemClick(
                      getCircularIndex(currentIndex + index - 2, images.length)
                    )
                  }
                >
                  <img src={imageItem.img} alt="item" className="max-w-32 max-h-32 object-cover rounded-full cursor-pointer" />
                </div>
              );
            })}
        </div>
        <div>
          {/* Render the current item description */}
          <div className="description p-32">
            <p className="font-bold">{images[currentIndex].name}</p>
            <p>{images[currentIndex].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
