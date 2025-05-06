import React from 'react'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import { Routes, Route } from "react-router-dom";

const App = () => {
const handlescroll = (id)=>{
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <Navbar handlescroll = {handlescroll} />
      <Routes>
        <Route path="/" element= {<Dashboard handleScroll={handlescroll}/>}/>
      </Routes>
      
    </div>
  )
}

export default App
