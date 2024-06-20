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
  { image: 'https://via.placeholder.com/300', title: 'Produto 8', description: 'Descrição do produto 8' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 9', description: 'Descrição do produto 9' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 10', description: 'Descrição do produto 10' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 11', description: 'Descrição do produto 11' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 12', description: 'Descrição do produto 12' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 13', description: 'Descrição do produto 13' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 14', description: 'Descrição do produto 14' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 15', description: 'Descrição do produto 15' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 16', description: 'Descrição do produto 16' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 17', description: 'Descrição do produto 17' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 18', description: 'Descrição do produto 18' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 19', description: 'Descrição do produto 19' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 20', description: 'Descrição do produto 20' },
  { image: 'https://via.placeholder.com/300', title: 'Produto 21', description: 'Descrição do produto 21' },
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
  const itemsPerPage = 32;
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
