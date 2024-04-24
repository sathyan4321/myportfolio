import React, { useState } from 'react';
import './Profile.scss';
import resumePdf from '../assets/pdf/resume.pdf'; // Import your PDF file

function Profile() {
  const [showAlert, setShowAlert] = useState(false);

  const handleDownloadPdf = () => {
    const anchor = document.createElement('a');
    anchor.href = resumePdf;
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
    <div>
      <div className={`portfolio-container ${showAlert ? 'blur' : ''}`}>
        <h1>Portfolio</h1>
        <div className="resume">

          <div className="container">
          <div className="information box">
              <h3>Contact</h3>
            <ul>
              <li>Email: <a href="sathyanr.4321@gmail.com">Click here</a></li>
              <li>GitHub: <a href="github.com/sathyan4321">Click here</a></li>
              <li>LinkedIn: <a href="linkedin.com/in/sathya-narayanan-2b56051b3">Click here</a> </li>
            </ul>
          </div>

          <div className="soft-skills box">
            <h3>Soft Skills</h3>
            <ul>
            <li>Effective communication</li>
            <li>Flexibility</li>
            <li>Teamwork</li>
            <li>Patience</li>
            <li>Critical thinking</li>
            <li>Project management </li>
            <li>Time management</li>
            <li>Problem-solving</li>
            <li>Ready to learn</li>
            </ul>
          </div>

          <div className="work-experience box">
            <h3>Work Experience</h3>
            <h4>Junior Full Stack Developer</h4>
            <p>Profenna Technologies, Tiruppur.  (March 2023 - March 2024)</p>
            <ul>
              <li>Spearheaded the implementation of robust back-end solutions using Node.js, resulting in a 30% decrease in page load times and a 25% increase in system efficiency.</li>
              <li>Orchestrated a high-performing team in developing user-friendly UIs with React.js, driving a 40% increase in user engagement and 20% higher customer satisfaction scores.</li>
              <li>Designed and deployed user registration forms with client-side mail sender integration for enhanced user engagement.</li>
              <li>Conducted regular code reviews and implemented best practices, resulting in a 15% reduction in bugs and improved code quality.</li>
            </ul>
          </div>

          </div>

          

          <div className="hard-skills box">
            <h3>Hard Skills</h3>
            <ul>
              <h4>Front-End</h4>
              <li>Proficient in writing semantic and accessible HTML markup, ensuring compatibility across different browsers and devices.</li>
              <li>Skilled in creating responsive and visually appealing layouts using CSS, including CSS grid and flexbox for efficient design.</li>
              <li>Strong understanding of core JavaScript concepts, such as variables, functions, and control flow, with experience in DOM manipulation and event handling.</li>
              <li>Experienced in utilizing Bootstrap framework to streamline the development process and create responsive, mobile-first web applications.</li>
              <li>Proficient in building dynamic and interactive user interfaces using React.js, including state management with hooks and context API for scalable applications.</li>
            </ul>
            <ul>
              <h4>Back-End</h4>
              <li>Node.js and Express.js</li>
              <li>Experienced in integrating Firebase services such as Firestore for real-time database management, Firebase Authentication for user authentication, and Cloud Functions for serverless computing.</li>
              <li>Skilled in database design and management using MySQL.</li>
            </ul>
            <ul>
              <h4>Programming Languages</h4>
              <li>Python</li>
              <li>Java</li>
            </ul>
            <ul>
              <h4>Tools</h4>
              <li>Visual Studio Code</li>
              <li>Figma</li>
              <li>version control with Git and Github</li>
            </ul>
          </div>

        </div>

        <button onClick={handleDownloadPdf}>Download Pdf</button>
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
  );
}

export default Profile;
