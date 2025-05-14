import React from "react";
import { Link } from "react-router-dom";
// import "./Footer.css";
import "../styles/Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="logo">id·us</div>
        <ul>
          <li><a href="#">GIFTCARD</a></li>
          <li><a href="#">טעימים</a></li>
          <li><a href="#">מפת אתר</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>שירות לקוחות</h3>
        <ul>
          <li><a href="#">עזרה מידית</a></li>
          <li><a href="#">משלוחים</a></li>
          <li><a href="#">החזרות והחלפות</a></li>
          <li><a href="#">שאלות ותשובות</a></li>
          <li><a href="#">שירות לקוחות</a></li>
          <li><a href="#">ביטול עסקה</a></li>
          <li><a href="#">החזרה ע\"י שליח</a></li>
          <li><a href="#">איתור הזמנה</a></li>
          <li><a href="#">הצטרפות למועדון הלקוחות</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Noizz</h3>
        <ul>
          <li>
            {/* כפתור קישור לדף אודות */}
            <Link to="/about" className="about-button">אודות</Link>
          </li>
          <li><a href="#">תנאי שימוש</a></li>
          <li><a href="#">מדיניות פרטיות</a></li>
          <li><a href="#">הצהרת נגישות</a></li>
          <li><a href="#">תקנון מועדון לקוחות</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
