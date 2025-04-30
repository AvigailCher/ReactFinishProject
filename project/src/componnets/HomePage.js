import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import ImageCarousel from './ImageCarousel';



function HomePage() {
  return (
    <div> 
      <ImageCarousel></ImageCarousel> 
    </div>
  );
}

export default HomePage;
