import React from "react";
import imageone from "../assets/portfolio.png";
import { GoDownload } from "react-icons/go";
import { FaLinkedin, FaInstagram, FaCircleChevronDown } from "react-icons/fa6";
import About from "./About";
import Work from "./Skills";
import Experience from "./Experince";
import Projects from "./Projects";
import ContactUs from "./Contacts";
import Footer from "./Footer";
import Resume from "../assets/Pankaj Joshi Frontend Developer.pdf";

const Dashboard = ({ handleScroll }) => {
  const handleSubmit = () => {
    const resumeURl = Resume;
    const a = document.createElement("a");
    a.href = resumeURl;
    a.download = "Pankaj_Joshi_Freelance_Developer.pdf";
    a.click();
  };

  return (
    <>
        
{/* ================= Hero Section ================= */}
<section className="min-h-screen px-6 flex items-center">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
    
    {/* Left Content */}
    <div className="flex flex-col gap-6 items-center md:items-start flex-1">
      <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-white leading-tight">
  Hi, I’m <span className="text-[#00ADB5]">Pankaj Joshi</span> 👋  
  <br />
   Web Developer
</h1>
<p className="text-gray-300 text-base sm:text-lg max-w-md">
  I craft modern, fast, and user-friendly websites to help businesses grow.
</p>


      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 rounded-lg bg-[#00ADB5] text-white font-semibold hover:bg-[#008B8F] transition"
        >
          Download CV <GoDownload className="inline ml-2" />
        </button>
        <button
          onClick={() => handleScroll("ContactUs")}
          className="px-6 py-3 rounded-lg border border-[#00ADB5] text-[#00ADB5] font-semibold hover:bg-[#00ADB5] hover:text-white transition"
        >
          Hire Me
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end flex-1 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <img
        src={imageone}
        alt="Pankaj Joshi - Freelance Developer"
        className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-full object-cover rounded-2xl 
        transition-transform duration-500 hover:scale-105"
      />
      {/* Optional Glow */}
      <div className="absolute inset-0 rounded-2xl bg-[#00ADB5] blur-3xl opacity-20 -z-10 hidden sm:block"></div>
    </div>
  </div>
</section>



<div className="w-full flex justify-center items-center p-2 cursor-pointer h-[96px]">
        <FaCircleChevronDown
          className="h-[46px] w-[46px] text-[#00ADB5] hover:text-white sm:h-[56px] sm:w-[56px] bounce-top"
          onClick={() => {
            handleScroll("About");
          }}
        />
      </div>

      {/* ================= Services Section ================= */}
      {/* ================= Services Section ================= */}
<section className="mt-20 px-6" id="Services">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-[32px] font-bold text-white mb-4">
      My Freelance Services
    </h2>
    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
      I provide end-to-end web solutions that help businesses grow with
      modern, scalable, and user-friendly websites & applications.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-[#222831] p-6 rounded-2xl border border-transparent 
    hover:border-[#00ADB5] transition cursor-pointer hover:bg-[#00ADB5] group">
  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-black">
    Website Development
  </h3>
  <p className="text-sm text-gray-400 group-hover:text-black">
    Responsive and fast websites tailored for businesses & individuals.
  </p>
</div>


      <div className="bg-[#222831] p-6 rounded-2xl border border-transparent 
    hover:border-[#00ADB5] transition cursor-pointer hover:bg-[#00ADB5] group">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-black">
          E-Commerce Solutions
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-black">
          Scalable online stores with secure payments & product management.
        </p>
      </div>

     <div className="bg-[#222831] p-6 rounded-2xl border border-transparent 
    hover:border-[#00ADB5] transition cursor-pointer hover:bg-[#00ADB5] group">
  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-black">
    Web Applications
  </h3>
  <p className="text-sm text-gray-400 group-hover:text-black">
    Custom apps to automate workflows & improve productivity.
  </p>
</div>


      <div className="bg-[#222831] p-6 rounded-2xl border border-transparent 
    hover:border-[#00ADB5] transition cursor-pointer hover:bg-[#00ADB5] group">
  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-black transition-colors duration-300">
    UI/UX Design
  </h3>
  <p className="text-sm text-gray-400 group-hover:text-black transition-colors duration-300">
    User-friendly interfaces designed for seamless experiences.
  </p>
</div>

    </div>
  </div>
</section>

{/* ================= Stats / Achievements ================= */}
<section className="mt-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
    <div className="bg-[#222831] p-6 rounded-2xl shadow-md hover:shadow-[#00ADB540] transition">
      <h2 className="text-[36px] font-bold text-[#00ADB5]">2+</h2>
      <p className="text-gray-300">Years Experience</p>
    </div>

    <div className="bg-[#222831] p-6 rounded-2xl shadow-md hover:shadow-[#00ADB540] transition">
      <h2 className="text-[36px] font-bold text-[#00ADB5]">20+</h2>
      <p className="text-gray-300">Projects Delivered</p>
    </div>

    <div className="bg-[#222831] p-6 rounded-2xl shadow-md hover:shadow-[#00ADB540] transition">
      <h2 className="text-[36px] font-bold text-[#00ADB5]">15+</h2>
      <p className="text-gray-300">Happy Clients</p>
    </div>

    <div className="bg-[#222831] p-6 rounded-2xl shadow-md hover:shadow-[#00ADB540] transition">
      <h2 className="text-[36px] font-bold text-[#00ADB5]">100%</h2>
      <p className="text-gray-300">Client Satisfaction</p>
    </div>
  </div>
</section>


      {/* ================= Scroll Down ================= */}
      

      {/* ================= Sections ================= */}
      <About id={"About"} />
      <Work id={"Work"} />
      <Experience id={"Experience"} />
      <Projects id={"Projects"} />
      <ContactUs id={"ContactUs"} />
      <Footer />
    </>
  );
};

export default Dashboard;
