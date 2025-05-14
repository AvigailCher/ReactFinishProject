import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
import club from '../images/club.jpg';
import  girls  from '../images/girls.png';
import  boys  from '../images/boys.png';
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



