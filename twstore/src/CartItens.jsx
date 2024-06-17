import React, { useState } from 'react';
import Cart from './components/Cart';


const products = [
  { id: 1, name: 'Produto A', price: 100 },
  { id: 2, name: 'Produto B', price: 200 },
  { id: 3, name: 'Produto C', price: 300 },
];

function CartItens() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, card]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product !== productToRemove));
  };

  return (
    <div className="main-content">
      <h1>Twstore</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CartItens;
