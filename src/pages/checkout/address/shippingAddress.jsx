import { useState } from 'react';
import './shippingAddress.css'

export function ShippingAddress () {
    const [billingAddress, setBillingAddress] = useState({
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    });
  
    const [shippingAddress, setShippingAddress] = useState({
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    });
  
    const [sameAsBilling, setSameAsBilling] = useState(false); 

    const handleBillingChange = (e) => {
      const { name, value } = e.target;
      setBillingAddress({ ...billingAddress, [name]: value });
    };
  
    const handleShippingChange = (e) => {
      const { name, value } = e.target;
      setShippingAddress({ ...shippingAddress, [name]: value });
    };
  return (
    <>
      <div className='shipping_mainContainer'>
        <h2>BILLING ADDRESS</h2>
        <form action="*">
          <label htmlFor="billingName">Name:</label>
          <input
            type="text"
            name="name"
            id="billingName"
            value={billingAddress.name}
            onChange={handleBillingChange}
          />
          <label htmlFor="billingStreet">Street:</label>
          <input
            type="text"
            name="street"
            id="billingStreet"
            value={billingAddress.street}
            onChange={handleBillingChange}
          />
          <label htmlFor="billingCity">City:</label>
          <input
            type="text"
            name="city"
            id="billingCity"
            value={billingAddress.city}
            onChange={handleBillingChange}
          />
          <label htmlFor="billingState">State:</label>
          <input
            type="text"
            name="state"
            id="billingState"
            value={billingAddress.state}
            onChange={handleBillingChange}
          />
          <label htmlFor="billingZip">Zip:</label>
          <input
            type="text"
            name="zip"
            id="billingZip"
            value={billingAddress.zip}
            onChange={handleBillingChange}
          />
        </form>

        <h2>SHIPPING ADDRESS </h2>
        <div className='shipping_sameAs'>
          <label htmlFor="sameAs">Same as Billing Address:   </label>
          <input 
            type="checkbox" 
            id="sameAs" 
            name="sameAs" 
            checked={sameAsBilling} 
            onChange={(e) => setSameAsBilling(e.target.checked)} 
          />
        </div>
        
          <form action="*">
            <label htmlFor="shippingName">Name:</label>
            <input
              type="text"
              name="name"
              id="shippingName"
              value={shippingAddress.name}
              onChange={handleShippingChange}
            />
            <label htmlFor="shippingStreet">Street:</label>
            <input
              type="text"
              name="street"
              id="shippingStreet"
              value={shippingAddress.street}
              onChange={handleShippingChange}
            />
            <label htmlFor="shippingCity">City:</label>
            <input
              type="text"
              name="city"
              id="shippingCity"
              value={shippingAddress.city}
              onChange={handleShippingChange}
            />
            <label htmlFor="shippingState">State:</label>
            <input
              type="text"
              name="state"
              id="shippingState"
              value={shippingAddress.state}
              onChange={handleShippingChange}
            />
            <label htmlFor="shippingZip">Zip:</label>
            <input
              type="text"
              name="zip"
              id="shippingZip"
              value={shippingAddress.zip}
              onChange={handleShippingChange}
            />
          </form>
        
      </div>
    </>
  )
}

export default ShippingAddress