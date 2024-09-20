import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle navbar

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2><Link to="/">CDPC RGUKTRKV</Link></h2>
      </div>
      
      {/* Toggle button for smaller devices */}
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fas fa-bars"></i> {/* Hamburger icon */}
      </div>

      {/* Navbar links with conditional class */}
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><NavLink to="/job-interview" activeClassName="active">Job & Interview</NavLink></li>
        <li><NavLink to="/events-workshops" activeClassName="active">Events and Workshops</NavLink></li>
        <li><NavLink to="/placement-preparation" activeClassName="active">Placement Preparation</NavLink></li>
        <li><NavLink to="/placement-analytics" activeClassName="active">Placement Analytics</NavLink></li>
        <li><NavLink to="/alumni" activeClassName="active">Alumni</NavLink></li>
        <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
        <li className="notification-icon">
          <NavLink to="/notification" activeClassName="active"><i className="fas fa-bell"></i></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
