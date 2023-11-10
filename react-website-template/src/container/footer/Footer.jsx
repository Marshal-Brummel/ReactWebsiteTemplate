import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='template__footer section__padding'>
      <div className='template__footer-heading'>
        <h1 className='gradient__text'>Footer header for testing purposes</h1>
      </div>
      <div className='template__footer-btn'>
        <p>Request Site Access</p>
      </div>
      <div className='template__footer-links'>
        <div className='template__footer-links__logo'>
          <img src={gpt3Logo} alt="logo"/>
          <p>
            Sample Address for content
          </p>
        </div>
        <div className='template__footer-links__div'>
          <h4>
            Links
          </h4>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </div>
        <div className='template__footer-links__div'>
          <h4>
            School
          </h4>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </div>
        <div className='template__footer-links__div'>
          <h4>
            Pedagogy
          </h4>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </div>
      </div>
      <div className='template__footer-copyright'>
        <p>All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer