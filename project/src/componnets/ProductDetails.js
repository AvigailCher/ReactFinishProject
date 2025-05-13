// // // import React, { useState } from 'react';
// // // import '../styles/ProductDetails.css';
// // // import Cart from './Cart';
// // // const ProductDetails = () => {
// // //   const [selectedColor, setSelectedColor] = useState('שחור');
// // //   const [selectedSize, setSelectedSize] = useState(null);
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [mainImage, setMainImage] = useState('/images/pants1.jpg'); // שנה בהתאם

// // //   const colors = [
// // //     { name: 'שחור', value: '#000' },
// // //     { name: 'אפור בהיר', value: '#ddd' },
// // //   ];

// // //   const images = [
// // //     '',
// // //     '/images/girls.png',
    
// // //   ];

// // //   return (
// // //     <div className="product-container" dir="rtl">
// // //       <div className="image-section">
// // //         <img src={mainImage} alt="main" className="main-image" />
// // //         <div className="thumbnails">
// // //           {images.map((img, i) => (
// // //             <img
// // //               key={i}
// // //               src={img}
// // //               alt={`thumb-${i}`}
// // //               className={`thumbnail ${mainImage === img ? 'active' : ''}`}
// // //               onClick={() => setMainImage(img)}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="details-section">
// // //         <h2>מכנסי ברמודה בסגנון זמ"ח ילד</h2>
// // //         <p className="price">₪139.90 <span className="new-label">NEW!</span></p>

// // //         <div className="color-selector">
// // //           <span>צבע: {selectedColor}</span>
// // //           <div className="colors">
// // //             {colors.map((color, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`color-circle ${selectedColor === color.name ? 'selected' : ''}`}
// // //                 style={{ backgroundColor: color.value }}
// // //                 onClick={() => setSelectedColor(color.name)}
// // //               ></div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="size-selector">
// // //           <span>מידה:</span>
// // //           <div className="sizes">
// // //             {[4, 5, 6, 7, 8, 10, 12, 14].map((size) => (
// // //               <button
// // //                 key={size}
// // //                 className={`size-button ${selectedSize === size ? 'selected' : ''}`}
// // //                 onClick={() => setSelectedSize(size)}
// // //               >
// // //                 {size}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="quantity">
// // //           <span>כמות:</span>
// // //           <div className="quantity-controls">
// // //             <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
// // //             <span>{quantity}</span>
// // //             <button onClick={() => setQuantity(q => q + 1)}>+</button>
// // //           </div>
// // //         </div>

// // //         <button className="btn btn-outline-dark" onClick={() => handleAddToCart(item)}>
// // //                     הוסף לסל 🛒
// // //                   </button>

// // //         <p className="shipping-note">עלות שליחות עד הבית - ₪19.90, חינם בקנייה מעל ₪199</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductDetails;
// // import React, { useState } from 'react';
// // import '../styles/ProductDetails.css';
// // import Cart from './Cart';
// // import { useSelector } from 'react-redux';

// // const ProductDetails = () => {
// //   // const product = useSelector((state) => state.reducer.boys[0]); // בוחרים את המוצר להצגה
// //   const product = useSelector((state) => state.boys);
// //   const [mainImage, setMainImage] = useState(product.images[0]); // תמונה ראשית מהמוצר
// //   const [selectedColor, setSelectedColor] = useState('שחור');
// //   const [selectedSize, setSelectedSize] = useState(null);
// //   const [quantity, setQuantity] = useState(1);

// //   const colors = [
// //     { name: 'שחור', value: '#000' },
// //     { name: 'אפור בהיר', value: '#ddd' },
// //   ];

// //   return (
// //     <div className="product-container" dir="rtl">
// //       <div className="image-section">
// //         <img src={mainImage} alt="main" className="main-image" />
// //         <div className="thumbnails">
// //           {product.images.map((img, i) => (
// //             <img
// //               key={i}
// //               src={img}
// //               alt={`thumb-${i}`}
// //               className={`thumbnail ${mainImage === img ? 'active' : ''}`}
// //               onClick={() => setMainImage(img)}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       <div className="details-section">
// //         <h2>{product.name}</h2>
// //         <p className="price">₪{product.price} <span className="new-label">NEW!</span></p>

// //         <div className="color-selector">
// //           <span>צבע: {selectedColor}</span>
// //           <div className="colors">
// //             {colors.map((color, index) => (
// //               <div
// //                 key={index}
// //                 className={`color-circle ${selectedColor === color.name ? 'selected' : ''}`}
// //                 style={{ backgroundColor: color.value }}
// //                 onClick={() => setSelectedColor(color.name)}
// //               ></div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="size-selector">
// //           <span>מידה:</span>
// //           <div className="sizes">
// //             {[4, 5, 6, 7, 8, 10, 12, 14].map((size) => (
// //               <button
// //                 key={size}
// //                 className={`size-button ${selectedSize === size ? 'selected' : ''}`}
// //                 onClick={() => setSelectedSize(size)}
// //               >
// //                 {size}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="quantity">
// //           <span>כמות:</span>
// //           <div className="quantity-controls">
// //             <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
// //             <span>{quantity}</span>
// //             <button onClick={() => setQuantity(q => q + 1)}>+</button>
// //           </div>
// //         </div>

// //         <button className="btn btn-outline-dark" onClick={() => console.log("add to cart", product)}>
// //           הוסף לסל 🛒
// //         </button>

// //         <p className="shipping-note">עלות שליחות עד הבית - ₪19.90, חינם בקנייה מעל ₪199</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../redux/action';

// import '../styles/ProductDetails.css';

// function ProductDetails() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const product = useSelector((state) =>
//     state.products.arr.find((item) => item.id === parseInt(id))
//   );

//   const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);
 

//   // הוספה נדרשת:
//   const sizes = product.sizes || [4, 5, 6, 7, 8, 10, 12, 14];
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   if (!product) {
//     return <p style={{ textAlign: 'center' }}>המוצר לא נמצא</p>;
//   }

//   return (
//     <div className="product-container" dir="rtl">
//   <div className="details-section">
//     <h2>{product.name}</h2>
//     <p className="price">₪{product.price}</p>
//     <p className="new-label">חדש!</p>

//     <div className="size-section">
//       <p>מידה:</p>
//       <div className="size-options">
//         {sizes.map((size) => (
//           <button
//             key={size}
//             className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
//             onClick={() => setSelectedSize(size)}
//           >
//             {size}
//           </button>
//         ))}
//       </div>
//     </div>

//     <div className="quantity-section">
//       <p>כמות:</p>
//       <div className="quantity-controls">
//         <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
//         <span>{quantity}</span>
//         <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//       </div>
//     </div>

//     <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
//       הוסף לעגלה
//     </button>

//     <p className="shipping-note">* זמן אספקה עד 5 ימי עסקים</p>
//   </div>

//   <div className="image-wrapper">
//     <div className="side-thumbnails">
//       {(product.images || []).map((img, idx) => (
//         <img
//           key={idx}
//           src={img}
//           alt={`תמונה ${idx + 1}`}
//           className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
//           onClick={() => setSelectedImage(img)}
//         />
//       ))}
//     </div>

//     <div className="main-image-container">
//       <img src={selectedImage} alt={product.name} className="main-image" />
//     </div>
//   </div>
// </div>

//     // <div className="product-container" dir="rtl">
//     //   <div className="image-section">
//     //     <img src={selectedImage} alt={product.name} className="main-image" />
//     //     <div className="thumbnails">
//     //       {(product.images || [product.image]).map((img, idx) => (
//     //         <img
//     //           key={idx}
//     //           src={img}
//     //           alt={`תמונה ${idx + 1}`}
//     //           className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
//     //           onClick={() => setSelectedImage(img)}
//     //         />
//     //       ))}
//     //     </div>
//     //   </div>

//     //   <div className="details-section">
//     //     <h2>{product.name}</h2>
//     //     <p className="price">₪{product.price}</p>
//     //     <p className="new-label">חדש!</p>

//     //     {/* כאן אפשר להוסיף בחירת צבעים, מידות וכו' */}

//     //     <button
//     //       className="add-to-cart"
//     //       onClick={() => dispatch(addToCart(product))}
//     //     >
//     //       הוסף לעגלה
//     //     </button>

//     //     <p className="shipping-note">* זמן אספקה עד 5 ימי עסקים</p>
//     //   </div>
//     // </div>
//   );
// }

// export default ProductDetails;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart } from '../redux/action';
// import '../styles/ProductDetails.css';

// function ProductDetails() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const product = useSelector((state) =>
//     state.products.arr.find((item) => item.id === parseInt(id))
//   );

//   const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);
//   const sizes = product.sizes || [4, 5, 6, 7, 8, 10, 12, 14];
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert("אנא בחר מידה");
//       return;
//     }
//     const productToCart = {
//       ...product,
//       selectedSize,
//       quantity
//     };
//     dispatch(addToCart(productToCart));
//   };

//   if (!product) {
//     return <p style={{ textAlign: 'center' }}>המוצר לא נמצא</p>;
//   }

//   return (
//     <div className="product-container" dir="rtl">
//       <div className="details-section">
//         <h2>{product.name}</h2>
//         <p className="price">₪{product.price}</p>
//         <p className="new-label">חדש!</p>

//         <div className="size-section">
//           <p>מידה:</p>
//           <div className="size-options">
//             {sizes.map((size) => (
//               <button
//                 key={size}
//                 className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="quantity-section">
//           <p>כמות:</p>
//           <div className="quantity-controls">
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>
//         </div>

//         <button className="add-to-cart" onClick={handleAddToCart}>
//           הוסף לעגלה
//         </button>

//         <p className="shipping-note">* זמן אספקה עד 5 ימי עסקים</p>
//       </div>

//       <div className="image-wrapper">
//         <div className="side-thumbnails">
//           {(product.images || []).map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`תמונה ${idx + 1}`}
//               className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>

//         <div className="main-image-container">
//           <img src={selectedImage} alt={product.name} className="main-image" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;

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
