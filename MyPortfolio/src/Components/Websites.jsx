import React from "react";
import imageone from "../assets/lotus.png";
import imagetwo from "../assets/Spotifyproject.png";
import imagethree from "../assets/ecommerceproject.png";

const Websites = () => {
  const projects = [
    {
      id: 1,
      title: "Lotus Website",
      description: "A modern landing page design with smooth UI and responsive layout.",
      image: imageone,
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio showcasing skills, projects, and contact info.",
      image: imagetwo,
      link: "#",
    },
    {
      id: 3,
      title: "E-commerce Project",
      description: "A fully responsive e-commerce web app with shopping features.",
      image: imagethree,
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-12 uppercase tracking-wide">
        Websites / Web Apps
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden 
                       hover:shadow-2xl transform hover:-translate-y-2 
                       transition duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-[#00ADB5] font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Websites;
