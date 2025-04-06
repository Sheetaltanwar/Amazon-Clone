import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { HomeBanner } from './Screen/HomeScreen/HomeBanner/HomeBanner.jsX'
import { HomeScreen } from './Screen/HomeScreen'
import { Footer } from './components/Footera/Footer'
import  Product  from './Screen/products/Product'
import  Cart  from './Screen/cart/Cart'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}></Route>
        <Route path='/product'  element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App