import './App.css'
import Home from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/products/products'
import NotFound from './pages/notFound/notFound'
import Details from './pages/details/details'
import ShoppingCart from './pages/shoppingCart/shoppingCart'
import Checkout from './pages/checkout/checkout'


function App() {

  return (
    <>
      <Routes>
          <Route path='/Ecommerce' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
    </>
  )
}

export default App
