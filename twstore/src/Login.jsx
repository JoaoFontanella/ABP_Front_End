import React, { useState } from 'react';
import './Login.css';
import Footer from './components/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
    }
  };

  return (
    <div className="name-input-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          id="email"
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="next" type="submit">
          Continuar
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
