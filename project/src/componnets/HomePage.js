// // // // // import React from 'react';
// // // // // // import { BrowserRouter,Routes,Route } from 'react-router-dom';

// // // // // import ImageCarousel from './ImageCarousel';



// // // // // function HomePage() {
// // // // //   return (
// // // // //     <div> 
// // // // //       <ImageCarousel></ImageCarousel> 
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default HomePage;




// // // // import React from 'react';
// // // // import { Container, Row, Col, Image } from 'react-bootstrap';
// // // // import ImageCarousel from './ImageCarousel';
// // // // import '../styles/homepage.css'
// // // // import pic1 from '../images/girls/1/11.png';
// // // // function HomePage() {
// // // //   return (
// // // //     <div style={{ backgroundColor: '#fff', color: '#000' }}>
// // // //       <ImageCarousel />

// // // //       <Container className="my-4">
// // // //         {/* שתי תמונות זו לצד זו */}
// // // //         <Row className="mb-4">
// // // //           <Col md={6}>
// // // //             <Image
// // // //               src={pic1}
// // // //               alt="תמונה 1"
// // // //               fluid
// // // //               rounded
// // // //             />
// // // //           </Col>
// // // //           <Col md={6}>
// // // //             <Image
// // // //               src="https://via.placeholder.com/600x400"
// // // //               alt="תמונה 2"
// // // //               fluid
// // // //               rounded
// // // //             />
// // // //           </Col>
// // // //         </Row>

// // // //         {/* שתי תמונות זו מתחת לזו */}
// // // //         <Row className="mb-4">
// // // //           <Col>
// // // //             <Image
// // // //               src="https://via.placeholder.com/600x400"
// // // //               alt="תמונה 3"
// // // //               fluid
// // // //               rounded
// // // //               className="mb-4"
// // // //             />
// // // //             <Image
// // // //               src="https://via.placeholder.com/600x400"
// // // //               alt="תמונה 4"
// // // //               fluid
// // // //               rounded
// // // //             />
// // // //           </Col>
// // // //         </Row>
// // // //       </Container>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default HomePage;


// // // import React from 'react';
// // // import { Row, Col, Image } from 'react-bootstrap';
// // // import ImageCarousel from './ImageCarousel';
// // // import pic1 from '../images/girls/1/11.png';
// // // function HomePage() {
// // //   return (
// // //     <div style={{ backgroundColor: '#fff', color: '#000' }}>
// // //       <ImageCarousel />

// // //       {/* שתי תמונות זו לצד זו */}
// // //       <Row style={{ margin: 0 }}>
// // //         <Col xs={12} md={6} style={{ padding: 0 }}>
// // //           <Image
// // //             src={pic1}
// // //             alt="תמונה 1"
// // //             fluid
// // //             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// // //           />
// // //         </Col>
// // //         <Col xs={12} md={6} style={{ padding: 0 }}>
// // //           <Image
// // //             src={pic1}
// // //             alt="תמונה 2"
// // //             fluid
// // //             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// // //           />
// // //         </Col>
// // //       </Row>

// // //       {/* גלריית תמונות בשורה מתחת */}
// // //       <Row style={{ margin: 0, padding: '20px 0', gap: 0 }}>
// // //         {['pic1', 'pic1', 'pic1', 'pic1'].map((num, idx) => (
// // //           <Col xs={6} md={3} key={idx} style={{ padding: 0 }}>
// // //             <Image
// // //               src={pic1}
// // //               alt={`תמונה ${num}`}
// // //               fluid
// // //               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// // //             />
// // //           </Col>
// // //         ))}
// // //       </Row>
// // //     </div>
// // //   );
// // // }

// // // export default HomePage;


import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
// import pic1 from '../images/girls/1/11.png';
import club from '../images/club.jpg';
import  girls  from '../images/girls.png';
import  boys  from '../images/boys.png';
// import  girlsSale  from '../images/girlsSale.jpg';
import Footer from './Footer';
function HomePage() {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000' }}>
      <ImageCarousel />

      <Container fluid style={{ padding: '20px' }}>
        {/* שתי תמונות זו לצד זו עם רווח */}
        <Row className="g-3"> {/* g-3 = gap של Bootstrap */}
          <Col xs={12} md={6}>
            <Image
              src={girls}
              alt="תמונה 1"
              fluid
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Col>
          <Col xs={12} md={6}>
            <Image
              src={boys}
              alt="תמונה 2"
              fluid
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Col>
        </Row>

        {/* תמונות נוספות אחת אחרי השנייה */}
        <div style={{ marginTop: '30px' }}>
          {['1', '2', '3'].map((num, idx) => (
            <div key={idx} style={{ marginBottom: '20px' }}>
              <Image
                src={club}
                alt={`תמונה ${num}`}
                fluid
                style={{ width: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          ))}
        </div>
      </Container>
      <Footer/>
    </div>
  );
}

export default HomePage;



// import React from 'react';
// import { Row, Col, Image, Container } from 'react-bootstrap';
// import ImageCarousel from './ImageCarousel';
// import pic1 from '../images/girls/1/11.png';
// import club from '../images/club.jpg'
// function HomePage() {
//   return (
//     <div style={{ backgroundColor: '#fff', color: '#000' }}>
//       {/* שקופית מוקטנת לגובה 300px */}
//       <div style={{ maxHeight: '300px', overflow: 'hidden' }}>
//         <ImageCarousel />
//       </div>

//       <Container fluid style={{ padding: '20px' }}>
//         {/* שתי תמונות קטנות זו לצד זו */}
//         <Row className="g-3">
//           <Col xs={12} md={6}>
//             <Image
//               src={pic1}
//               alt="תמונה 1"
//               fluid
//               style={{
//                 width: '100%',
//                 height: '250px',
//                 objectFit: 'cover',
//                 borderRadius: '8px',
//               }}
//             />
//           </Col>
//           <Col xs={12} md={6}>
//             <Image
//               src={pic1}
//               alt="תמונה 2"
//               fluid
//               style={{
//                 width: '100%',
//                 height: '250px',
//                 objectFit: 'cover',
//                 borderRadius: '8px',
//               }}
//             />
//           </Col>
//         </Row>

//         {/* תמונות נוספות אחת אחרי השנייה – קטנות יותר */}
//         <div style={{ marginTop: '30px' }}>
//           {[1, 2, 3].map((idx) => (
//             <div key={idx} style={{ marginBottom: '20px' }}>
//               <Image
//                 src={pic1}
//                 alt={`תמונה ${idx}`}
//                 fluid
//                 style={{
//                   width: '100%',
//                   height: '200px',
//                   objectFit: 'cover',
//                   borderRadius: '8px',
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default HomePage;



