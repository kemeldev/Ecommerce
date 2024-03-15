import { useState } from 'react';
import { mastercard, paypal, visa } from '../../../assets/icons'
import './payment.css'
import ButtonGeneral from '../../../components/buttonGeneral';

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
        <h2>PAYMENT</h2>
        <p>Choose a payment method</p>
        <div className='payment_method'>
          <img src={visa} alt="visa logo" />
          <img src={mastercard} alt="mastercard logo" />
          <img src={paypal} alt="paypal logo" />
        </div>

        <form onSubmit={handlePaymentSubmit}>
          <label htmlFor="cardNumber">Card number</label>
          <input
            className='payment_cardNumber'
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
            {Array.from({ length: 12 }, (_, i) => {
              const monthIndex = i + 1;
              const monthName = new Date(2022, i).toLocaleString('default', { month: 'long' });
              return (
                <option key={monthIndex} value={monthIndex}>
                  {monthName}
                </option>
              );
            })}
          </select>

          <label htmlFor="expirationYear">Expiration year</label>
          <select
            id="expirationYear"
            value={expirationYear}
            onChange={(e) => setExpirationYear(e.target.value)}
            required
          >
            {Array.from({ length: 10 }, (_, i) => {
              const year = new Date().getFullYear() + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>

          <label htmlFor="cvs">CVS</label>
          <input
            className='payment_cardNumber'
            type="text"
            id="cvs"
            value={cvs}
            onChange={(e) => setCvs(e.target.value)}
            required
          />

        </form>
        <div className='payment_payBtn'>
        <ButtonGeneral title="Procceed with payment" />
        </div>

        <h4>
          We´re currently working to implement this feature
        </h4>

      </div>
    </>
  );
}

export default Payment