import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Camiseta Grizzly Evergreen Ss Tee', price: 149.9 },
    { id: 2, name: 'Camiseta Vans Marshmallow White', price: 104.99 },
    { id: 3, name: 'Calça Hocks Fixa Large Jeans', price: 299.9 },
  ]);
  //array de teste para o carrinho

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container">
      <Header />
      <div className="cart-content">
        <h2>Carrinho</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - R$ {item.price.toFixed(2)}
              <button onClick={() => removeItem(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
        <p>Total: R$ {calculateTotal().toFixed(2)}</p>
      </div>
      <Link to="/Checkout" id="chkt">
        <button id="chkt" type="submit">
          Checkout
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default Cart;
