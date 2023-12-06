import React from 'react';
import celticCross from '../../assets/CelticCross.jpg';

import './welcomeContainer.css';

const welcomeContainer = () => {
  return (
    <div className='template__welcome'>
      <div className='template__welcome-split'>
        <div className='template__welcome-left'>
          <div className='template__welcome-left-top'>
            <div className='template__welcome-heading'>
              <h1>
                Welcome!
              </h1>
            </div>
            <p>
              For all those interested in the renewal of Catholic classical education, here you will find The Saint Patrick Curriculum, guidance on how to teach it, information on classical education and pedagogy, and coaching on how to run a Catholic classical school.  We look forward to sharing these treasures we have collected and the wisdom we have gathered from many who have trodden this path before us.  
            </p>
            <p>
              We also plan to provide an open forum for conversation and collaboration among teachers and other contributors.  We look forward to learning more from you!  
            </p>
          </div>
          <img src={celticCross}/>
          <div className='template__welcome-left-bottom'>
            <p>
              <b>Please note: </b>We have been and will continue to offer this curriculum and teacher training for free. We are motivated by the understanding that Catholic education, properly understood, is education for salvation.  It is one of the main methods the Church has for passing on the Faith.
            </p>
          </div>
        </div>
        <div className='template__welcome-right'>
          <p>
            What we provide:
          </p>
          <p>
          The <a>Content</a> is a chronological, Salvation History-based curriculum for grades K-8 that integrates history, literature, and religion and immerses students in the geography, stories, poetry, great speeches, masterpieces of music, art, and architecture, and more from each time period.  Teacher notes and student materials are provided, along with guidance on how to integrate this rich content with teaching the skills of the Trivium and Quadrivium.  Our goal is to help teachers to pass on the Faith, so that our children have a firm hope and a lively trust in God and His unfolding Divine Plan.
          </p>
          <p>
          The <a>Pedagogy</a> page offers time-honored approaches to teaching rooted in the ancient Hebraic and Greek (classical) traditions.  Our goal is to guide teachers to become master teachers.  
          </p>
          <p>
          The <a>Trivium</a> pages provide a PK - 8 curriculum for language arts skills that follows the natural ladders of learning for each subject and is aimed toward student mastery and excellence. Our goal is for students to read insightfully, speak eloquently, think logically, and write beautifully while learning and being formed by the story of salvation.
          </p>
          <p>
          The <a>Quadrivium</a> page includes content, pedagogy, and skills for math, science, art, and music (some TBD). Our goal is for students to see and imitate the beauty of God's created order.  
          </p>
          <p>
          See <a>Leading a Classroom</a> and <a>Leading a School</a> for guidance on culture, assessment, report cards, communication, and teacher evaluations, all of which form one whole seamless cloth of a Catholic, classical school. 
          </p>
          <p>
          For a deeper understanding of the history and philosophy of this education that has been bulwark of the Church for two millennia, see <a>About Catholic Classical Education</a>.
          </p>
          <p>
          We also encourage you to learn more <a>About Us</a> and our work, and <a>Why We Chose Saint Patrick</a> as the patron for our curriculum.*
          </p>
        </div>
      </div>
      <div className='template__welcome-bottom-container'>
        <p>
          * The etymology of the word, <b>curriculum</b>, is “a running, a course of action.”  Our aim is to provide what is needed for teachers and schools to run the course of their educational efforts. We find many are inspired to teach from a Catholic, classical approach but encounter the “Monday Morning Problem” of not having the materials or the training they desire. We pray that you find the help you need here!
        </p>
      </div>
    </div>
    
  )
}

export default welcomeContainer