import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { boys, girls, sale, newcollection, shose, excesoris } from '../redux/action';
import { Link } from 'react-router-dom';

function ProductList() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.arr);
  console.log("products:", products);
  useEffect(() => {
    const cat = category.toLowerCase(); // ← הפוך את שם הקטגוריה לאותיות קטנות
  
    switch (cat) {
      case 'boys':
        dispatch(boys());
        break;
      case 'girls':
        dispatch(girls());
        break;
      case 'sale':
        dispatch(sale());
        break;
      case 'newcollection':
        dispatch(newcollection());
        break;
      case 'shoes':
        dispatch(shose()); // ← ודאי שהשם תואם לקובץ action
        break;
      case 'accessories':
        dispatch(excesoris());
        break;
      default:
        break;
    }
  }, [category, dispatch]);

  return (
    <div>
    <h1>קטגוריה: {category}</h1>
    <div className="product-list">
      {products.map((item, index) => (
        <Link to={`/product/${item.id}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={item.image} alt={item.name} style={{ width: '200px' }} />
            <h3>{item.name}</h3>
            <p>{item.txt}</p>
            <p>מחיר: {item.price}₪</p>
            <p>משלוח: {item.send}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
}

export default ProductList;
