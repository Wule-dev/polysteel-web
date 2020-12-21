import React from 'react';
import { Head, Header, Painel, Tabs } from '../components';

const Home = (): JSX.Element => {
  return (
    <>
      <Head
        title="PolySteel"
        description="A Polysteel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Painel>
        <img src="./images/painel1.jpg" alt="Teste" />
        <img src="./images/painel2.jpg" alt="Teste" />
      </Painel>
      <Tabs />
    </>
  );
};

export default Home;
