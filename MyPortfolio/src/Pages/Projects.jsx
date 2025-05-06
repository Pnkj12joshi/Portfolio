import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = {
  fullStack: [
    {
      title: "Expanse Tracker App",
      description:
        "A Expanse Tracker where you can Add your Income, Expanses and Track your Balance with Authenticate firebase.",
      github: "https://github.com/Pnkj12joshi/Expanse-Tracker",
      liveDemo: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A complete e-commerce website with authentication, product listing, and cart functionality and have payment features COD and Stripe.",
      github: "https://github.com/Pnkj12joshi/EcommerceApp",
      liveDemo: "#",
    },
  ],
  frontend: [
    {
      title: "Audio Plateform (Spotify Clone)",
      description:
        "A React-based Audio Platform with features like audio playback, playlist management",
      github: "https://github.com/Pnkj12joshi/spotify-clone",
      liveDemo: "#",
    },
  ],
};

const Projects = ({id}) => {
  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen flex flex-col items-center justify-center mt-20">
      <h2 className="text-4xl font-bold text-white text-center mb-10 tracking-wide uppercase">
        Projects
      </h2>

      {/* Full Stack Projects */}
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.fullStack.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white/20 backdrop-blur-md shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
              <p className="text-white opacity-80 mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 bg-[#00ADB5] px-4 py-2 rounded-md hover:bg-[#007b83] transition duration-300"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 bg-[#00ADB5] px-4 py-2 rounded-md hover:bg-[#007b83] transition duration-300"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend Projects */}
      <div className="w-full mt-12">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.frontend.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white/20 backdrop-blur-md shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
              <p className="text-white opacity-80 mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 bg-[#00ADB5] px-4 py-2 rounded-md hover:bg-[#007b83] transition duration-300"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2 bg-[#00ADB5] px-4 py-2 rounded-md hover:bg-[#007b83] transition duration-300"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
