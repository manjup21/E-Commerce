import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
//import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
          <Route path='/login' element={<LoginScreen/>} ></Route>
          <Route path='/register' element={<RegisterScreen/>} ></Route>
          <Route path='/profile' element={<ProfileScreen/>} ></Route>
          <Route path='/product/:id' element={<ProductScreen/>} ></Route>
          <Route path='/cart/:id' element={<CartScreen/>} ></Route>
          <Route path='/cart' element={<CartScreen/>} ></Route>
          <Route path='/' element={<Homescreen/>} ></Route>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
