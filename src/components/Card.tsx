import React from 'react';

import './../styles/card.css';

interface CardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={imageUrl} alt={name} />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
