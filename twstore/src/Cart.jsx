import React, { useContext } from 'react';
import './styles/Cart.css';
import { CartContext } from './CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <Header />
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} - Quantidade: {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <div class="cart-buttons">
            <button id="clean" onClick={clearCart}>
              Limpar
            </button>
            <Link to="/Checkout">
              <button id="chk" type="submit">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
