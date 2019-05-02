import React from 'react';

const Footer = ({ children }) => (
  <div className="Footer column is-full has-text-centered">
    <a href="https://bulma.io">
      <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
    </a>
    <br />
    <a href="https://reactjs.org" className="icon has-text-link">
      <i className="fab fa-react icon is-medium"></i>
    </a>
  </div>
);

export default Footer;