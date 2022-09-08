import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetails from './components/routes/ProductDetails'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import { useEffect, useState } from 'react'
import Cart from './components/routes/Cart'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/product.slice'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Footer from './components/shared/Footer'



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
