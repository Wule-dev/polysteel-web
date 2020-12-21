import React from 'react';
import { Head, Header, Footer, Breadcrumb } from '../../components';

const Empresa = (): JSX.Element => {
  return (
    <>
      <Head
        title="Sobre Nós - PolySteel"
        description="A Polysteel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Sobre Nós</span>
      </Breadcrumb>
      <Footer />
    </>
  );
};

export default Empresa;
