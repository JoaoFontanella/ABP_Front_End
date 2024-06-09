import React from 'react';
import './Card.css';

const Card = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        {buttonLabel && <button className="card-button">{buttonLabel}</button>}
      </div>
    </div>
  );
};

export default Card;
