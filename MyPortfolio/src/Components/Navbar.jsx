import React, { use, useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({handlescroll}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-100vw flex justify-center items-center">
        <div className="flex justify-between p-5 w-[90%]">
          <div className="flex justify-center items-center">
            <p className="logofont">PankajJoshi</p>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          <div
            className={`flex gap-8 justify-center items-center md:flex ${
              isOpen
                ? "flex flex-col absolute top-16 left-0 w-full bg-gray-900 p-4 cursor-pointer"
                : "hidden"
            } md:static md:p-0 md:space-y-0`}
          >
            <p
              className="text-[15px] text-white cursor-pointer"
              onClick={() => handlescroll("Home")}
            >
              Home
            </p>
            <p
              className="text-[15px] text-white cursor-pointer"
              onClick={() => handlescroll("About")}
            >
              About Me
            </p>
            <p className="text-[15px] text-white cursor-pointer" onClick={()=>handlescroll("ContactUs")}>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
