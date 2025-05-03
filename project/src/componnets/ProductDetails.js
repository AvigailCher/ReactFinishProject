import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ProductDetails() {
  const { id } = useParams();
  const products = useSelector(state => state.arr);
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  if (!product) return <p>מוצר לא נמצא</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.txt}</p>
      <p>מחיר: {product.price} ₪</p>
      <p>משלוח: {product.send}</p>

      <label htmlFor="size">בחרי מידה:</label>
      <select id="size" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="">מידה</option>
        <option value="0-3">0-3 חודשים</option>
        <option value="3-6">3-6 חודשים</option>
        <option value="6-9">6-9 חודשים</option>
        <option value="9-12">9-12 חודשים</option>
        <option value="12-18">12-18 חודשים</option>
        <option value="18-24">18-24 חודשים</option>
        <option value="2T">2 שנים</option>
        <option value="3T">3 שנים</option>
        <option value="4T">4 שנים</option>
        <option value="5-6">5-6</option>
        <option value="7-8">7-8</option>
        <option value="9-10">9-10</option>
        <option value="11-12">11-12</option>
</select>

      <label>צבע:</label>
      <select><option>כחול</option><option>אדום</option><option>שחור</option></select>

      <label>כמות:</label>
      <input type="number" min="1" defaultValue="1" />

      <button>הוספה לסל</button>
    </div>
  );
}

export default ProductDetails;
