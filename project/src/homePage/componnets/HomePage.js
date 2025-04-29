import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CustomNavbar from '../../Navbar'; // ייבוא ה-Navbar
// import ImageCarousel from './ImageCarousel'; // ייבוא של מצגת התמונות
import Boys from '../../products/componnets/Boys';
import Babies from '../../products/componnets/Babies';
import Girls from '../../products/componnets/Girls';
import Sale from '../../products/componnets/Sale';
import NewCollection from '../../products/componnets/NewCollection';
import ImageCarousel from '../../ImageCarousel';



function HomePage() {
  return (
    <div> 
      <BrowserRouter>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Boys" element={<Boys />} />
        <Route path="/Girls" element={<Girls />} />
        <Route path="/Babies" element={<Babies />} />
        <Route path="/NewCollection" element={<NewCollection />} />
      </Routes>
      </BrowserRouter>
      <ImageCarousel></ImageCarousel>
     
    </div>
  );
}

export default HomePage;
