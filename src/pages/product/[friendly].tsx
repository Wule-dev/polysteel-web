import React from 'react';
import { useRouter } from 'next/router';
import { Head, Header, Footer, Breadcrumb } from '../../components';

const Product = (): JSX.Element => {
  const router = useRouter();
  const { friendly } = router.query;
  console.log(friendly);

  return (
    <>
      <Head
        title="Produtos - PolySteel"
        description="A Polysteel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Produtos</span>
      </Breadcrumb>
      <Footer />
    </>
  );
};

export default Product;
