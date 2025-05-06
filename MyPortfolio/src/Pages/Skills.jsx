import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMui, SiSass } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

const skills = [
  { name: "React.js", icon: <FaReact className="text-[#00ADB5] text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#00ADB5] text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#00ADB5] text-4xl" /> },
  { name: "Express.js", icon: <FaDatabase className="text-[#00ADB5] text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#00ADB5] text-4xl" /> },
  { name: "MUI", icon: <SiMui className="text-[#00ADB5] text-4xl" /> },
  { name: "Sass", icon: <SiSass className="text-[#00ADB5] text-4xl" /> },
  { name: "SQL", icon: <BsFiletypeSql className="text-[#00ADB5] text-4xl" /> },
];

const Work = ({id}) => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen py-16">
      <div className="max-w-6xl w-full px-6 text-center">
        {/* Title Animation */}
        <motion.h1
          className="text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-[#00ADB5]">Skills</span>
        </motion.h1>

        {/* Skills Grid with Animation */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-lg shadow-md hover:scale-105 transition-transform text-center hover:bg-white group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <div className="flex justify-center">{skill.icon}</div>
              <p className="text-white mt-3 text-lg font-medium group-hover:text-black">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
