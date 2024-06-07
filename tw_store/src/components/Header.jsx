import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20220830/ourmid/pngtree-drippy-cartoon-png-image_6130929.png" alt="Logo" /> 
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
