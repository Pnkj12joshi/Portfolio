import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full flex justify-center p-8 mt-4">
      <div className="w-[90%] p-5 flex gap-1 flex-col sm:flex-row">
        <div className="flex flex-1 justify-center">
          <div className="text-white flex flex-col gap-4">
            <p className="text-3xl font-bold text-center">
              Get in Touch
            </p>
            <div className="flex gap-4 p-2 justify-center">
              <a href="https://x.com/PankajJosh25635" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="cursor-pointer hover:text-blue-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/pankaj-joshi12/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />
              </a>
              <a href="https://github.com/Pnkj12joshi" target="_blank" rel="noopener noreferrer">
                <FaGithub className="cursor-pointer hover:text-gray-400 transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <p className="text-white flex items-center gap-2">
            <AiOutlineCopyright /> 2025 By Pankaj Joshi
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
