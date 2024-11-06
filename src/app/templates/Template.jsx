import React from 'react';

const Template = ({ children }) => (
  <div className="special-template">
    <header>Special Header</header>
    <main>{children}</main>
    <footer>Special Footer</footer>
  </div>
);

export default Template;