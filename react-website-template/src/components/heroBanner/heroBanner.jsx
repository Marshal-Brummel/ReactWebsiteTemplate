import React from 'react';
import './heroBanner.css';

const HeroBanner = ( {imgURL, text, fullscreen} ) => {
  return (
    <div className={fullscreen ? 'template__banner-container-full' : 'template__banner-container'}>
      <div className='header'>
        <img src={imgURL} className='background'></img>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HeroBanner