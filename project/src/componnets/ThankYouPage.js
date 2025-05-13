import React from 'react';
import '../styles/CheckoutPage.css';
import { Link } from 'react-router-dom';

function ThankYouPage() {
  return (
    <div className="checkout-container">
      <h2 className="checkout-title">תודה על ההזמנה!</h2>
      <p>ההזמנה שלך התקבלה בהצלחה ואנו נעדכן אותך כשהיא תצא למשלוח 📦</p>
      <Link to="/" className="checkout-button" style={{ textAlign: 'center', display: 'block', marginTop: '2rem' }}>
        חזרה לדף הבית
      </Link>
    </div>
  );
}

export default ThankYouPage;
