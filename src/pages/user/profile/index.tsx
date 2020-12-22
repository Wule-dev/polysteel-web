import React from 'react';
import { Head, Header, Footer, Breadcrumb } from '../../../components';
import styles from './Profile.module.css';

const HomeUser = (): JSX.Element => {
  return (
    <>
      <Head
        title="Meus Dados"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <a href="/user/home">Minha Conta</a>
        <span>Meus Dados</span>
      </Breadcrumb>
      <div className={`container pageContent ${styles.view}`}>
        <div className="row">
          <div className="col-md-6">
            <h1>
              Meus Dados
              <a href="/edit">Alterar</a>
            </h1>
            <p>
              <span>Nome</span>
              José Alves da Silva
            </p>
            <p>
              <span>CPF</span>
              000.000.000-00
            </p>
            <p>
              <span>E-mail</span>
              teste@teste.com.br
            </p>
            <p>
              <span>Telefone</span>
              (11) 90000-0000
            </p>
          </div>
          <div className="col-md-6">
            <h1>
              Empresa
              <a href="/edit">Alterar</a>
            </h1>
            <p>
              <span>Nome</span>
              Doceria LTDA
            </p>
            <p>
              <span>CNPJ</span>
              xx. xxx/0001-??
            </p>
            <p>
              <span>E-mail</span>
              teste@teste.com.br
            </p>
            <p>
              <span>Telefone</span>
              (11) 90000-0000
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Endereços</h2>
          </div>
          <div className={`col-md-4 ${styles.addCard}`}>
            <a href="/user/address/add">Adicionar Novo</a>
          </div>
          <div className={`col-md-4 ${styles.card}`}>
            <div>
              <span>Casa</span>
              <p>
                Rua das Acácias, 000
                <br />
                Jd Residêncial das Palmas
                <br />
                São Paulo - SP
                <br />
                07503-000
              </p>
              <div className={styles.controls}>
                <a href="/user/address/edit">Alterar</a>
                <a href="/user/address/exclude">Excluir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeUser;
