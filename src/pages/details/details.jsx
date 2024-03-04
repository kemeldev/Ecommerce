import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Favourites from '../home/favourites/favourites'
import './details.css'
import ShoeDetails from './shoeDetails/shoeDetails'

function Details() {

  return (
    <>
      <Navbar />
      <ShoeDetails />
      <Favourites title={"RECOMMENDED"} />
      <Footer />
    </>
  )
}

export default Details
