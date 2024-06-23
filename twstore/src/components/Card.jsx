import React from 'react';
import './Card.css';

const Card = ({ id, image, title, description, addToCart }) => {
  return (
    <div className="card">
      {id}
      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={() => addToCart(item)}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
