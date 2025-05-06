import React from 'react'
import imageone from "../assets/Group 2346.png";
import { GoDownload } from "react-icons/go";
import { FaCircleChevronDown } from "react-icons/fa6";
import About from './About';
import Work from './Skills';
import Experience from './Experince';
import Projects from './Projects';
import ContactUs from './Contacts';
import Footer from './Footer';
import Resume from "../assets/Pankaj Joshi Frontend Developer.pdf";

const Dashboard = ({handleScroll}) => {
  const handleSubmit = ()=>{
    const resumeURl = Resume;
    const a = document.createElement("a");
    a.href = resumeURl;
    a.download = "Pankaj Joshi Frontend Developer.pdf";
    a.click();
  }
  return (
    <>
      <div className=" flex flex-col md:flex-col lg:flex-row mt-[134px]">
        <div className="flex flex-col p-4 flex-1 justify-center items-center ">
          <h1 className="text-[56px] sm:text-[76px] text-white font-bold tracking-in-expand">
            FRONTEND{" "}
            <span className="text-[#00ADB5] sm:block font-bold">DEVELOPER</span>
          </h1>
          <div className=" flex flex-col sm:flex-row gap-4  w-full justify-center items-center  mt-3 ">
            <div className="flex rounded-[24px] text-white px-4 py-3 bg-[#393E46] font-semibold hover:bg-[#00ADB5] w-[233px] justify-center items-center cursor-pointer" onClick={()=>handleScroll("ContactUs")}>
              {" "}
              hire me
            </div>
            <div
              className="flex rounded-[24px] text-white  px-4 py-3 bg-[#393E46] font-semibold hover:bg-[#00ADB5] gap-1 justify-center items-center w-[233px] cursor-pointer"
              onClick={handleSubmit}
            >
              {" "}
              Download CV <GoDownload />{" "}
            </div>
          </div>
        </div>
        <div className="flex-1  flex justify-center items-center">
          <img
            src={imageone}
            alt=""
            className=" w-[200px] h-[200px] sm:w-[400px] sm:h-[400px]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-2 cursor-pointer h-[96px] ">
        {" "}
        <FaCircleChevronDown className="h-[46px] w-[46px] text-[#00ADB5] hover:text-[white] sm:h-[56px] sm:w-[56px] bounce-top" onClick={()=>{handleScroll("About")}} />{" "}
      </div>
      <About id={"About"} />
      <Work id={"Work"} />
      <Experience id={"Experience"} />
      <Projects id={"Projects"} />
      <ContactUs id={"ContactUs"}/>
      <Footer />
    </>
  );
}

export  default Dashboard
