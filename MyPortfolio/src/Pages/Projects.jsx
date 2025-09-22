import React from "react";
import { useNavigate } from "react-router-dom";


const Projects = () => {
  const navigate = useNavigate();
  return (
    <div
      id="Portfolio"
      className="max-w-7xl mx-auto px-6 py-20 min-h-screen mt-20"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-16 tracking-wide uppercase">
        My Freelance Work
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Landing Pages Card */}
        <div onClick={()=> navigate("/landing")}
          className="bg-[#1a1a1a] rounded-2xl shadow-lg p-10 text-center 
                     hover:bg-[#222831] hover:shadow-2xl cursor-pointer 
                     transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-[#00ADB5] uppercase tracking-wide">
            Landing Pages
          </h3>
        </div>

        {/* Websites / Web Apps Card */}
        <div onClick={()=> navigate("/websites")}
          className="bg-[#1a1a1a] rounded-2xl shadow-lg p-10 text-center 
                     hover:bg-[#222831] hover:shadow-2xl cursor-pointer 
                     transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-[#00ADB5] uppercase tracking-wide">
            Websites / Web Apps
          </h3>
        </div>

        {/* UI/UX Card */}
        <div onClick={()=>navigate("/uiux")}
          className="bg-[#1a1a1a] rounded-2xl shadow-lg p-10 text-center 
                     hover:bg-[#222831] hover:shadow-2xl cursor-pointer 
                     transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-[#00ADB5] uppercase tracking-wide">
            UI / UX Design
          </h3>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <a
          href="#contact"
          className="bg-[#00ADB5] text-white px-8 py-3 rounded-lg font-semibold 
                     hover:bg-[#008b94] transition duration-300 shadow-lg"
        >
          Let’s Work Together
        </a>
      </div>
    </div>
  );
};

export default Projects;
  