// import React from "react";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Container, Badge } from "react-bootstrap";
// import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
// import logo from '../images/logo_noizz_1.png';

// function CustomNavbar() {
//   return (
//     <Navbar bg="white" expand="lg" className="border-bottom py-3">
//       <Container className="justify-content-between">

//         {/* לוגו */}
//         <Navbar.Brand as={Link} to="/" className="d-flex justify-content-start">
//           <img src={logo} alt="NOIZZ" height="30" />
//         </Navbar.Brand>

//         {/* כפתור המבורגר למובייל */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none" />

//         {/* ניווט מרכזי */}
//         <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-center">
//           <Nav className="mx-auto gap-4 text-center">
//             {/* כל אחד מהקישורים עובר לנתיב דינאמי עם שם הקטגוריה */}
//             <Nav.Link as={Link} to="/category/Sale" className="text-danger fw-bold">SALE</Nav.Link>
//             <Nav.Link as={Link} to="/category/Accessories">אקססוריז</Nav.Link>
//             <Nav.Link as={Link} to="/category/Shoes">נעליים</Nav.Link>
//             <Nav.Link as={Link} to="/category/Girls">בנות</Nav.Link>
//             <Nav.Link as={Link} to="/category/Boys">בנים</Nav.Link>
//             <Nav.Link as={Link} to="/category/NewCollection" className="fw-bold">New Collection</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>

//         {/* אייקונים עם קישורים */}
//         <div className="d-none d-lg-flex gap-3 align-items-center">
//           <Link to="/login" className="text-dark"><FaUser /></Link>
//           <Link to="/search" className="text-dark"><FaSearch /></Link>
//           <Link to="/favorites" className="text-dark"><FaHeart /></Link>
//           <Link to="/cart" className="text-dark position-relative">
//             <FaShoppingCart />
//             <Badge bg="warning" pill className="position-absolute top-0 start-100 translate-middle">2</Badge>
//           </Link>
//         </div>

//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import logo from '../images/logo_noizz_1.png';

function CustomNavbar({ cartItemCount = 0 }) {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom py-3 sticky-top custom-navbar">
      <Container className="justify-content-between">

        <Navbar.Brand as={Link} to="/" className="d-flex justify-content-start">
          <img src={logo} alt="NOIZZ" height="30" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none" />

        <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-center">
          <Nav className="mx-auto gap-4 text-center">
            <Nav.Link as={Link} to="/category/Sale" className="text-danger fw-bold">SALE</Nav.Link>
            <Nav.Link as={Link} to="/category/Accessories">אקססוריז</Nav.Link>
            <Nav.Link as={Link} to="/category/Shoes">נעליים</Nav.Link>
            <Nav.Link as={Link} to="/category/Girls">בנות</Nav.Link>
            <Nav.Link as={Link} to="/category/Boys">בנים</Nav.Link>
            <Nav.Link as={Link} to="/category/NewCollection" className="fw-bold">New Collection</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-none d-lg-flex gap-3 align-items-center">
          <Link to="/login" className="text-dark"><FaUser /></Link>
          <Link to="/search" className="text-dark"><FaSearch /></Link>
          <Link to="/favorites" className="text-dark"><FaHeart /></Link>
          <Link to="/cart" className="text-dark position-relative">
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <Badge bg="warning" pill className="position-absolute top-0 start-100 translate-middle">
                {cartItemCount}
              </Badge>
            )}
          </Link>
        </div>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
