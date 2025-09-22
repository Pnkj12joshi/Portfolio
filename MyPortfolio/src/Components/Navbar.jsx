import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ handlescroll }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center p-5 w-[90%] mx-auto">
        
        {/* Logo */}
        <div className="flex items-center">
          <p className="text-2xl font-bold text-white tracking-wide cursor-pointer">
            Dev<span className="text-teal-400">oPankaj</span>
          </p>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <p className="text-[15px] text-white hover:text-teal-400 cursor-pointer"
            onClick={() => handlescroll("Home")}>
            Home
          </p>
          <p className="text-[15px] text-white hover:text-teal-400 cursor-pointer"
            onClick={() => handlescroll("Services")}>
            Services
          </p>
          <p className="text-[15px] text-white hover:text-teal-400 cursor-pointer"
            onClick={() => handlescroll("Portfolio")}>
            Portfolio
          </p>
          <p className="text-[15px] text-white hover:text-teal-400 cursor-pointer"
            onClick={() => handlescroll("Testimonials")}>
            Testimonials
          </p>
          {/* CTA Button */}
          <button className="bg-teal-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-teal-500 transition duration-300"   onClick={() => handlescroll("Contact")}>
            Contact 
          </button>
        </div>
      </div>

      {/* Nav Links - Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 py-6 space-y-6">
          <p className="text-[16px] text-white hover:text-teal-400 cursor-pointer"
            onClick={() => handlescroll("Home")}>
            Home
          </p>
          <p className="text-[16px] text-white hover:text-teal-400 cursor-pointer"
            onClick={() => handlescroll("Services")}>
            Services
          </p>
          <p className="text-[16px] text-white hover:text-teal-400 cursor-pointer"
            onClick={() => handlescroll("Portfolio")}>
            Portfolio
          </p>
          <p className="text-[16px] text-white hover:text-teal-400 cursor-pointer"
            onClick={() => handlescroll("Testimonials")}>
            Testimonials
          </p>

          {/* CTA Button */}
          <button className="bg-teal-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-teal-500 transition duration-300" onClick={()=> handlescroll("Contact")}>
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
