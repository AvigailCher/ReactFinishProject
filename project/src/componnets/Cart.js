
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutPage from './CheckoutPage';
import { useNavigate } from 'react-router-dom';


const updateQuantity = (itemId, quantity) => ({
  type: 'UPDATE_ITEM_QUANTITY',
  payload: { itemId, quantity },
});

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart || []);
  const navigate = useNavigate();
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity(id, newQuantity));
  };

  const totalPrice = cartItems?.reduce?.((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div style={{ padding: '2rem', direction: 'rtl' }}>
      <h1 style={{ textAlign: 'center' }}>סל</h1>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>הסל ריק</p>
      ) : (
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between' }}>
          {/* עמודת פריטים */}
          <div style={{ flex: 2 }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{ borderBottom: '1px solid #ccc', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>מחיר ליחידה: {item.price}₪</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      style={{ padding: '0.5rem', fontSize: '1rem' }}
                    >−</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      style={{ padding: '0.5rem', fontSize: '1rem' }}
                    >+</button>
                  </div>
                  <p>סה"כ: {(item.price * item.quantity).toFixed(2)} ₪</p>
                </div>
              </div>
            ))}
          </div>

          {/* עמודת סיכום */}
          <div style={{ flex: 1, border: '1px solid #000', padding: '1rem', borderRadius: '8px' }}>
            <h2>סיכום הזמנה</h2>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="coupon">קוד קופון:</label>
              <input type="text" id="coupon" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
            </div>
            <hr />
            <p>סה"כ לתשלום: <strong>{totalPrice.toFixed(2)} ₪</strong></p>
            <button  onClick={() => navigate('/checkout')} style={{ width: '100%', padding: '1rem', marginTop: '1rem', backgroundColor: '#000', color: '#fff', border: 'none' }}>מעבר לתשלום</button>
            <button style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', backgroundColor: '#000', color: '#fff', border: 'none' }}>המשך בקניות</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;