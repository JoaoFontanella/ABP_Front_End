import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex justify-around bg-gray-200 p-4 fixed bottom-0 w-full">
      <Link to="/" className="text-black text-2xl">Home</Link>
      <Link to="/profile" className="text-black text-2xl">Profile</Link>
      <Link to="/cart" className="text-black text-2xl">Cart</Link>
    </footer>
  );
}

export default Footer;
