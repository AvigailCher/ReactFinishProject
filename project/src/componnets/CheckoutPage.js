// // import React, { useState } from 'react';
// // import { useSelector } from 'react-redux';

// // function CheckoutPage() {
// //     const products = useSelector((state) => state.cart.cart || []);

// //   const [form, setForm] = useState({
// //     fullName: '',
// //     address: '',
// //     city: '',
// //     phone: '',
// //     paymentMethod: 'credit',
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert('התשלום התקבל! תודה על ההזמנה 🎉');
// //     // כאן אפשר להוסיף שליחה לשרת או ניתוב לעמוד תודה
// //   };

// //   const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

// //   return (
// //     <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
// //       <h2>דף תשלום</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>שם מלא:</label>
// //           <input name="fullName" value={form.fullName} onChange={handleChange} required />
// //         </div>
// //         <div>
// //           <label>כתובת:</label>
// //           <input name="address" value={form.address} onChange={handleChange} required />
// //         </div>
// //         <div>
// //           <label>עיר:</label>
// //           <input name="city" value={form.city} onChange={handleChange} required />
// //         </div>
// //         <div>
// //           <label>טלפון:</label>
// //           <input name="phone" value={form.phone} onChange={handleChange} required />
// //         </div>
// //         <div>
// //           <label>אמצעי תשלום:</label>
// //           <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
// //             <option value="credit">כרטיס אשראי</option>
// //             <option value="paypal">PayPal</option>
// //             <option value="cash">מזומן בשליח</option>
// //           </select>
// //         </div>
// //         <hr />
// //         <h3>סיכום הזמנה:</h3>
// //         {products.map((item, i) => (
// //           <div key={i}>
// //             <span>{item.name} - ₪{item.price}</span>
// //           </div>
// //         ))}
// //         <strong>סה"כ לתשלום: ₪{totalPrice.toFixed(2)}</strong>
// //         <br /><br />
// //         <button type="submit">בצע תשלום</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default CheckoutPage;
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import '../styles/CheckoutPage.css';

// function CheckoutPage() {
//   const products = useSelector((state) => state.cart.cart || []);

//   const [form, setForm] = useState({
//     fullName: '',
//     address: '',
//     city: '',
//     phone: '',
//     paymentMethod: 'credit',
//     cardNumber: '',
//     expiry: '',
//     cvv: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('התשלום התקבל! תודה על ההזמנה 🎉');
//   };

//   const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="checkout-container">
//       <h2 className="checkout-title">דף תשלום</h2>
//       <form onSubmit={handleSubmit} className="checkout-form">
//         <label>שם מלא:</label>
//         <input name="fullName" value={form.fullName} onChange={handleChange} required />

//         <label>כתובת:</label>
//         <input name="address" value={form.address} onChange={handleChange} required />

//         <label>עיר:</label>
//         <input name="city" value={form.city} onChange={handleChange} required />

//         <label>טלפון:</label>
//         <input name="phone" value={form.phone} onChange={handleChange} required />

//         <label>אמצעי תשלום:</label>
//         <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
//           <option value="credit">כרטיס אשראי</option>
//           <option value="paypal">PayPal</option>
//           <option value="cash">מזומן בשליח</option>
//         </select>

//         {form.paymentMethod === 'credit' && (
//           <div className="credit-fields">
//             <label>מספר כרטיס:</label>
//             <input name="cardNumber" value={form.cardNumber} onChange={handleChange} required />

//             <label>תוקף:</label>
//             <input name="expiry" value={form.expiry} onChange={handleChange} required placeholder="MM/YY" />

//             <label>CVV:</label>
//             <input name="cvv" value={form.cvv} onChange={handleChange} required />
//           </div>
//         )}

//         <hr />
//         <h3>סיכום הזמנה:</h3>
//         {products.map((item, i) => (
//           <div key={i}>
//             <span>{item.name} - ₪{item.price}</span>
//           </div>
//         ))}
//         <strong>סה"כ לתשלום: ₪{totalPrice.toFixed(2)}</strong>

//         <button type="submit" className="checkout-button">בצע תשלום</button>
//       </form>
//     </div>
//   );
// }

// export default CheckoutPage;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css';

function CheckoutPage() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.cart || []);

  const [form, setForm] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: '',
    paymentMethod: 'credit',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  const baseTotal = products.reduce((sum, item) => sum + item.price, 0);
  const shippingCost = baseTotal < 200 ? 20 : 0;
  const totalPrice = baseTotal + shippingCost;

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">דף תשלום</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>שם מלא:</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required />

        <label>כתובת:</label>
        <input name="address" value={form.address} onChange={handleChange} required />

        <label>עיר:</label>
        <input name="city" value={form.city} onChange={handleChange} required />

        <label>טלפון:</label>
        <input name="phone" value={form.phone} onChange={handleChange} required />

        <label>אמצעי תשלום:</label>
        <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
          <option value="credit">כרטיס אשראי</option>
          <option value="paypal">PayPal</option>
          <option value="cash">מזומן בשליח</option>
        </select>

        {form.paymentMethod === 'credit' && (
          <div className="credit-fields">
            <label>מספר כרטיס:</label>
            <input name="cardNumber" value={form.cardNumber} onChange={handleChange} required />

            <label>תוקף:</label>
            <input name="expiry" value={form.expiry} onChange={handleChange} required placeholder="MM/YY" />

            <label>CVV:</label>
            <input name="cvv" value={form.cvv} onChange={handleChange} required />
          </div>
        )}

        <hr />
        <h3>סיכום הזמנה:</h3>
        {products.map((item, i) => (
          <div key={i}>
            <span>{item.name} - ₪{item.price}</span>
          </div>
        ))}

        {shippingCost > 0 && (
          <p style={{ color: 'red', marginTop: '1rem' }}>
            הזמנה מתחת ל־₪200 – תוספת משלוח: ₪20
          </p>
        )}

        <strong>סה"כ לתשלום: ₪{totalPrice.toFixed(2)}</strong>

        <button type="submit" className="checkout-button">בצע תשלום</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
