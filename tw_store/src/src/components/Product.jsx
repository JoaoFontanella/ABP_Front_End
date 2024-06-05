import React from 'react';

const Product = ({ image, name, price }) => {
  return (
    <div className="text-center border border-gray-300 rounded-lg m-4 p-4">
      <img src={image} alt={name} className="w-full h-auto rounded-lg" />
      <h2 className="text-lg my-2">{name}</h2>
      <p className="text-base text-gray-700">{price}</p>
    </div>
  );
}

export default Product;
