import React from 'react';
import './footer.css';
import branding from '../../assets/St. P + Company.png'

const Footer = () => {
  return (
    <div className='template__footer section__padding'>
      <div className='template__footer-heading'>
        <img src={branding} alt="St. Patrick's and Company Logo"/>
      </div>
      <div className='template__email-contact'>
        <a href="mailto:info@stpatrickcurriculum.org?subject=request%20for%20info%20from%20website">info@stpatrickcurriculum.org</a>
      </div>
      <div className='template__footer-copyright'>
        <p>© 2023 All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer