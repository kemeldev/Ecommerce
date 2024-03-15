import './home.css'
import Brands from './brands/brands'
import Categories from './categories/categories'
import Favourites from './favourites/favourites'
import Hero from './hero/hero'
import Special from './special/special'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Favourites title={"COMMUNITY FAVOURITES"} />
      <Brands />
      <Special />
      <Footer />
    </>
  )
}

export default Home
