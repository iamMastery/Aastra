import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import '../styles/Header.css';
import Navbarsmooth from './Navbarsmooth';

const Header = () => {
  // Replace with your logo URL

  return (
    // <Navbar bg="dark" variant="dark" expand="lg" className="header">
      /* <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logoUrl}
            alt="Company Logo"
            className="d-inline-block align-top logo"
          />
          <span className="company-name">Your Company</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars size={30} className="menu-icon" />
        </Navbar.Toggle>
      </Container> */
    // </Navbar>
    <header>
      <Navbarsmooth/>
    </header>
  );
};

export default Header;
