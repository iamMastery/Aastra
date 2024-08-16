import React from 'react';
import '../styles/Content.css';
import Services from './Services';
import Home from './Home';
import Hire from './Hire';
const Content = () => {
  return (
    <main className="content">
      <section id="home" className="section">
        <Home/>
      </section>
      <section id="services" className="section">
        {/* <h2>Services</h2> */}
        <Services />
      </section>
      <section id="about" className="section">
        <h2>About</h2>
      </section>
      <section id="contact" className="section">
        <h2>Contact</h2>
      </section>
      <section id="hire" className="section">
        <Hire/>
      </section>
    </main>
  );
};

export default Content;
