import CartItem from '../cartItem/cartItem'
import Checkout from '../checkout/checkout'
import './Cart.css'

function Cart() {

  return (
    <>
      
      <h1>CART <span>2 Selected Items</span></h1>
      <div className='cart_mainContainer'>

        <div className='cart_content'>
          <div className='cart_list'>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>

        <div className='cart_checkout'>
          <Checkout />
        </div>

      </div>
    </>
  )
}

export default Cart
