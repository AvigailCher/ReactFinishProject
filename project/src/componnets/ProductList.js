import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  boys, girls, sale, newcollection, shose, excesoris, addToCart
} from '../redux/action';
import Modal from 'bootstrap/js/dist/modal';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductList.css';

function ProductList() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.arr || []);
  const cartItems = useSelector((state) => state.products.cart || []);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [lastAddedItem, setLastAddedItem] = useState(null);
  const [showAllCart, setShowAllCart] = useState(false);
  const modalRef = useRef(null);
  const offcanvasRef = useRef(null);

  useEffect(() => {
    const cat = category.toLowerCase();
    switch (cat) {
      case 'boys': dispatch(boys()); break;
      case 'girls': dispatch(girls()); break;
      case 'sale': dispatch(sale()); break;
      case 'newcollection': dispatch(newcollection()); break;
      case 'shoes': dispatch(shose()); break;
      case 'accessories': dispatch(excesoris()); break;
      default: break;
    }
  }, [category, dispatch]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize('');
    new Modal(modalRef.current).show();
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedSize) {
      const productWithSize = 
      { ...selectedProduct, 
        size: selectedSize ,
        image: selectedProduct.images?.[0] || ''};
      dispatch(addToCart(productWithSize));
      setLastAddedItem(productWithSize);
      setShowAllCart(false);
      Modal.getInstance(modalRef.current)?.hide();
      new Offcanvas(offcanvasRef.current).show();
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + (isNaN(price) ? 0 : price);
    }, 0);
  };

  return (
    <div className="container mt-4" dir="rtl">
      <h2 className="text-center mb-4">קטגוריה: {category}</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.length > 0 ? (
          products.map((item, index) => (
            <div className="col" key={index}>
              <div className="card h-100 text-center border-0">
                <Link to={`/product/${item.id}`} className="image-link">
                  <img src={item.images?.[0]} alt={item.name} className="card-img-top product-image" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">מחיר: ₪{item.price}</p>
                  <p className="text-warning fw-bold">NEW!</p>
                  <button className="btn btn-outline-dark" onClick={() => handleOpenModal(item)}>
                    הוסף לסל 🛒
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">אין מוצרים זמינים לקטגוריה הזו.</p>
        )}
      </div>

      {/* מודאל בחירת מידה */}
      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content custom-modal">
            <div className="modal-header bg-warning">
              <h5 className="modal-title text-black">בחר מידה</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              {["26", "28", "30", "32", "34", "36"].map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`btn m-1 ${selectedSize === size ? 'btn-dark text-white' : 'btn-outline-dark'}`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning w-100 fw-bold" onClick={handleAddToCart} disabled={!selectedSize}>
                הוסף לסל
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* עגלת קניות בצד */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" ref={offcanvasRef}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">🛍 הסל שלי</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="mb-3 d-flex justify-content-between">
            <button className="btn btn-sm btn-outline-dark" onClick={() => setShowAllCart(false)}>התווסף עכשיו</button>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => setShowAllCart(true)}>כל הסל</button>
          </div>

          {showAllCart ? (
            cartItems.length === 0 ? (
              <p>הסל ריק</p>
            ) : (
              <>
                {cartItems.map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center mb-3 border-bottom pb-2">
                    <img src={item.images} alt={item.name} className="cart-img me-2" />
                    <div>
                      <h6 className="mb-0">{item.name}</h6>
                      <small>מידה: {item.size}</small><br />
                      <small>₪{item.price}</small>
                    </div>
                  </div>
                ))}
              </>
            )
          ) : (
            !lastAddedItem ? (
              <p>הסל ריק</p>
            ) : (
              <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                <img src={lastAddedItem.image} alt={lastAddedItem.name} className="cart-img me-2" />
                <div>
                  <h6 className="mb-0">{lastAddedItem.name}</h6>
                  <small>מידה: {lastAddedItem.size}</small><br />
                  <small>₪{lastAddedItem.price}</small>
                </div>
              </div>
            )
          )}

          <div className="mt-3">
            <h6>סה"כ לתשלום: ₪{getTotalPrice().toFixed(2)}</h6>
            <button className="btn btn-dark w-100 mt-2">המשך לתשלום</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
