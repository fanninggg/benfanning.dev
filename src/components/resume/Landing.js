import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { motion } from "framer-motion"
import Resume from "../../data/resume.pdf";

export const Landing = () => {
  const [showResume, setShowResume] = useState(false);

  const handleResumeClose = () => setShowResume(false);
  const handleResumeShow = () => setShowResume(true);

  return (
    <div className="landing portfolio-section">
      <h1 className="landing-title">
        Hi, I'm Ben 
        <br />
        <span className="highlight">I'm a developer</span>
      </h1>
      <div className="landing-flex">
      </div>
      <motion.a className="btn-linear landing-btn" href={Resume} download="BenFanningResume" whileHover={{ scale: 1.05 }}>Download my CV</motion.a>
      <motion.a className="text-link landing-text-link" href="mailto:fanning@hey.com" target="_blank" whileHover={{ scale: 1.05 }} >...or get in contact</motion.a>
      
      <Modal show={showResume} onHide={handleResumeClose} animation={false} style={{"color": "black"}}>
        <Modal.Body>
          <img className="resume-img" src="https://i.imgur.com/b2CdZDp.png" alt="Resume" />
        </Modal.Body>
      </Modal>
    </div>
  )
}
