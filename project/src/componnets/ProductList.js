import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { boys, girls, sale, newcollection, shose, excesoris } from '../redux/action';

function ProductList() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.arr);

  useEffect(() => {
    switch (category) {
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
        dispatch(shose());
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
          <div key={index}>
            <img src={item.image} alt={item.name} style={{ width: '200px' }} />
            <h3>{item.name}</h3>
            <p>{item.txt}</p>
            <p>מחיר: {item.price}₪</p>
            <p>משלוח: {item.send}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
