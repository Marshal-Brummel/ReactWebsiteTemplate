import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Title 1',
    text: 'Sample text for the first element.'
  },
  {
    title: 'Title 2',
    text: 'Sample text for the second element.'
  },{
    title: 'Title 3',
    text: 'Sample text for the third element.'
  },
  {
    title: 'Title 4',
    text: 'Sample text for the fourth element.'
  }
]

const Features = () => {
  return (
    <div className='template__features section__padding' id='features'>
      <div className='template__features-heading'>
        <h1 className='gradient__text'>Massive Heading for content</h1>
        <p>Sample text for content sake.</p>
      </div>
      <div className='template__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features