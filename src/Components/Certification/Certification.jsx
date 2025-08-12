import React from 'react';
import Certification_data from '../../assets/Certification_data';
import './Certification.css';
import { motion } from 'framer-motion';

const Certification = () => (
  <section id="certification" className="cert-section dark-section">
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Certifications
    </motion.h2>

    <div className="cert-grid">
      {Certification_data.map((c, i) => (
        <motion.div
          key={i}
          className="cert-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
        >
          <h3 className="cert-number">{c.no}</h3>
          <h4 className="cert-name">{c.name}</h4>
          <div className="cert-more">Read more →</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certification;
