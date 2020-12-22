import React from 'react';
import { Head, Header, Footer, Breadcrumb } from '../../../components';
import styles from './Home.module.css';

const HomeUser = (): JSX.Element => {
  return (
    <>
      <Head
        title="Minha Conta"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Minha Conta</span>
      </Breadcrumb>
      <div className="container pageContent">
        <div className="row">
          <div className="col-md-12">
            <h1>Minha Conta</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="/user/profile" className={styles.homeBtn}>
              <i className="far fa-user-circle" />
              <div>
                <h2>Meus Dados</h2>
                <p>Alterar informações pessoais ou endereços cadastrados.</p>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/user/history" className={styles.homeBtn}>
              <i className="far fa-calendar" />
              <div>
                <h2>Pedidos</h2>
                <p>Alterar informações pessoais ou endereços cadastrados.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeUser;
