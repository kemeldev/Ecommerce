import CartItem from '../cartItem/cartItem'
import Summary from '../checkout/summary'
import './Cart.css'
import useCartStore from '../../../store/cartStore'

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
                  title={product.title}
                  price={product.price}
                  size={product.size}
                  image={product.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='cart_checkout'>
          <Summary />
        </div>

      </div>
    </>
  )
}

export default Cart
