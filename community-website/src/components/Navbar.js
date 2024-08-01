import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../logo/Logo';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutUs">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/venueHire">Venue Hire</Link></li>
        <li><Link to="/volunteering">Volunteering</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;