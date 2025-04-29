import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import pic1 from './shkufit/piture1.png'
import pic2 from './shkufit/picture2.png'
import pic3 from './shkufit/picture3.png'
import pic4 from './shkufit/picture4.png'
import pic5 from './shkufit/picture5.png'
function ImageCarousel() {
  // הגדרות ה-Slick Carousel
  const settings = {
    dots: true, // הראה נקודות ניווט
    infinite: true, // חזרה על המצגת
    speed: 500, // מהירות המעבר בין התמונות
    slidesToShow: 1, // מספר התמונות המוצגות בו זמנית
    slidesToScroll: 1, // מספר התמונות שמתגלגלות בכל פעם
    autoplay: true, // הפעלת אוטומטית
    autoplaySpeed: 2000, // קצב המעבר בין התמונות
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">הכירו את הקולקציה החדשה שלנו!</h2>
      <Slider {...settings}>
        <div>
          <img src={pic1} alt="Kids Clothing 1" className="w-100" />
        </div>
        <div>
          <img src={pic2} alt="Kids Clothing 2" className="w-100" />
        </div>
        <div>
          <img src={pic3} alt="Kids Clothing 3" className="w-100" />
        </div>
        <div>
          <img src={pic4} alt="Kids Clothing 4" className="w-100" />
        </div>
        <div>
          <img src={pic5} alt="Kids Clothing 5" className="w-100" />
        </div>
        {/* הוסף כאן עוד תמונות אם תרצי */}
      </Slider>
    </Container>
  );
}

export default ImageCarousel;
