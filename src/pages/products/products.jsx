import { useEffect } from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import List from './list/list'
import './products.css'

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <List />
      <Footer />
    </>
  )
}

export default Products
