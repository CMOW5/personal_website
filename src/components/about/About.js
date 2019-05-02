import React from 'react';
import Social from '../social/Social';
import image from '../../assets/picture.png';
import './about.css';

const About = ({ avatar, name, profession, bio, address, social }) => (
  <div className="About">
    <div className="About-container">
      <div className="About-avatar">
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="About-name has-text-link">
        <h2>{name}</h2>
      </div>
      <div className="About-profession has-text-link">
        <p>{profession}</p>
      </div>
      <div className="About-desc">
        {bio}
      </div>
      <div className="About-location">
        {address}
      </div>
      <div className="About-social">
        <Social social={social} />
      </div>
    </div>
  </div>
);

export default About;