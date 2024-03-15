import { Link } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Cart from './cart/Cart'
import './shoppingCart.css'
import useCartStore from '../../store/cartStore'
import { useEffect } from 'react'

function ShoppingCart() {
  const {resetNotifications} = useCartStore()

  useEffect(()=>{
    resetNotifications()
  }, [])

  return (
    <>
      <Link to="/products">
          <h3 className='checkout_back'>
            Go Back
          </h3>
      </Link>
      <Navbar />
      <Cart/>
      <Footer />
    </>
  )
}

export default ShoppingCart
