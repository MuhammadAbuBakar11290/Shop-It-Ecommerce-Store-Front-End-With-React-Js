import React, { useState } from 'react';
import './CardForm.css';
import Payment from './images/Payment.png';

function Page() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', { cardNumber, cardName, expiry, cvv });
  };

  return (
    <div className="page">
      <div className='Payment-heading'>
        <h1>Payment Form</h1>
      </div>
      <div className="flex-row">
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="label-container">
            <label>
              Card Number:
            </label>
            <label>
              Cardholder Name:
            </label>
            <label>
              Expiry Date:
            </label>
            <label>
              CVV:
            </label>
          </div>
          <div className="input-container">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card Number"
              maxLength="16"
            />
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Cardholder Name"
            />
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              maxLength="5"
            />
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              maxLength="3"
            />
          </div>
          <button type="submit" className="submit-button">Submit Payment</button>
        </form>
        <img src={Payment} alt="" className='Payment-Machine' />
      </div>
    </div>
  );
}

export default Page;
