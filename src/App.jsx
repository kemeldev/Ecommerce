import './App.css'
import Home from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/products/products'
import NotFound from './pages/notFound/notFound'
import Details from './pages/details/details'
import ShoppingCart from './pages/shoppingCart/shoppingCart'


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/details' element={<Details />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>
    </>
  )
}

export default App
