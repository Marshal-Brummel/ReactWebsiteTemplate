import React from 'react';
import { Article } from '../../components';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

import './blog.css';

const Blog = () => {
  return (
    <div className='template__blog section__padding' id='blog'>
      <div className='template__blog-heading'>
        <h1 className='gradient__text'>Blog Content</h1>
      </div>
      <div className='tempalte__blog-container'>
        <div className='template__blog-container__groupA'>
          <Article imgUrl={blog01} date="Sep 23, 2023" title="Sample Title"/>
        </div>
        <div className='template__blog-container__groupB'>
          <Article imgUrl={blog02} date="Sep 23, 2023" title="Sample Title"/>
          <Article imgUrl={blog03} date="Sep 23, 2023" title="Sample Title"/>
          <Article imgUrl={blog04} date="Sep 23, 2023" title="Sample Title"/>
          <Article imgUrl={blog05} date="Sep 23, 2023" title="Sample Title"/>
        </div>
      </div>
    </div>
  )
}

export default Blog