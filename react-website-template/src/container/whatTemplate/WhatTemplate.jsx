import React from 'react';
import { Feature } from '../../components';
import './whatTemplate.css';

const WhatTemplate = () => {
  return (
    <div className='template__whatTemplate section__margin' id='whatTemplate'>
      <div className='template__whatTemplate-feature'>
        <Feature title="What is St. Patrick's?" text="Sample text for lots of content."/>
      </div>
      <div className='template__whatTemplate-heading'>
        <h1 className='gradient__text'>
          His mercy is endless.
        </h1>
        <p>
          Sample text
        </p>
      </div>
      <div className='template__whatTemplate-container'>
        <Feature title="Cirriculum" text="Sample text for lots of content."/>
        <Feature title="Pedagogy" text="Sample text for lots of content."/>
        <Feature title="Support" text="Sample text for lots of content."/>
      </div>
    </div>
  )
}

export default WhatTemplate