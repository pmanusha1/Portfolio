import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', '857fc2a4-2471-45ca-b1bd-92bbc5edd9af');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData))
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="contact dark-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      <div className="contact-section">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let’s talk</h3>
          <span>
            I'm currently available to take on new projects. Feel free to send me a message about anything you'd like me to work on — I’ll get back to you as soon as possible.
          </span>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p>pmanusha221@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
              <p>Hyderabad</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/manusha-pasula/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://github.com/pmanusha1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            rows={6}
            placeholder="Write your message here"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit" className="contact-submit">Submit Now</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
