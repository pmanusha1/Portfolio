import React from 'react';
import Skill_data from '../../assets/Skill_data';
import './About.css';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="about dark-section">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h2>

    <motion.div 
      className="about-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <p className="about-desc">
        I’m a passionate <span>JavaScript Developer</span> with 2 years of professional experience 
        at <span>Wipro Technologies</span>. I specialize in building modern, responsive, and 
        high-performance web applications using <span>ReactJS</span>, <span>Node.js</span>, 
        and related technologies.
      </p>
      <p className="about-desc">
        My goal is to craft seamless user experiences while writing clean, efficient, and scalable 
        code. I enjoy solving challenging problems and constantly learning to stay ahead in the 
        fast-paced tech world.
      </p>

      <h3 className="skill-heading">Technical Skills</h3>
      <div className="skills-list">
        {Skill_data.map((s, i) => (
          <motion.span 
            key={i} 
            className="skill-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
          >
            {s.skills}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
