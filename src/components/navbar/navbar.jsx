import { Link } from 'react-router-dom'
import { shoppingCart } from '../../assets/icons'
import { shoestoreLogo } from '../../assets/images'
import './navbar.css'
import useCartStore from '../../store/cartStore'
import useSignIn from '../../store/signInStore'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const {cartList} = useCartStore()
  const {setSignInOpen} = useSignIn()
  const {loggedUser, logout} = useAuth()

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

          {loggedUser ? 
            <div style={{display: "flex"}}>
              <p>{loggedUser} / </p>
              <p onClick={()=> logout()}>Log Out /</p> 
            </div> 
            : 
            <p onClick={()=> setSignInOpen()}>Sign In /</p>
          }


          <Link to="/Ecommerce/shoppingCart">
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
