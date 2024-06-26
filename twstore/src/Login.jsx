import React, { useState } from 'react';
import './styles/Login.css';
import Footer from './components/Footer';
import { useNavigate, Link } from 'react-router-dom';
import Header from './components/Header';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      navigate('/');
    }
  };

  return (
    <div className="name-input-container">
      <Header/>
      <form onSubmit={handleSubmit}>
        <img src="https://png.pngtree.com/png-clipart/20220830/ourmid/pngtree-drippy-cartoon-png-image_6130929.png" alt="Logo" className="login-logo" /> 
        <h2>Login</h2>
        <input
          id="email"
          type="email"
          placeholder="Digite seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button id="next" type="submit">
          Continuar
        </button>
        <Link to="/Createaccount" id="createaccount">
          Criar uma conta
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
