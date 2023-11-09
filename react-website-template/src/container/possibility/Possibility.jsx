import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='template__possibility section__padding' id='possibility'>
      <div className='template__possibility-image'>
        <img src={possibilityImage} alt='possibilityImage'/>
      </div>
      <div className='template__possibility-content'>
        <h4>Request Access</h4>
        <h1 className='gradient__text'>There are lots of cool things in this Cirriculum</h1>
        <p>I swear its true!</p>
      </div>
    </div>
  )
}

export default Possibility