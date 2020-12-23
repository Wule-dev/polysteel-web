import React from 'react';
import { useRouter } from 'next/router';
import { Head, Header, Footer, Breadcrumb } from '../../../components';
import styles from './Customize.module.css';

const Product = (): JSX.Element => {
  const router = useRouter();
  const { product } = router.query;

  return (
    <>
      <Head
        title="Produtos"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <div className={styles.grayBack}>
        <Breadcrumb>
          <a href="/products">Produtos</a>
          <a href={`/product/${product}`}>{product}</a>
          <span>Customizar</span>
        </Breadcrumb>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Personalize a sua Placa de Inauguração</h3>
            </div>
            <div className="col-md-8">
              <div className={`row ${styles.contain}`}>
                <div className="col-md-12">
                  <h4>Tamanho</h4>
                </div>
                <div className="col-md-4">20 x 30cm</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`row ${styles.contain} ${styles.fixedTop}`}>
                Resumo
                <p>
                  Placa de Inauguração
                  <br />
                  Tamanho: 20 x 30 cm
                  <br />
                  Opcional: Sem
                  <br />
                  Opcional Acabamento: Dupla Face
                </p>
                <p className="text-right">
                  <a href="/cart" type="button" className={styles.btnBuy}>
                    Continuar
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p className="text-right">
                <a href="/cart" type="button" className={styles.btnBuy}>
                  Continuar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
