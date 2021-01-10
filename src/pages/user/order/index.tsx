import React from 'react';
import {
  Head,
  Header,
  Footer,
  Breadcrumb,
  Orders,
  MyButton,
} from '../../../components';

const Order = (): JSX.Element => {
  return (
    <>
      <Head
        title="Minha Conta"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <MyButton to="/user/home">Minha Conta</MyButton>
        <span>Pedidos</span>
      </Breadcrumb>
      <div className="container">
        <h1>Pedidos</h1>
        <Orders
          date="23/12/2020"
          order={5454646}
          price="R$ 50,00"
          status="pedido-realizado"
        >
          <div className="row">
            <div className="col-4">
              <img
                src="/images/thmb-product.jpg"
                className="img-responsive"
                alt="Produto"
              />
            </div>
            <div className="col-8">
              <p className="subtitle">Placa de Inauguração</p>
              <p>
                Tamanho: 20x30
                <br />
                Opcional: Sem opcional
                <br />
                Acabamento: Dupla Face
              </p>
            </div>
          </div>
        </Orders>
        <Orders
          date="23/12/2020"
          order={5454646}
          price="R$ 50,00"
          status="entregue"
        >
          <div className="row">
            <div className="col-4">
              <img
                src="/images/thmb-product.jpg"
                className="img-responsive"
                alt="Produto"
              />
            </div>
            <div className="col-8">
              <p className="subtitle">Placa de Inauguração</p>
              <p>
                Tamanho: 20x30
                <br />
                Opcional: Sem opcional
                <br />
                Acabamento: Dupla Face
              </p>
            </div>
          </div>
        </Orders>
      </div>
      <Footer />
    </>
  );
};

export default Order;
