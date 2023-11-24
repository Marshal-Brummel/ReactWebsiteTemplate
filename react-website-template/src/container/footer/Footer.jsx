import React from 'react';
import './footer.css';
import branding from '../../assets/St. P + Company.png'

const Footer = () => {
  return (
    <div className='template__footer section__padding'>
      <div className='template__footer-heading'>
        <img src={branding} alt="St. Patrick's and Company Logo"/>
      </div>
      <div className='template__footer-btn'>
        <p>Request Site Access</p>
      </div>
      <div className='template__footer-links'>
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