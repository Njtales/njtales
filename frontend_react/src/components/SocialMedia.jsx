import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.instagram.com/njtales/' target='_blank' rel='auther'>
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/nikhil-jatale/' target='_blank' rel='auther'>
        <GrLinkedinOption /> 
      </a>      
    </div>
    <div>
      <a href='https://github.com/Njtales' target='_blank' rel='auther'>
        <BsGithub />
      </a>
    </div>
    
  </div>
);

export default SocialMedia;
