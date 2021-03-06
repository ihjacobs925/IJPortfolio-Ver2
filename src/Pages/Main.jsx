import React from 'react';
import '../Styling/Main.css';

import Resume from '../Data/Ian_Jacobs_Resume.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../Img/Chicago-art.jpeg';

const Main = () => {
  return (
    <div className='Main' id='Main'>
      <img className='main-logo' src={logo} alt='logo' />
      <div className='title-box'>
        <h1>Ian Jacobs</h1>
        <h2>Fullstack Software Developer</h2>
      </div>
      <div className='social-box'>
        <a href='https://www.linkedin.com/in/ianjacobs925/' target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size='lg' />
          <span>LinkedIn</span>
        </a>
        <a href='https://github.com/ihjacobs925' target="_blank">
          <FontAwesomeIcon icon={faGithub} size='lg' />
          <span>Github</span>
        </a>
        <a href='mailto:ihjacobs925@gmail.com' target="_blank">
          <FontAwesomeIcon icon={faEnvelope} size='lg' />
          <span>Email</span>
        </a>

        <a href={Resume} target="_blank">
          <FontAwesomeIcon icon={faFileAlt} size='lg' />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Main;
