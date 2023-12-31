import React from 'react';
import './article.css';

const Article = ({imgURL, date, title}) => {
  return (
    <div className='template__blog-container__article'>
      <div className='template__blog-container__article-image'>
        <img src={imgURL} alt='blog'/>
      </div>
      <div className='template__blog-container__article-content'>
        <div>
          <p>
            {date}
          </p>
          <h3>
            {title}
          </h3>
        </div>
        <p>
          Read Full Article
        </p>
      </div>
    </div>
  )
}

export default Article