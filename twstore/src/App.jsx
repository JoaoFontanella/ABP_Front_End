import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Criar_conta from './Criar_conta';
import Cart from './Cart';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Createaccount" element={<Criar_conta />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
