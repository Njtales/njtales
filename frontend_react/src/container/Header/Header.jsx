import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const Header = () => (
  <div className="app__header app__flex">     
  
      <div className='header-aboutsection'>
      
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
        <div className="app__headerleft-img">
          <div className='header-namegrey'>
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              src={images.nikhil_grey}
              alt="nikhil_grey"
            />
            </div>
          </div>


          <div className="app__header-badge">
            <div className="tag-cmp app__flex">
              <div className="badge-cmp app__flex">
              
                  <p> <span>👋</span> Hi, I'm
                    <div className='name'>
                     NIKHIL JATALE <br/>
                      {/* Data Enthusiast */}
                    </div></p>
              </div>
            </div>
          </div>
          
          <div className="app__headerleft-img">
            <div className="topleft_blob">
              <motion.img
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  src={images.blob_b01}
                  alt="blob_b01"
                  />
              </div>
            </div> 

          </motion.div>
            <div className="header-text">
              <span>Unleashing the Power of Data Engineering:<br/> Crafting Insights, Connecting and Building Predictive Dreams.</span>
            </div>

        <div class="app__header-contactinfo">
          <div class="app__header-contact">
            <div class="contact-cell">
              <span>Email:</span>
            </div>
            <div class="contact-cell">
              <span>LinkedIn:</span>
            </div>
          </div>
          <div class="app__header-contact">
            <div class="contact-cell">
              <a href="mailto:nikhiljatale@gmail.com" target="_blank" rel="noopener noreferrer">nikhiljatale@gmail.com</a>
            </div>
            <div class="contact-cell">
              <a href="https://www.linkedin.com/in/nikhil-jatale/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nikhil-jatale</a>
            </div>
          </div>
        </div>

        <div className="button-container">
          <div className="CVdownload-button">
            <a href="https://drive.google.com/u/0/uc?id=13-tDlVWG-pxoFauC-3F4306K1yCmPcGt&export=download">
              <button type='submit'>
                DOWNLOAD CV
              </button>
            </a>
          </div>

          <div className="hireme-button">
            <a href="#contact">
              <button type='submit'>
                HIRE ME
              </button>
            </a>
          </div>
        </div>
      </div>

    <motion.div
      className="app__header-img"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}    
      >
      <img src={images.profile_bg} alt="profile_bg"/>
      
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.blob_y09}
        alt="blob_y09"
        className="overlay_blob"
      />
    </motion.div>
  </div>
  
);

export default AppWrap(
  MotionWrap(Header, 'home'),
  'home',
  'app__primarybg',
);
