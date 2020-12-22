import React from 'react';
import { Head, Header, Footer, Breadcrumb } from '../../components';

const Cart = (): JSX.Element => {
  return (
    <>
      <Head
        title="Carrinho"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Carrinho</span>
      </Breadcrumb>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Sua Encomenda</h3>
          </div>
          <div className="col-md-12">Detalhes do seu Pedido</div>
          <div className="col-md-4">Produto</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
