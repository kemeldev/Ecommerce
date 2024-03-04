import { shoppingCart } from '../../assets/icons'
import { shoestoreLogo } from '../../assets/images'
import './navbar.css'

function Navbar() {

  return (
    <>
      <header className='navbar_mainContainer'>

        <div/>

        
        <div className='navbar_mainLogo'>
          <img src={shoestoreLogo} alt="Company Logo" />
        </div>

        <div className='navbar_SignAndCart'>
          <p>Sign In /</p>
          <div>
            <img src={shoppingCart} alt="shopping cart icon" />
          </div>
        </div>
        
      
      </header>
      <hr />
    </>
  )
}

export default Navbar
