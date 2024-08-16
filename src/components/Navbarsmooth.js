import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css'; // Import your navbar CSS file

const Navbarsmooth = () => {
  const logoUrl='https://aastratech.com/img/logo.png';
  return (
    <nav className="header">
      <div className="logo-container">
        <img
          src={logoUrl}
          alt="Company Logo"
          className="d-inline-block align-top logo"
        />
       
      </div>
      <ul className="menu">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        <li><Link className='hire-now' to="hire" smooth={true} duration={500}>Hire Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbarsmooth;
