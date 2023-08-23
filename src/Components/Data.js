import React from 'react';
import './Data.css';

const Data = ({ rating,imge,price,tittle }) => {
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;
    const starCount = 5;
    const stars = [];

    for (let i = 1; i <= starCount; i++) {
      if (i <= fullStars) {
        stars.push(<span key={`full-star-${i}`} className='star'>&#9733;</span>);
      } else if (i === fullStars + 1 && decimalPart >= 0.25) {
        stars.push(<span key={`half-star-${i}`} className='star half'>&#9733;</span>);
      } else {
        stars.push(<span key={`empty-star-${i}`} className='star'>&#9734;</span>);
      }
    }

    return stars;
  };

  return (
    <div className='store'>
      <img src={imge} className='imagesss' />
      <p>{tittle}</p>
      <p>{price}</p>
      <div className='rating'>
        {generateStars(rating)}
      </div>
      
    </div>
  );
};

export default Data;
