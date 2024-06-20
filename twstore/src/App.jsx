import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Checkout from './Chekout';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          //Criar Conta
          //Cart
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
