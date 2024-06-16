import React, { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Card
          image="https://via.placeholder.com/300"
          title="Produto 1"
          description="Descrição do produto 1"
          buttonLabel="Adicionar ao carrinho"
        />
        <Card
          image="https://via.placeholder.com/300"
          title="Produto 2"
          description="Descrição do produto 2"
          buttonLabel="Adicionar ao carrinho"
        />
        <Card
          image="https://via.placeholder.com/300"
          title="Produto 3"
          description="Descrição do produto 3"
          buttonLabel="Adicionar ao carrinho"
        />
        <Card
          image="https://via.placeholder.com/300"
          title="Produto 4"
          description="Descrição do produto 4"
          buttonLabel="Adicionar ao carrinho"
        />
        <Card
          image="https://via.placeholder.com/300"
          title="Produto 5"
          description="Descrição do produto 5"
          buttonLabel="Adicionar ao carrinho"
        />
        <Card
          image="https://via.placeholder.com/300"
          title="Produto 6"
          description="Descrição do produto 6"
          buttonLabel="Adicionar ao carrinho"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
