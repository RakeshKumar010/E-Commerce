import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css'
import SignUp from './components/SignUp'
import PrivateComponents from './components/privateComponents'
import Login from './components/Login'
import Addproduct from './components/Addproduct'
import Product from './components/Product'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponents/>}>
          <Route path='/' element={<Product/>} />
          <Route path='/Addproduct' element={<Addproduct/>} />
          <Route path='/Update' element={<h1>i am update product</h1>} />
          <Route path='/Profile' element={<h1>i am profile</h1>} />
          <Route path='/Logout' element={<h1>i am logout</h1>} />
          
          </Route>
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/LogIn' element={<Login/>} />

        </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  )
}

export default App