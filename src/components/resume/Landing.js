import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { motion } from "framer-motion"

export const Landing = () => {
  const [showResume, setShowResume] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleResumeClose = () => setShowResume(false);
  const handleResumeShow = () => setShowResume(true);

  const handleCodeClose = () => setShowCode(false);
  const handleCodeShow = () => setShowCode(true);

  return (
    <div className="landing portfolio-section">
      <h1 className="landing-title">
        Hi, I'm Ben 
        <br />
        <span className="highlight">I'm a developer</span>
      </h1>
      <div className="landing-flex">
      </div>
      <motion.a className="btn-linear landing-btn" onClick={handleResumeShow} whileHover={{ scale: 1.05 }}>View my resume</motion.a>
      <motion.p className="text-link" onClick={handleCodeShow} whileHover={{ scale: 1.05 }} >...or see some code</motion.p>
      
      <Modal show={showResume} onHide={handleResumeClose} animation={false} style={{"color": "black"}}>
        <Modal.Body>
          <img className="resume-img" src="https://i.imgur.com/b2CdZDp.png" alt="Resume" />
        </Modal.Body>
      </Modal>
      
      <Modal show={showCode} onHide={handleCodeClose} animation={false} className="code-modal">
        <Modal.Body>
          <iframe src="https://github1s.com/fanninggg/portfolio" title="Website Code" allow></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}
