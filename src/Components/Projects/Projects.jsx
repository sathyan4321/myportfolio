import React from 'react';
import './Projects.scss';
import one from '../assets/images/project-img/computer-1836330_1920.png';
import two from '../assets/images/project-img/bill-6107551_1920.png';
import three from '../assets/images/project-img/online-shop-7089861_1920.png';

function Projects() {
  
  const projects = [
    { id: 1, 
      name: 'Full Stack Web Development', 
      link: 'https://jmprojexive-87caa.web.app',
      image: one
      },
    { id: 2, 
      name: 'Invoice Bill Generator', 
      link: 'https://invoice-147ef.web.app',
      image: two
      },
      { id: 3, 
        name: 'FeedBack Response Page', 
        link: 'https://rvw.salondiary.in/?id=c03bcb89-6517-4d19-ae9e-854145385cae',
        image: three 
        }                                                                                                                                                                                                                                                                                                                                                                                                                                 
    // Add more project objects as needed
  ];

  return (
    <div className='pro'>

      <h1>Projects</h1>

      <div className="animation-container">
      <hr className="line-left" style={{ width: '10%' }} />
      <hr className="line-right" style={{ width: '10%' }} />
      </div>



      <div className="pro-container one">
        <h3>Web Development</h3>

      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project">
            <div className='image'><img src={project.image} alt="" /></div>
            
            <h3>{project.name}</h3>
            {/* <p>{project.description}</p> */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
      </div>



      <div className=" two-hide">
        <h3>STEM Projects</h3>

      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project">
            <img src={project.image } alt="" />
            <h3>{project.name}</h3>
            {/* <p>{project.description}</p> */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Projects;
