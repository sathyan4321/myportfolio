import React from 'react';
import './MainBody.scss';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import SideBarNav from '../SideBarNav/SideBarNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../About/About';

function MainBody() {
  return (
    <div className='mainbody-container'>
       <BrowserRouter>
        <SideBarNav className='sideBarNav'/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default MainBody