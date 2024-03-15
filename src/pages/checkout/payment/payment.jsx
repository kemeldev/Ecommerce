import { useState } from 'react';
import { mastercard, paypal, visa } from '../../../assets/icons'
import './payment.css'

export function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvs, setCvs] = useState('');

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic for handling the payment
    // For example, sending the payment details to a server
    console.log('Payment submitted');
  };

  return (
    <>
      <div className='payment_mainContainer'>
        <h2>Payment</h2>
        <p>Choose a payment method</p>
        <div>
          <img src={visa} alt="visa logo" />
          <img src={mastercard} alt="mastercard logo" />
          <img src={paypal} alt="paypal logo" />
        </div>

        <form onSubmit={handlePaymentSubmit}>
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          <label htmlFor="expirationMonth">Expiration month</label>
          <select
            id="expirationMonth"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
            required
          >
            <option value="">Select Month</option>
            {/* Add options for months */}
          </select>

          <label htmlFor="expirationYear">Expiration year</label>
          <select
            id="expirationYear"
            value={expirationYear}
            onChange={(e) => setExpirationYear(e.target.value)}
            required
          >
            <option value="">Select Year</option>
            {/* Add options for years */}
          </select>

          <label htmlFor="cvs">CVS</label>
          <input
            type="text"
            id="cvs"
            value={cvs}
            onChange={(e) => setCvs(e.target.value)}
            required
          />

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </>
  );
}

export default Payment