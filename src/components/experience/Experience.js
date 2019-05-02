import React from 'react';
import './experience.css';

const Experience = props => (
  <div className="Experience">
    <h2 className="Info-title title is-4">Experience</h2>
    {props.data.map((exp, index) => (
      <div className='item' key={`Experience-${index}`}>
        <h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
        <ul className="info-list">
          {exp.responsibilities.map((responsibility, index) => (
            <li key={`Responsibility-${index}`}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Experience;


