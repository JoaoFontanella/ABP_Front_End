import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-sm">
        <Link to="/rede-social" className="hover:underline">O Rede Social</Link>
      </div>
      <div className="text-sm">
        <Link to="/contato" className="hover:underline">O Contato</Link>
      </div>
    </footer>
  );
}

export default Footer;
