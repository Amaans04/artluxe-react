import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Shop from './pages/Shop';

function App(){
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/holdalls' element={<ShopCategory category="holdalls"/>}/>
        <Route path='/dailycarry' element={<ShopCategory category="dailycarry"/>}/>
        <Route path='/accessories' element={<ShopCategory category="accessories"/>}/>

        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}
export default App;