import React from 'react';
import './About.scss';

function About() {
  return (
    <div>
      <div className="about-container">
        <h1>About me</h1>
        
        <h4>Hello there! 👋 I'm <strong>Sathya Narayanan R</strong>, a passionate full-stack developer and STEM educator with a diverse skill set and a love for technology and education.</h4>

        <div className="flex">
        <p className='ap1'><strong>Full-Stack Developer 🖥️</strong><br />
            As a full-stack developer, I specialize in building modern, responsive web applications from scratch. With proficiency in <span>HTML, SCSS, React, Node.js, Express.js, MySQL, Python, Java, and JavaScript</span> , I have the versatility to tackle projects at every stage of development, from front-end design to back-end implementation. <br />
            My experience spans a wide range of projects, from e-commerce platforms to data-driven web applications. I thrive on solving complex problems and delivering high-quality solutions that exceed client expectations.</p>

        <p className='ap2'><strong>STEM Educator  🎓</strong><br />
        In addition to my work as a developer, I am deeply passionate about STEM education. I have extensive experience teaching classes in <span>electronics, embedded systems, physics applications, and website development.</span>  I believe in empowering students with practical, hands-on learning experiences that inspire creativity and critical thinking. <br />
            Whether I'm coding a web application or leading a classroom discussion, my goal is always the same: to make technology accessible and enjoyable for learners of all ages and backgrounds.</p> 
        </div>

        <div className="gallery">
          <h1>Gallery</h1>
        </div>


      </div>
    </div>
  )
}

export default About