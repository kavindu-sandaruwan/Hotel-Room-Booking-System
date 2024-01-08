import React from 'react';
import '../styles/navBottom.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBottom: React.FC = () => {
  return (
    <div className='navbottom'>
      <div className="items">
      <Nav className="navbar-nav-left">
            <Link to="/home/landing" className="nav-link">HOME</Link>
          </Nav>
          <Nav className="navbar-nav-left">
            <Link to="/about" className="nav-link">ABOUT</Link>
          </Nav>
          <Nav className="navbar-nav-left">
            <Link to="/room/homescreen" className="nav-link">ROOMS</Link>
          </Nav>
          <Nav className="navbar-nav-left">
            <Link to="/contact" className="nav-link">CONTACTS</Link>
          </Nav>

        <Link to="/room/homescreen" className='navbtn'>BOOK NOW</Link>
      </div>
    </div>
  );
};

export default NavBottom;
