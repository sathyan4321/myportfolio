import React from 'react';
import image from "../assets/images/image-1.png";
import './Home.scss';

function Home() {
  return (
    <div className='a'>
      <div className="left">
        <h1>Hello, I'm <span>Sathya Narayanan</span></h1>
        <h3>Full Stack Web Developer&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;STEM Educator</h3>

        <div className="btn-download">
        <button><span>Download Resume</span> </button>
        <button><span>Hire me</span> </button>
        </div>
      </div>

      <div className="right">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Home