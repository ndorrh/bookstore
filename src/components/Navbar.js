import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <li className="home"><Link to="/">Home</Link></li>
      <li className="cal"><Link to="/Calculator">Calculator</Link></li>
      <li className="quote"><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default NavBar;
