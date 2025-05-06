import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    position: "Full Stack Developer Intern",
    company: "Binmark IT Solutions",
    description:
      "Developing modern web applications using React, Tailwind CSS, and other frontend technologies.",
  },
  {
    year: "2021 - 2022",
    position: "Web Developer Intern",
    company: "ARS Private Ltd.",
    description:
      "Designed user-friendly interfaces and interactive prototypes for various clients.",
  },
];

const Experience = ({id}) => {
  return (
    <div id={id} className="max-w-5xl mx-auto p-8 h-screen flex flex-col items-center justify-center mt-20">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-10 tracking-wide uppercase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="relative border-l-4 border-white pl-8 mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative mb-8 p-6 bg-white/20 backdrop-blur-md shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute w-5 h-5 bg-white rounded-full left-[-10px] top-6 shadow-lg ring-4 ring-white animate-pulse"></div>
            <h3 className="text-2xl font-semibold text-[#00ADB5]">{exp.position}</h3>
            <p className="text-white text-sm opacity-80">
              {exp.company} | {exp.year}
            </p>
            <p className="text-white mt-3 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
