import React, { useState } from 'react';
import propTypes from 'prop-types'
import './carousel.css';


const carousel = ({srcLinks})=>{
    const [currentIndex, setCurrentIndex]=useState(0);

    const nextSlide=()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % srcLinks.length)
    };
const preveSlide=()=>{
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? srcLinks.length - 1 : prevIndex - 1
    );
}

return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev">Prev</button>
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {srcLinks.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button next">Next</button>
    </div>
  );
};

Carousel.propTypes = {
  srcLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;