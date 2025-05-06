import React from 'react'
import imageone from "../assets/doodle items.png";
import imagetwo from "../assets/Group 78.png"

const About = ({id}) => {
  return (
    <>
     <div id={id} className='w-full flex justify-center items-center flex-col sm:flex-row  mt-[100px]'>
      <div className='flex-1 flex justify-center items-center flex-col'> 
       <h1 className='text-white text-[44px] font-bold tracking-in-expand'>About <span className='text-[#00ADB5]'> me</span></h1>
       <div className='mt-4 flex justify-center items-center'>
       <p className='text-white text-center p-6 text-[18px]'>Hi, I'm Pankaj — a passionate Frontend Developer skilled in building responsive, user-friendly web interfaces using modern technologies.
       I specialize in HTML, CSS, JavaScript, and frameworks like React.js, along with styling libraries such as Tailwind CSS. With a strong eye for design and performance, I focus on creating seamless user experiences across all devices. I enjoy turning ideas into reality through clean and efficient code, and I'm always eager to learn and adopt the latest tools in frontend development </p>      </div>
      </div>
      <div className='bg-cover bg-center h-[500px] flex-1 flex justify-center items-center' style={{ backgroundImage: `url(${imageone}) `}}>
        <img src={imagetwo} alt="" />
      </div>
      </div>
    </>
   
  )
}

export default About
