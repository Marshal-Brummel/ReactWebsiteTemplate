import React from 'react';
import './heroBanner.css';

const HeroBanner = ( {imgURL, text, fullscreen} ) => {
  return (
    <div className={fullscreen ? 'template__banner-container' : 'template__banner-container-full'}>
      <img src={imgURL}></img>
      <p>{text}</p>
    </div>
  )
}

export default HeroBanner