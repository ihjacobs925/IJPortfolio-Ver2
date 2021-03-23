import React from 'react';
import '../Styling/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='container'>
        <h2>Find Me Online</h2>
        <div className='footer-links'>
          <a href='mailto:ihjacobs925@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} size='6x' />
            <span>Email</span>
          </a>
          <a href='https://www.linkedin.com/in/ianjacobs925/'>
            <FontAwesomeIcon icon={faLinkedin} size='6x' />
            <span>LinkedIn</span>
          </a>
          <a href='https://github.com/ihjacobs925'>
            <FontAwesomeIcon icon={faGithub} size='6x' />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <footer>
        <p>&copy;2021 Ian Jacobs</p>
      </footer>
    </div>
  );
};

export default Footer;