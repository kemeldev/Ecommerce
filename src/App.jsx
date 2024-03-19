import './App.css'
import Home from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/products/products'
import NotFound from './pages/notFound/notFound'
import Details from './pages/details/details'
import ShoppingCart from './pages/shoppingCart/shoppingCart'
import Checkout from './pages/checkout/checkout'
import SignIn from './components/signIn/signIn'
import Register from './components/register/register'
import AdminPage from './pages/admin/adminPage'
import ProtectedRoute from './context/ProtectedRoute'
import { useState } from 'react'


function App() {

  return (
    <>
      <SignIn />
      <Register />
      <Routes>
          <Route path='/Ecommerce/' element={<Home />} />
          <Route path='/Ecommerce/products' element={<Products />} />
          <Route path='/Ecommerce/products/details/:id' element={<Details />} />
          <Route path='/Ecommerce/shoppingCart' element={<ShoppingCart />} />
          <Route path='/Ecommerce/shoppingCart/checkout' element={<Checkout />} />
          <Route path='/Ecommerce/adminDashboard' element={<AdminPage />} />
          <Route path='/*' element={<NotFound />} />
      </Routes>

          {/* <ProtectedRoute path="/admin" element={<AdminPage />} /> */}
    </>
  )
}

export default App
