import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRegGrinSquintTears } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {id, name, job, image, text} = people[index];

  const handleCheckNumber = number => {
    if(number > people.length - 1) {
      return 0;
    }
    if(number < 0) {
      return people.length -1
    }

    return number;
  };
  
  const handleNextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      return handleCheckNumber(newIndex);
    })
  };

  const handlePrevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      return handleCheckNumber(newIndex)
    })
  };

  const handleRandomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if(randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(handleCheckNumber(randomNumber));
  };

  return( 
  <article className='review' key={id}>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={handlePrevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={handleNextPerson}>
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={handleRandomPerson}>surprise me</button>
  </article>
  )
};

export default Review;
