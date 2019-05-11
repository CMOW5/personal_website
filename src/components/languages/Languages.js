import React from 'react';
import './languages.css';

const Languages = props => (
  <div className="Languages">
    <h2 className="Info-title title is-4">Languages</h2>
    <div className="Languages-container">
      <ul className="info-list">
      {props.data.map((language, index) => (
        <li className='Languages-item' key={`Languages-${index}`}>
          <h5>{language.name} : {language.proficiency}</h5>
        </li>
      ))}
      </ul>
    </div>
  </div>
);

export default Languages;