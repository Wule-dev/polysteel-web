import React from 'react';
import { useRouter } from 'next/router';
import {
  Head,
  Header,
  Footer,
  Breadcrumb,
  Orders,
  MyButton,
} from '../../../components';
import styles from './Order.module.css';

const OrderDetails = (): JSX.Element => {
  const router = useRouter();
  const params: { order?: string } = router.query;

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
        <MyButton to="/user/order">Pedidos</MyButton>
        <span>{params.order}</span>
      </Breadcrumb>
      <div className="container">
        <h1>{`Detalhes do Pedido ${params.order}`}</h1>
        <Orders
          date="23/12/2020"
          order={5454646}
          price="R$ 50,00"
          status="pedido-realizado"
          details
          fileLayout="/images/teste.jpg"
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
        <div className={`col-md-12 ${styles.Order}`}>
          <div className={`row ${styles.headOrder}`}>
            <div className="col-md-12">
              <span>DETALHES DO PAGAMENTO</span>
            </div>
          </div>
          <div className={`row ${styles.orderDetails}`}>
            <div className="col">
              <p>Método de Pagamento</p>
              terminado em 0000
            </div>
            <div className="col-auto">
              <p>Valor de Pagamento</p>
              R$ 89,90 à vista
            </div>
            <div className="col-md-12">
              <p>Endereço de Entrega</p>
              Rua das Acácias, 000
              <br />
              Jd Residêncial das Palmas
              <br />
              São Paulo - SP
              <br />
              07503-000
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
