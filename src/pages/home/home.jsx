import './home.css'
import Brands from './brands/brands'
import Categories from './categories/categories'
import Favourites from './favourites/favourites'
import Hero from './hero/hero'
import Options from './options/options'
import Special from './special/special'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Favourites title={"COMMUNITY FAVOURITES"} />
      <Brands />
      <Options />
      <Special />
      <Footer />
    </>
  )
}

export default Home
