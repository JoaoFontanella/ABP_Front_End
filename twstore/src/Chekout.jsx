import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './Checkout.css';

const Checkout = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Info:', paymentInfo);
  };

  return (
    <div id="fim" className="checkout-page">
      <Header />
      <form id="fim" onSubmit={handleSubmit}>
        <h2>Revisão dos Itens do Pedido</h2>
        {/*Add itens para o chekout*/}

        <h2>Informações de Pagamento</h2>
        <label>
          Número do Cartão:
          <input
            id="fim"
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentChange}
            required
          />
        </label>
        <label>
          Data de Validade:
          <input
            id="fim"
            type="text"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handlePaymentChange}
            required
          />
        </label>
        <label>
          CVV:
          <input
            id="fim"
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
            required
          />
        </label>
        <button type="submit" id="fim">
          Finalizar Pedido
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Checkout;
