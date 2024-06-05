import React from 'react';
import Product from '../components/Product';

const Home = () => {
  const products = [
    { image: '/path/to/thrasher.png', name: 'Moletom Thrasher', price: 'R$ 250,00' },
    { image: '/path/to/ous.png', name: 'Tênis OUS', price: 'R$ 374,90' },
    { image: '/path/to/hat.png', name: 'Boné Hocks', price: 'R$ 120,50' },
    { image: '/path/to/newera.png', name: 'Camiseta New Era', price: 'R$ 114,48' },
    { image: '/path/to/vans.png', name: 'Tênis Vans', price: 'R$ 399,90' },
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
