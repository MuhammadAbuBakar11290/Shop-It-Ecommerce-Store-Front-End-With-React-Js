import React from 'react';

import endimages from './images/endimages.jpg';
import './endimage.css';

const EndImage = () => {
  return (
    <>
    <div className='endimage'>
      <img src={endimages} alt="" />
    </div>
    <div className='content-end'>
        <h1>SHOP-IT</h1>
        
    </div>
    <div className='content-pend'>
        <p>"Unlock Infinite Choices at 'Shop It' <br /><br /> Where Ecommerce Dreams Come True!"</p>
    </div>
    <div className='hashtag'>
      <h1>#FASHION-COLLECTIONS</h1>
    </div>
    </>
  )
}

export default EndImage
