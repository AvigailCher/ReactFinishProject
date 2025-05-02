import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Carousel } from 'bootstrap';

import pic1 from '../shkufit/piture1.png';
import pic2 from '../shkufit/picture2.png';
import pic3 from '../shkufit/picture3.png';
import pic4 from '../shkufit/picture4.png';
import pic5 from '../shkufit/picture5.png';

const ImageCarousel = () => {
  useEffect(() => {
    const carouselElement = document.querySelector('#imageCarousel');
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 1000,
        ride: 'carousel'
      });
    }
  }, []);

  const images = [pic1, pic2, pic3, pic4, pic5];

  return (
    <div id="imageCarousel" className="carousel slide">
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={src}
              className="d-block w-100"
              alt={`תמונה ${index + 1}`}
              style={{ height: '100vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h1 style={{ textShadow: '0 0 10px black' }}>הקולקציה החדשה שלנו</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
