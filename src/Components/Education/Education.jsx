import React, { useState, useEffect } from 'react';
import './Education.scss'; // Import your SCSS file for styling

function Education() {
  const [selectedItem, setSelectedItem] = useState(0); // Initialize selectedItem with 0 to display the first item by default

  const handleClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  const timelineItems = [
    { date: '2016', degree: 'Secondary School Leaving Certificate (SSLC)', description: 'Bishop Ubagarswamy Higher Secondary School, Tiruppur.' },
    { date: '2018', degree: 'Higher Secondary Certificate (HSC)', description: 'Bishop Ubagarswamy Higher Secondary School, Tiruppur.' },
    { date: '2018 - 2021', degree: 'B.Sc Physics', description: 'Sri Ramakrishna College of Arts And Science, Coimbatore.' },
    { date: '2021 - 2023', degree: 'M.Sc Physics', description: 'Chikkanna Government Arts and Science College, Tiruppur.' },
    { date: '2022', degree: 'Summer Training Program in Physics (STPIP)', description: 'Organized by  "Academy of Science, Chennai & Department of Nanoscience and Technology & Department of Physics, Bharathiar University, Coimbatore."' },
    { date: '2022 - 2023', degree: 'Research Internship Training Program', description: 'Sri Sai Ram Engineering College, West Tambaram, Chennai.' },
    { date: '2023-present', degree: 'Home Tutor', description: 'IGCSE syllabus, Tiruppur.' },
    { date: '2023', degree: 'WebDevelopment', description: 'Profenna Technologies, Tiruppur.' }
  ]

  return (
    <div className='edu'>
      <h1>Education</h1>
      <div className="edu-container">

        {/* Timeline */}
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'} ${selectedItem === index ? 'selected' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div className="timeline-item-content">
                <span className="date">{item.date}</span>
                <h3>{item.degree}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View tab */}
        <div className="view-container">
          {selectedItem !== null && (
            <div className="view-content">
              <span className="date">{timelineItems[selectedItem].date}</span>
              <h3>{timelineItems[selectedItem].degree}</h3>
              <p>{timelineItems[selectedItem].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
