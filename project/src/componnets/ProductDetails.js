

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';
import '../styles/ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.arr.find((item) => item.id === parseInt(id))
  );

  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);
  const sizes = product.sizes || [4, 5, 6, 7, 8, 10, 12, 14];
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("אנא בחר מידה");
      return;
    }
    const productToCart = {
      ...product,
      selectedSize,
      quantity
    };
    dispatch(addToCart(productToCart));
  };

  if (!product) {
    return <p style={{ textAlign: 'center' }}>המוצר לא נמצא</p>;
  }

  return (
    <div className="product-container" dir="rtl">
      <div className="image-wrapper">
        <div className="main-image-container">
          <img src={selectedImage} alt={product.name} className="main-image" />
          

        </div>
        <div className="side-thumbnails">
          {(product.images || []).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`תמונה ${idx + 1}`}
              className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="details-section">
        <h2>{product.name}</h2>
        <p className="price">₪{product.price}</p>

        <div className="size-section">
          <p>מידה:</p>
          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-section">
          <p>כמות:</p>
          <div className="quantity-controls">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          הוסף לעגלה
        </button>

        <p className="shipping-note">* זמן אספקה עד 5 ימי עסקים</p>
      </div>
    </div>
  );
}

export default ProductDetails;
