import React from 'react';
import Card from './Card';

const cardsData = [
  { id: 1, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 1', price: 'R$ 100,00' },
  { id: 2, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 2', price: 'R$ 200,00' },
  { id: 3, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 3', price: 'R$ 300,00' },
  { id: 4, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 4', price: 'R$ 400,00' },
  { id: 5, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 5', price: 'R$ 500,00' },
  { id: 6, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 6', price: 'R$ 600,00' },
  { id: 7, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 7', price: 'R$ 700,00' },
  { id: 8, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 8', price: 'R$ 800,00' },
  { id: 9, imgSrc: 'https://via.placeholder.com/150', description: 'Descrição do produto 9', price: 'R$ 900,00' },
];

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {cardsData.map(card => (
          <Card key={card.id} imgSrc={card.imgSrc} description={card.description} price={card.price} />
        ))}
      </div>
    </div>
  );
}

export default Home;
