import CartItem from '../cartItem/cartItem'
import Summary from '../checkout/summary'
import './Cart.css'
import useCartStore from '../../../store/cartStore'
import { Link } from 'react-router-dom'
import ButtonGeneral from '../../../components/buttonGeneral'

function Cart() {
  const {cartList} = useCartStore()
  return (
    <>
      <div className='cart_title'>
        <h1>CART:  <span>{cartList.length} items</span></h1>
      </div>
      
      <div className='cart_mainContainer'>

        <div className='cart_content'>
          <div className='cart_list'>
            {cartList.map((product, index) => (
              <div key={index}>
                <CartItem 
                  productId={product.id}
                  title={product.title}
                  price={product.price}
                  size={product.size}
                  image={product.thumbnail}
                  amount={product.amount}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='cart_checkout'>
          <Summary />
          <div className='summary_btn'>
          <Link to="/Ecommerce/shoppingCart/checkout">
            <ButtonGeneral title="Procced with Checkout" />
          </Link>
        </div>
        </div>

      </div>
    </>
  )
}

export default Cart
