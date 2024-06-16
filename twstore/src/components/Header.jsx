import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="https://png.pngtree.com/png-clipart/20220830/ourmid/pngtree-drippy-cartoon-png-image_6130929.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar..." />
        <button class="button_search" type="submit">
          Search
        </button>
      </div>
        <button id="cart" class="cart_button" type="submit">
          Cart
        </button>
        <button id="login" class="login_button" type="submit">
          Login
        </button>
    </header>
  );
};
export default Header;
