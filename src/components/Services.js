import React from 'react';
import '../styles/Service.css'; // Make sure to import the correct CSS file
import HexagonSVG from './HexagonSVG';
import hrOutsourceImage from '../hr_outsourcing.png';
import devService  from '../dev_service.png';
import { ReactComponent as DatabaseIcon } from './DatabaseIcon.svg';
const Services = () => {
  return (
    <div className="service">
      <h2 className="service-title">SERVICES</h2>
      <h1 className='service-heading'>Discover our unique <br/><span className='orange-gradient'>offerings</span></h1>
      <p>At Aastra Technology, we pioneer software solutions and provide skilled IT professionals,</p><p> seamlessly managing staffing for our clients. We bridge the gap in software development and Information Security expertise,</p><p> shaping tomorrow's solutions today</p>
      <div className='service-gradient'></div>
      <div className='service-container'>
        <div className='top-left'>
            <HexagonSVG />
              <h2 className='orange-gradient'>HR outsourcing</h2>   
              <h2>service</h2> 
              <p>Experience the transformative power of our tailored methodologies. From the pioneering hire-train-deploy approach to the innovative Hire-Train-Place method, we optimize talent acquisition, training, and deployment strategies to suit your unique needs.</p>   
        </div>
        <div className='top-right'>
        <img className='hrImage' src={hrOutsourceImage} alt="HR Outsourcing" />
        </div>
        <div className='bottom-left'>
        <img className='devImage' src={devService} alt="HR Outsourcing" />
        </div>
        <div className='bottom-right'>
          <DatabaseIcon/>
        </div>
      </div>
    </div>
  );
};

export default Services;
