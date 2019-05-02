import React from 'react';

const Main = ({ children }) => (
  <div className="Main container" >
    <div className="Main-container columns">
      {children}
    </div>
  </div>
);

export default Main;