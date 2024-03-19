import { Link, useLocation } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Favourites from '../home/favourites/favourites'
import './details.css'
import ShoeDetails from './shoeDetails/shoeDetails'
import { useEffect } from 'react'
import { shoppingCart } from '../../assets/icons'
import useCartStore from '../../store/cartStore'
import useSignIn from '../../store/signInStore'
import { useAuth } from '../../context/AuthContext'

function Details() {
  const { state } = useLocation()
  // const { id } = useParams()
  // const numericId = parseInt(id)
  const {cartList, resetSizeError} = useCartStore()
  const {setSignInOpen} = useSignIn()
  const {loggedUser, logout} = useAuth()



  useEffect(() => {
    resetSizeError()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state])

  return (
    <>
      <div className='details_navbar'>
      <header className='navbar_mainContainer navdetails'>
        <Link to="/Ecommerce/products">
          <h3 className='details_back'>
            Go Back
          </h3>
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
      </div>

      <ShoeDetails 
        details={state}
      />
      <Favourites title={"RECOMMENDED"} />
      <Footer />
    </>
  )
}

export default Details
