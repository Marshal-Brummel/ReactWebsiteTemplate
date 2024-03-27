/**import React from 'react';
import { useState } from 'react';
import './accordian.css';

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }
  return (
    <div className='accordian'>
      {data.map((item, i) => (
        <div className='item'>
          <div className='title' onClick={() => toggle(i)}>
            <h2>{item.question}</h2>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={ selected === i ? 'content show' : 'content'}>
            {item.answer}
            </div>
        </div>
      ))}
    </div>
  )
}**/

import React from "react";
import { useState, useCallback } from 'react';
import './accordianSection.css';

export const AccordionSection = ({ section }) => {

  const useOpenController = (initialState) => {
    const [isOpen, setOpenState] = useState(initialState);
  
    const toggle = useCallback(() => {
      setOpenState((state) => !state);
    }, [setOpenState]);
  
    return { isOpen, toggle };
  }

  const { isOpen, toggle } = useOpenController(false);
  console.log(section);
  return (
      <div className="accordion-container">
        <ExpendableColumn
          question={section.question}
          isOpen={isOpen}
          toggle={toggle}
        />
        {isOpen && <TextSection text={section.answer} />}
        <div className="underline"></div>
      </div>
  );
};

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className="column-container" onClick={toggle}>
      <div className="column-text">{question}</div>
      <button className="expendable-button">
        <span
          className="material-symbols-outlined"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        >
          expand_more
        </span>
      </button>
    </div>
  );
};

export const TextSection = ({ text }) => {
  return (
    <div className="text-container">
      <div>{text}</div>
    </div>
  );
};

export default AccordionSection