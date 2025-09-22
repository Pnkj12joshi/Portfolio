import React from 'react'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Websites from './Components/Websites';
import UIUXdesign from './Components/UIUXdesign';

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
        <Route path = "/landingpage" element = {<LandingPage/>}/>
        <Route path='/websites' element={<Websites/>}/>
        <Route path ="/uiux" element = {<UIUXdesign/>}/>
      </Routes>
      
    </div>
  )
}

export default App
