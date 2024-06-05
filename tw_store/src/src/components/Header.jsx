import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl">LOGO</div>
      <nav className="space-x-4">
        <Link to="/" className="text-lg hover:underline">NOME_DA_LOJA</Link>
        {/* Adicione mais links conforme necessário */}
      </nav>
    </header>
  );
}

export default Header;
