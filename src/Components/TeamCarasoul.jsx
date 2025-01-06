import React, { useState } from "react";
import img1 from "../Assets/Images/carasoul-1.jpeg";
import img2 from "../Assets/Images/carasoul-2.jpeg";
import img3 from "../Assets/Images/carasoul-3.jpeg";
import img4 from "../Assets/Images/carasoul-4.jpeg";
import img5 from "../Assets/Images/carasoul-5.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "Muhammad Hamid Raza",
      role: "Senior Manager",
      image: img1,
    },
    {
      name: "Muhammad Awais",
      role: "Affliate Marketing Specialist",
      image: img2,
    },
    {
      name: "Muhammad Asim",
      role: "Team Leader",
      image: img3,
    },
   
    {
      name: "Muhammad Kamran",
      role: "Graphic Expert",
      image: img4,
    },
    {
      name: "Rahat Ali",
      role: "Data Entering Specialist",
      image: img5,
    },
   
  ];

  const handleScroll = (direction) => {
    const totalItems = teamMembers.length;
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalItems - 1 : prevIndex 
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalItems - 1 ? 0 : prevIndex 
      );
    }
  };

  return (
    <>
      <div className=" max-w-screen-xl mx-auto flex  items-center mt-3">
      <button
          onClick={() => handleScroll("left")}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md mx-2 flex items-center justify-center w-10 h-10"
        >
          <FaChevronLeft className="text-gray-600 text-lg" />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md mx-2 flex items-center justify-center w-10 h-10"
        >
          <FaChevronRight className="text-gray-600 text-lg" />
        </button>
       
      </div>
      <div className="w-full max-w-screen-xl mx-auto flex justify-center items-center my-10">
        <div className="flex justify-center items-center overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 270}px)`, 
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-lg shadow-md p-4 text-center flex-shrink-0 mx-4"
                style={{
                  transform: `scale(${currentIndex === index ? 1.2 : 1})`, // Focus on the current image
                  zIndex: currentIndex === index ? 10 : 1, // Bring the current image to the front
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-lg"

                />
                <h3 className="mt-4 text-[0.8rem] ps-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCarousel;
