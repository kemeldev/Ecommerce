import { Link } from 'react-router-dom'
import { shoppingCart } from '../../assets/icons'
import { shoestoreLogo } from '../../assets/images'
import './navbar.css'
import useCartStore from '../../store/cartStore'

function Navbar() {
  const {cartList} = useCartStore()

  return (
    <>
      <header className='navbar_mainContainer'>

        <div/>

        <Link to="/Ecommerce">
          <div className='navbar_mainLogo'>
            <img src={shoestoreLogo} alt="Company Logo" />
          </div>
        </Link>

        <div className='navbar_SignAndCart'>
          <p>Sign In /</p>
          <Link to="/shoppingCart">
          <div className='navbar_shoppingCartIcon'>
            <img src={shoppingCart} alt="shopping cart icon" />
            <div className='navbar_notification'>
             {cartList.length}
            </div>
          </div>
          </Link> 
          
        </div>
        
      
      </header>
      <hr />
    </>
  )
}

export default Navbar
