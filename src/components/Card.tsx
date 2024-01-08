import React from 'react';

import './../styles/card.css';
interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  btnText?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, btnText }) => {
  return (
    <div className="card">
      {imageUrl ? <img className="card-image" src={imageUrl} alt={title} /> : null}

      <div className="card-content">
        {title ? <h2 className="card-title">{title}</h2> : null}
        {description ? <p className="card-description">{description}</p> : null}
        {btnText ? <button className="card-btn">{btnText}</button> : null}
      </div>
    </div>
  );
};

export default Card;
