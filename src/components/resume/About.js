import React from 'react'
import { MentorSVG, DeveloperSVG, ConsultantSVG } from '../svgs'

export const About = () => {
  return (
    <div className="about portfolio-section">
      <div className="about-background">
        <div className="about-text">
          <h2 data-aos='fade-up'>Hi I'm Ben. Nice to meet you.</h2>
          <p data-aos='fade-up'>Since beginning my developer journey 5+ years ago I have founded an award winning web development agency in London, taught over 500 students the basics of full stack development at the world's #1 coding bootcamp and worked closely with clients to deliver more than 20 market ready products. Recently I've moved away from the business & teaching side of things and have been focusing more on pure development.</p>
        </div>
      </div>
      <div className="skills">
        <div className="skill">
          <MentorSVG />
          <h3>Mentor</h3>
          <p className="">I take great joy in helping people discover coding and improve their professional skills.</p>
          <p className="skill-subtitle">Things I enjoy teaching:</p>
          <p>Rails, React, all things front-end</p>
          <p className="skill-subtitle">Teaching Stats</p>
          <ul>
            <li>5+ years experience</li>
            <li>21 Bootcamps</li>
            <li>500+ students</li>
            <li>20+ projects led</li>
            <li>97%+ rating</li>
          </ul>
        </div>
        <div className="skill">
          <DeveloperSVG />
          <h3>Full stack Developer</h3>
          <p className="">I like to code things from scratch, and enjoy bringing ideas to life using a variety of tools.</p>
          <p className="skill-subtitle">Design Tools:</p>
          <p>Figma, Framer, Adobe XD</p>
          <p className="skill-subtitle">Languages & Frameworks:</p>
          <ul>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Typescript</li>
            <li>React Native</li>
            <li>React (and more)</li>
          </ul>
        </div>
        <div className="skill">
          <ConsultantSVG />
          <h3>Consultant</h3>
          <p className="">Taking an idea from zero to launch is a specialty of mine and something I love to do.</p>
          <p className="skill-subtitle">Experience I draw from:</p>
          <p>30+ projects, 50+ UI/UX sessions</p>
          <p className="skill-subtitle">Applicable Skills</p>
          <ul>
            <li>UI/UX Design</li>
            <li>Client Relations</li>
            <li>Project Management</li>
            <li>SEO Knowledge</li>
            <li>Project Budgeting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
