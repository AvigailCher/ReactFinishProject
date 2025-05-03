import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './componnets/Navbar'; // ייבוא ה-Navbar
import HomePage from './componnets/HomePage';
import ProductList from './componnets/ProductList'; // ייבוא של ה-ProductList
// import { Provider } from 'react-redux';
import ProductDetails from './componnets/ProductDetails';

function App() {
  return (
    
    <BrowserRouter>
      <CustomNavbar /> {/* Navbar יופיע בכל הדפים */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* דף הבית */}
        <Route path="/category/:category" element={<ProductList />} /> 
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

