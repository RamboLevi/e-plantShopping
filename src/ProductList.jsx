import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = ({ plantsArray }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-grid">
      {plantsArray.map(plant => (
        <div className="product-card" key={plant.name}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>Price: {plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

