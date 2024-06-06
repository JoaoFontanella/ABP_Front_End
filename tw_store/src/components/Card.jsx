import React from 'react';

function Card({ imgSrc, description, price }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={imgSrc} alt="Produto" className="w-full h-48 object-cover mb-4" />
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-900 font-bold mb-4">{price}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Comprar</button>
    </div>
  );
}

export default Card;
