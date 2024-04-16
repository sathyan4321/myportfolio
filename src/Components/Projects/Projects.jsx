import React from 'react';
import './Projects.scss';

function Projects() {
  
  const projects = [
    { id: 1, 
      name: 'Full Stack Web Development', 
      description: 'Conceptualized and built a dynamic company showcase website with React.js, showcasing products and services effectively. Integrated Firebase for authentication and Google Sheets API for streamlined data management, enhancing scalability. Email form data sends user to client when user registeration form submit.',
      link: 'https://jmprojexive-87caa.web.app'
      },
    { id: 2, 
      name: 'Invoice Bill Generator', 
      description: 'Developed an interactive invoice billing page using React.js to allow users to generate and manage invoices efficiently. Implemented data collection forms to gather information such as item descriptions, quantities, prices, and taxes for each invoice entry. Utilized JavaScript to calculate subtotal, tax, and total amounts dynamically based on user input, providing real-time updates as data is entered. Designed the page layout and styling to be responsive across all devices, ensuring optimal viewing and usability on desktops, tablets, and mobile phones.',
      link: 'https://invoice-147ef.web.app'
      },
      { id: 3, 
        name: 'FeedBack Response Page', 
        description: 
        <ol>
          <li>Developed a feedback management system using React.js and process user feedback efficiently.</li>
          <li>Implemented a user-friendly feedback form allowing users to submit their feedback, including ratings and comments, through a simple interface.</li>
          <li>Utilized JavaScript to capture user feedback in real-time and process it accordingly, categorizing feedback as positive or negative based on predefined criteria.</li>
          <li>Implemented automatic response mechanisms to provide instant feedback to users based on their input:
            <ul>
              <li>Positive Feedback: Automatically generated a happy response message acknowledging the positive feedback and expressing gratitude for the input.</li>
              <li>Negative Feedback: Generated a sympathetic apology message, acknowledging any inconvenience caused by the negative feedback and reassuring users of the teams commitment to improvement.</li>
              </ul>
            </li>
          <li>Designed the page layout and styling to be responsive across all devices, ensuring optimal viewing and usability on desktops, tablets, and mobile phones.</li>
          </ol>,
        link: 'https://rvw.salondiary.in/?id=c03bcb89-6517-4d19-ae9e-854145385cae'
        },
        { id: 4, 
          name: 'Project', 
          description: 'Description of Project 2',
          link: 'https://www.google.com'
          },
          { id: 4, 
            name: 'Project', 
            description: 'Description of Project 2',
            link: 'https://www.google.com'
            },
            { id: 4, 
              name: 'Project', 
              description: 'Description of Project 2',
              link: 'https://www.google.com'
              },
              { id: 4, 
                name: 'Project', 
                description: 'Description of Project 2',
                link: 'https://www.google.com'
                },{ id: 4, 
                  name: 'Project', 
                  description: 'Description of Project 2',
                  link: 'https://www.google.com'
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
            <img src={project.image} alt="" />
            <h3>{project.name}</h3>
            {/* <p>{project.description}</p> */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
      </div>



      <div className="pro-container two">
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
