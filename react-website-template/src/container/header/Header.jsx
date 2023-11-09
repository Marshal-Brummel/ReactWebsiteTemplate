import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='template__header section__padding' id='home'>
      <div className='template__header-content'>
        <h1 className='gradient__text'>Let's build something amazing with The Lord!</h1>
        <p>Here is a lot of text that should be a placeholder for all other other content.</p>

        <div className='tempalte__header-content__input'>
          <input type='email' placeholder='Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='template__header-content__people'>
          <img src={people} alt='An image of people'/>
          <p>Testing things so that there is content on the page!</p>
        </div>
      </div>
      <div className='template__header-image'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header