import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";

const plantsArray = [
  {
    id: 1,
    name: "Aloe Vera",
    image: "/images/aloe-vera.jpg",
    description: "A low-maintenance succulent plant.",
    cost: 15,
  },
  {
    id: 2,
    name: "Snake Plant",
    image: "/images/snake-plant.jpg",
    description: "An air-purifying indoor plant.",
    cost: 20,
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    image: "/images/fiddle-leaf.jpg",
    description: "A popular large-leaf houseplant.",
    cost: 35,
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.id]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.id} className="product-card">
          <img src={plant.image} alt={plant.name} className="product-image" />
          <h2>{plant.name}</h2>
          <p>{plant.description}</p>
          <p className="product-cost">${plant.cost}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.id]}
            className="add-to-cart-button"
          >
            {addedToCart[plant.id] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
