import React from 'react';
import Product from '../components/Product';

const Home = () => {
  const products = [
    { image: 'img1.png', name: 'desc2', price: 'R$ 0' },
    { image: 'img2.png', name: 'desc2', price: 'R$ 1' },
    { image: 'img3.png', name: 'desc3', price: 'R$ 2' },
    { image: 'img4.png', name: 'desc4', price: 'R$ 3' },
    { image: 'img5', name: 'desc5', price: 'R$ 4' },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-8">
      {products.map((product, index) => (
        <Product key={index} image={product.image} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default Home;
