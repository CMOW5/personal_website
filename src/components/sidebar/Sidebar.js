import React from 'react';

const Sidebar = ({ children }) => (
  <aside className="Sidebar column is-one-third">
    <div className="Sidebar-container">
      {children}
    </div>
  </aside>
);

export default Sidebar;