import React from 'react';
import '../styles/Content.css';
import { Link} from 'react-scroll';
import usersImage from '../users.png'; 
import techStalkImage from '../language.png';

const Home = () => {
  return (
        <div className='home-content'>
            <div className='circle rounded-full'></div>
            <div className="home-text-first">
                <span>Your </span>
                <span className="pink-gradient">All-In-One</span>
                <span> destination</span>
            </div>
            <div className="home-text"> 
                <span>to hire a top-trained</span>
            </div>
            <div className="home-text-last">
                <span>Developers</span>
            </div>
            <p>Build your Dream Product & Dream Teach Team with Aastra</p>
            <div className='hire-talents'>
            <Link className='hire-now-home' to="hire" smooth={true} duration={500}>Hire Now</Link>
            <img src={usersImage} alt="Users" className='users-image' />
            </div>
            <div className='circle-right'></div>
            <div>
            <img src={techStalkImage} alt="Users" className='language-image' />
            </div>
        </div>
      
  );
};

export default Home;
