import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';


function Cart() {
const handleSubmit = (e) => {
  e.preventDefault();
};

return (
  <div className="name-input-container">
    <Header />
    <form onSubmit={handleSubmit}>
      <h2>CARRINHO</h2>
      <Link to="/Checkout" id="chk">
        Checkout
      </Link>
    </form>
    <Footer />
  </div>
);
}
export default Cart;