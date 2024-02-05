import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import { DownSVG } from '../svgs'
import testimonials from '../../data/testimonials.json'

export const Testimonials = () => {
  const {clients, students, colleagues} = testimonials
  const [group, setGroup] = useState('colleagues');
  
  const handleGroupChange = (group) => {
    setGroup(group);
    document.querySelectorAll('.testimonials-carousel').forEach((carousel) => {
      carousel.classList.add('d-none');
    })
    document.querySelector(`.${group}-carousel`).classList.remove('d-none')
  };
  
  const handleDropdownToggle = (e) => {
    e.currentTarget.querySelector('.testimonials-dropdown-content').classList.toggle('d-none')
  }

  const renderTestimonials = (items, name) => {
    if (items.length > 0) {
      const testimonials = items.map((testimonial) => {
        return (
          <Carousel.Item key={testimonial.id} className="testimonial">
            <img src={testimonial.avatar} alt="" className="avatar" />
            <p className="content">{testimonial.content}</p>
            <Carousel.Caption>
              <p className="author">{testimonial.author}</p>
              <p className="position">{testimonial.position}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })
      return (
        <Carousel indicators={true} controls={false} interval={6000} className={`testimonials-carousel ${name}-carousel`}>
          {testimonials}
        </Carousel>
      )
    }
  }

  return (
    <div className="testimonials portfolio-section">
      <h2>Testimonials</h2>
      <p className="testimonials-tagline">People I've worked with have said some nice things. Hear from my:</p>
      <div className="testimonials-dropdown" onClick={(e) => handleDropdownToggle(e)}>
        <p>{group[0].toUpperCase() + group.substring(1)} <DownSVG /></p>
        <div className="testimonials-dropdown-content d-none">
          <p onClick={() => handleGroupChange('colleagues')}>Colleagues</p>
          <p onClick={() => handleGroupChange('clients')}>Clients</p>
          <p onClick={() => handleGroupChange('students')}>Students</p>
        </div>
      </div>
      <div className="testimonials-carousel-holder">
        {/* TODO: passing variable and then string of variable name is grim */}
        {renderTestimonials(colleagues, 'colleagues')}
        {renderTestimonials(clients, 'clients')}
        {renderTestimonials(students, 'students')}
      </div>
    </div>
  )
}
