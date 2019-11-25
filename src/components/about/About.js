import React from 'react';
import Social from '../social/Social';
import image from '../../assets/picture.jpg';
import './about.css';

const About = ({ avatar, name, profession, bio, address, social, email, phone }) => (
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

      <div className="About-contact">
        <span className="icon">
          <i className="far fa-envelope myicon"></i>
          <span>{email}</span>
        </span>
      </div>

      <div className="About-contact">
        <span className="icon">
          <i className="fas fa-phone"></i>
          <span>{phone}</span>
        </span>
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

/*

     <div className="About-location">
        {email}
      </div>

      <div className="About-location">
        {phone}
      </div>

*/