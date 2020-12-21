import React from 'react';
import { Head, Header, Painel, Tabs, About, Footer } from '../components';

const Home = (): JSX.Element => {
  return (
    <>
      <Head
        title="PolySteel"
        description="A Polysteel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Painel controls={false} autoplay dots={false} items={1}>
        <img src="./images/painel1.jpg" alt="Teste" />
        <img src="./images/painel2.jpg" alt="Teste" />
      </Painel>
      <Tabs />
      <About />
      <Painel
        controls
        autoplay={false}
        dots
        items={3}
        title="Destaques"
        persClass="marginItems"
      >
        <div className="postItem">
          <img
            src="./images/post1.jpg"
            alt="Venda para Prefeituras, Câmaras Municipais, Secretarias Estaduais"
            className="img-responsive"
          />
          <h2>
            Venda para Prefeituras, Câmaras Municipais, Secretarias Estaduais
          </h2>
        </div>
        <div className="postItem">
          <img
            src="./images/post2.jpg"
            alt="Participamos de dispensas de Licitações"
            className="img-responsive"
          />
          <h2>Participamos de dispensas de Licitações</h2>
        </div>
        <div className="postItem">
          <img
            src="./images/post3.jpg"
            alt="Faturamento para empresas privadas e rede pública"
            className="img-responsive"
          />
          <h2>Faturamento para empresas privadas e rede pública</h2>
        </div>
      </Painel>

      <Painel items={5} title="Principais Clientes">
        <div>
          <img src="./images/justica-trabalho.jpg" alt="Justiça do Trabalho" />
        </div>
        <div>
          <img src="./images/ministerio-saude.jpg" alt="Ministério da Saúde" />
        </div>
        <div>
          <img
            src="./images/prefeitura-santana-parnaiba.jpg"
            alt="Prefeitura de Santana de Parnaíba"
          />
        </div>
        <div>
          <img
            src="./images/universidade-lavras.jpg"
            alt="Universidade de Lavras"
          />
        </div>
        <div>
          <img src="./images/metro-sp.jpg" alt="Metrô SP" />
        </div>
      </Painel>

      <Footer />
    </>
  );
};

export default Home;
