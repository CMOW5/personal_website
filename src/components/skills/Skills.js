import React from 'react';
import './skills.css';

const Skills = props => (
  <div className="Skills">
    <h2 className="Info-title title is-4">Skills</h2>
    <div className="Skills-container">
      <ul className="info-list">
      {props.data.map((skill, index) => (
        <li className='Skills-item' key={`Skills-${index}`}>
          <h5>{skill.name}</h5>
        </li>
      ))}
      </ul>
    </div>
  </div>
);

export default Skills;


/*
  <div className='skills-line'>
  <span style={{ width: skill.percentage }}></span>
  </div>
*/