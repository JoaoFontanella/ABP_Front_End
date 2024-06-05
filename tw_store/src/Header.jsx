import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-center items-center bg-white p-4">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="w-12 mr-4" />
        <h1 className="text-2xl text-purple-600">TW STORE</h1>
      </div>
    </header>
  );
}

export default Header;
