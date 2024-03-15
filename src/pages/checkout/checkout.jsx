import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'
import ShippingAddress from './address/shippingAddress'
import './checkout.css'
import OrderSummary from './orderSummary/orderSummary'
import Payment from './payment/payment'

export function Checkout () {
  return (
    <>
      <Navbar />
      <Link to="/shoppingCart">
          <h3 className='checkout_back'>
            Go Back
          </h3>
      </Link>
      <div className='checkoutPage'>
        <ShippingAddress />
        <div className='payData'>
          <OrderSummary />
          <Payment />
        </div>
      </div>
      

    </>
  )
}

export default Checkout