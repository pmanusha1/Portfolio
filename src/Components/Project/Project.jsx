import React from 'react';
import Project_data from '../../assets/Project-data';
import './Project.css';
import { motion } from 'framer-motion';

const Project = () => (
  <section id="project" className="project dark-section">
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Projects
    </motion.h2>

    <div className="projects-grid">
      {Project_data.map((p, i) => (
        <motion.div
          key={i}
          className="project-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
        >
          <h3 className="proj-title">{p.title}</h3>
          <p className="proj-desc">{p.desc}</p>
          <div className="proj-tools">
            {p.tools.split(',').map((tool, idx) => (
              <span key={idx} className="tool-tag">{tool.trim()}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Project;
