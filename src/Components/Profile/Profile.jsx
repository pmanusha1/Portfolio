import React from 'react';
import './Profile.css';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Profile = () => (
  <section id="home" className="profile-section dark-section">
    
    <motion.h1 
      className="profile-name"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      Hi, I’m <span>Manusha Pasula</span>
    </motion.h1>

    <motion.h2 
      className="profile-role"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      JavaScript Developer
    </motion.h2>

    <motion.p 
      className="profile-desc"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      I build modern, responsive, and interactive web applications.  
      With 2+ years at Wipro Technologies, I specialize in crafting seamless user experiences using JavaScript, ReactJS and Node.js.
    </motion.p>

    <motion.div 
      className="profile-actions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <AnchorLink className="btn-connect" offset={50} href="#contact">
        Connect
      </AnchorLink>
      <a 
        className="btn-resume" 
        href="/Manusha-Pasula-Resume.pdf" 
        download
      >
        Resume
      </a>
    </motion.div>

  </section>
);

export default Profile;
