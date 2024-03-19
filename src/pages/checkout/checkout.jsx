import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'
import ShippingAddress from './address/shippingAddress'
import './checkout.css'
import Payment from './payment/payment'
import Summary from '../shoppingCart/checkout/summary'

export function Checkout () {
  return (
    <>
      <Navbar />
      <Link to="/Ecommerce/shoppingCart">
          <h3 className='checkout_back'>
            Go Back
          </h3>
      </Link>
      <div className='checkoutPage'>
        <ShippingAddress />
        <div className='payData'>
          <Summary />
          <Payment />
        </div>
      </div>
      

    </>
  )
}

export default Checkout