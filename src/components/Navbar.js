import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul>
      <li className="home"><Link to="/">BOOKS</Link></li>
      <li className="quote"><Link to="/CategoryPage">CATEGORY</Link></li>
    </ul>
  </nav>
);

export default NavBar;
