import React from 'react';
import './feature.css';

const Feature = ( {title, text} ) => {
  return (
    <div className='template__features-container__feature'>
      <div className='template__features-container__feature-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='template__features-container__feature_text'>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Feature