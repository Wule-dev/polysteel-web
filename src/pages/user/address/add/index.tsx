import React from 'react';
import {
  Head,
  Header,
  Footer,
  Breadcrumb,
  Address,
} from '../../../../components';

const AddressAdd = (): JSX.Element => {
  return (
    <>
      <Head
        title="Adicionar Endereço"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <a href="/user/home">Minha Conta</a>
        <a href="/user/profile">Meus Dados</a>
        <span>Adicionar Endereço</span>
      </Breadcrumb>
      <div className="container pageContent">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Address />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddressAdd;
