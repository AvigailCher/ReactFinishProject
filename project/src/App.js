import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './componnets/Navbar'; // ייבוא ה-Navbar
import HomePage from './componnets/HomePage';
import ProductList from './componnets/ProductList'; // ייבוא של ה-ProductList
// import { Provider } from 'react-redux';
import Cart from './componnets/Cart';
import CheckoutPage from './componnets/CheckoutPage';
import ProductDetails from './componnets/ProductDetails';
import ThankYouPage from './componnets/ThankYouPage';
import AboutPage from './componnets/AboutPage';
function App() {
  return (
    
    <BrowserRouter>
      <CustomNavbar /> {/* Navbar יופיע בכל הדפים */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<ProductList />} /> 
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/about" element={<AboutPage />} />




      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

