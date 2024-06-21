import React, { useState } from 'react';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';

function Criar_conta() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim() && name.trim()) {
      navigate('/Login');
    }
  };

  return (
    <div className="name-input-container">
      <Header/>
      <form onSubmit={handleSubmit}>
        <h2>Criar Conta</h2>
        <input
          id="name"
          type="text"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button id="create" type="submit">
          Criar
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Criar_conta;
