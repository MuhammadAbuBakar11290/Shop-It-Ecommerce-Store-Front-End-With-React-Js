import React from 'react';
import './footer.css';

import payments from './images/payments.png';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='brand-name'>
        <h1>SHOP IT</h1>
        <p>At Shop It, the customer is at the heart <br />of our unique business model!</p>

      </div>
      <div className='payments'>
        <img src={payments} alt="" />
      </div>
      <div className='shoping1'>
        <h2>SHOPPING</h2>
        <div className='clot'> 

        
        <p>Clothing Store</p>
        </div>
        </div><br />
        <div className='shoping3'>
            <p>Trending Store</p>
        </div>
        <br />
        <div className='shopping2'>
        <p>Acessories</p>
        </div>
        <br />
        <div className='sale'>
        <p>Sales</p>
      </div>
      <div className='shoping-right'>
  <h2>SHOPPING</h2>
  <div className='item1'>
    <p>Contact Us</p>
  </div>
  <div className='item2'>
    <p>Payment Methods</p>
  </div>
  <div className='item3'>
    <p>Delievry</p>
  </div>
  <div className='item4'>
    <p>Returns & Exchange</p>
  </div>
</div>
<div className='News'>
    <h2>NEWSLETTER</h2>
    </div>
    <div className='Newspara'>
    <p>Be the first to know about new arrivals,<br /> look books, sales & promos!</p>
</div>
<div class="copyright">
  <p className='end'>Copyright © 2023-2020 All rights reserved | This template is made with <span class="heart">❤️</span> by M.ABUBAKAR</p>
</div>
    </div>
  )
}

export default Footer
