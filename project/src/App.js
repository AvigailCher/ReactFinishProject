// import React from 'react';
// import './App.css';
// import HomePage from './componnets/HomePage';

// function App() {
//   return (
//     <BrowserRouter>
//       <CustomNavbar></CustomNavbar>
//       <Routes>
//         {/* <Route path="/Sale" element={<Sale />} />
//         <Route path="/Boys" element={<Boys />} />
//         <Route path="/Girls" element={<Girls />} />
//         <Route path="/Babies" element={<Babies />} />
//         <Route path="/NewCollection" element={<NewCollection />} /> */}
//      <Route path="/category/:category" element={<ProductList />} />
//       </Routes>
//       <HomePage></HomePage>
//       </BrowserRouter>
  
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './componnets/Navbar'; // ייבוא ה-Navbar
import HomePage from './componnets/HomePage';
// import ProductList from './componnets/ProductList'; // ייבוא של ה-ProductList

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar /> {/* Navbar יופיע בכל הדפים */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* דף הבית */}
        {/* <Route path="/category/:category" element={<ProductList />} /> נתיב דינאמי עבור כל קטגוריה */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

