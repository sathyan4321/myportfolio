import React, { useState } from 'react';
import image from "../assets/images/image-1.png";
import './Home.scss';
import resumePdf from '../assets/pdf/resume.pdf';

function Home() {
  const [showAlert, setShowAlert] = useState(false);

  const handleDownloadPdf = () => {
    const anchor = document.createElement('a');
    anchor.href = resumePdf; // Assign the imported PDF file to the href attribute
    anchor.download = 'Sathya Narayanan R - CV.pdf';
    anchor.style.display = 'none';
    document.body.appendChild(anchor);

    anchor.addEventListener('click', () => {
      setTimeout(() => {
        setShowAlert(true);
      }, 1000); // Adjust the delay as needed
    });

    anchor.click();

    document.body.removeChild(anchor);
  };


  return (
   <div className='home-container'>
     <div className={`a ${showAlert ? 'blur' : ''}`}>

      <div className="left-container">
        <h1>Hello, I'm <span>Sathya Narayanan</span></h1>
        <h3>Full Stack Web Developer&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;STEM Educator</h3>

        <div className="btn-download">
        <button onClick={handleDownloadPdf}><span>Download Resume</span> </button>
        <button><span>Hire me</span> </button>
        </div>
      </div>

      <div className="right-container">
        <img src={image} alt="" />
      </div>
    </div>

    {showAlert && (
        <div className="custom-alert">
          <div className="alert-content">
            <h2>Thank you for downloading!</h2>
            <p>My resume has been downloaded successfully.</p>
            <button onClick={() => setShowAlert(false)}>Close</button>
          </div>
        </div>
      )}
   </div>
  )
}

export default Home