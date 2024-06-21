import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Pagination from './Pagination';
import './Home.css';

const products = [
  { image: 'https://www.grizzlygriptape.com.br/cdn/shop/files/GMC2301P18_BLACK_01_670x.jpg', title: 'Camiseta Grizzly Evergreen Ss Tee', description: 'R$ 149,90' },
  { image: 'https://acdn.mitiendanube.com/stores/001/115/376/products/11-49091e87f783919a8216927278067885-480-0.png', title: 'Camiseta Vans Marshmallow White', description: 'R$104,99' },
  { image: 'https://cdn.vnda.com.br/hocks/2021/06/01/8_6_7_760_Calca_Jeans_Hocks_FIxa_01.jpg', title: 'Calça Hocks Fixa Large Jeans', description: 'R$ 299,90' },
  { image: 'https://acdn.mitiendanube.com/stores/001/115/376/products/ml-sc-2-b84c4d1d4d5e42b0eb17177910769358-480-0.png', title: 'Camiseta Santa Cruz Dressen Rose Vine Opus', description: 'R$ 189,90' },
  { image: 'https://images.tcdn.com.br/img/img_prod/1286793/camiseta_dgk_stay_low_manga_longa_preto_917_1_eb755765c02d3bd75e25d9265eb1e0f8.jpg', title: 'Camiseta DGK Stay Low Manga Longa', description: 'R$ 229,90' },
  { image: 'https://images.tcdn.com.br/img/img_prod/560775/camiseta_dgk_mystical_preto_importado_17985_1_b0efd95a1195fe9c4175cf906b6cc32b.jpg', title: 'Camiseta Dgk Mystical Preto', description: 'R$ 239,90' },
  { image: 'https://global.cdn.magazord.com.br/pontocerto/img/2024/02/produto/8139/cinto-vans-deppster-ii-web-belt-masculino-em-lona-quadriculado-hyped-91.jpg', title: 'Cinto Deppster II Web Belt Vans ', description: 'R$ 159,99' },
  { image: 'https://cdn.awsli.com.br/2500x2500/749/749210/produto/143516055/499bf75234.jpg', title: 'Meia Grizzly Cano Alto Branca', description: 'R$ 59,90' },
  { image: 'https://imgcentauro-a.akamaihd.net/1366x1366/M14DPU02.jpg', title: 'Jaqueta Volcom Madward Imp Preto', description: 'R$ 845,40' },
  { image: 'https://images-americanas.b2w.io/produtos/7495647671/imagens/moletom-fechado-lost-22413608-sheep-on-fire-preto/7495647671_1_large.jpg', title: 'Moletom Lost Sheep On Fire Preto', description: 'R$ 476,90' },
  { image: 'https://princeofstreets.fbitsstatic.net/img/p/tenis-ous-bets-preto-reflect-imperial-155374/355352.jpg?w=550&h=550&v=202406101908&qs=ignore', title: 'Tênis Öus Bets Preto/Refletivo/Laranja', description: 'R$ 559,90' },
  { image: 'https://acdn.mitiendanube.com/stores/001/115/376/products/imagem-do-whatsapp-de-2024-06-19-as-14-03-03_2f0f83e1-940f44ffa86a856bed17188219511074-480-0.jpg', title: 'Camiseta Creature Stubbs Cat Preto', description: 'R$ 189,90' },
  { image: 'https://s3.flize.host/onesixteam/camisetahocksboxbrancoh23563-121107.jpg', title: 'Camiseta Hocks Box Branco', description: 'R$ 129,90' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC159T4EbRqjRVpO2pG25yHpx8c1KG6PfElw&s', title: 'Moletom Fila Letter Ii Preto', description: 'R$ 299,90' },
  { image: 'https://images.tcdn.com.br/img/img_prod/560775/180_camiseta_manga_longa_santa_cruz_dressen_roses_dot_preto_14979_1_26a41522f1931bdbae817659e5404cbf.jpg', title: 'Camiseta Santa Cruz Rob Evolution Preto', description: 'R$ 199,90' },
  { image: 'https://wats.company/wp-content/uploads/camisa-xadrez-wats-off-white.jpg', title: 'Camisa Wats Xadrez Flanela Marrom', description: 'R$ 269,90' },
  { image: 'https://studio98skateshop.com.br/wp-content/uploads/2022/04/15123184343_bags-wats24.jpg', title: 'Shoulder Bag Wats Pocket Preto', description: 'R$ 142,40' },
  { image: 'https://imgcentauro-a.akamaihd.net/1300x1300/M147AP09.jpg', title: 'Gorro Hurley Poise Roxo', description: 'R$ 151,90' },
  { image: 'https://takeoverskateshop.com.br/wp-content/uploads/2022/11/Vans-Wayvee-Preto-600x600.jpg', title: 'Tênis Vans Wayvee Preto', description: 'R$ 699,90' },
  { image: 'https://www.lojahip.com.br/images/Produtos/Site/Jaqueta-Vans-Varsity-Club-Bomber-Preto.jpg', title: 'Jaqueta Vans Varsity Club Bomber Feminino Preto/Branco', description: 'R$ 829,90' },
  { image: 'https://s3.flize.host/onesixteam/tnisteslacoilwhitepurplemesc1901-20-616348.jpg', title: 'Tênis Tesla Coil White Purple Mesclado Branco/Roxo', description: 'R$ 303,90' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 22', description: 'Descrição do produto 22' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 23', description: 'Descrição do produto 23' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 24', description: 'Descrição do produto 24' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 25', description: 'Descrição do produto 25' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 26', description: 'Descrição do produto 26' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 27', description: 'Descrição do produto 27' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 28', description: 'Descrição do produto 28' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 29', description: 'Descrição do produto 29' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 30', description: 'Descrição do produto 30' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 31', description: 'Descrição do produto 31' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 32', description: 'Descrição do produto 32' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 33', description: 'Descrição do produto 33' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 34', description: 'Descrição do produto 34' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 35', description: 'Descrição do produto 35' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 36', description: 'Descrição do produto 36' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 37', description: 'Descrição do produto 37' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 38', description: 'Descrição do produto 38' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 39', description: 'Descrição do produto 39' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 40', description: 'Descrição do produto 40' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 41', description: 'Descrição do produto 41' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 42', description: 'Descrição do produto 42' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 43', description: 'Descrição do produto 43' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 44', description: 'Descrição do produto 44' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 45', description: 'Descrição do produto 45' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 46', description: 'Descrição do produto 46' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 47', description: 'Descrição do produto 47' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 48', description: 'Descrição do produto 48' },
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Header />
      <main className="main-content">
        {currentItems.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            buttonLabel="Adicionar ao carrinho"
          />
        ))}
      </main>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
};

export default Home;
