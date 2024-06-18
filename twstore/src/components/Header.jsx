import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <Link to="/">
        <img src="https://png.pngtree.com/png-clipart/20220830/ourmid/pngtree-drippy-cartoon-png-image_6130929.png" alt="Logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search search-icon"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </div>
        <button id="cart" class="cart_button" type="submit">
          Cart
        </button>
      <Link to="/Login" id="Login">
        <button id="login" class="login_button" type="submit">
          Login
        </button>
      </Link>
    </header>
  );
};

export default Header;
