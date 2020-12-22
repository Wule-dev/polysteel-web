import React from 'react';
import { Head, Header, Footer, Breadcrumb, About } from '../../components';

const Empresa = (): JSX.Element => {
  return (
    <>
      <Head
        title="Sobre Nós"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Sobre Nós</span>
      </Breadcrumb>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>SOBRE NÓS</h1>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Empresa;
