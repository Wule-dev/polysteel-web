import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Head,
  Header,
  Footer,
  Breadcrumb,
  MyButton,
  ListProperties,
} from '../../../components';
import styles from './Customize.module.css';
import ProductsContext from '../../../contexts/product';

const Product = (): JSX.Element => {
  const router = useRouter();
  const { getProductByQuery, currentProduct } = useContext(ProductsContext);
  const { product } = router.query;

  useEffect(() => {
    getProductByQuery(product);
  }, [product, currentProduct, getProductByQuery]);

  if (!currentProduct)
    return <div style={{ backgroundColor: 'red' }}>Carregando</div>;

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
          <MyButton to="/products">Produtos</MyButton>
          <MyButton to={`/product/${product}`}>{product}</MyButton>
          <span>Customizar</span>
        </Breadcrumb>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>{`Personalize a sua ${product}`}</h3>
            </div>
            {!currentProduct ? (
              <div>Carregando</div>
            ) : (
              <ListProperties data={currentProduct} />
            )}

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
                  <MyButton to="/cart" className={styles.btnBuy}>
                    Continuar
                  </MyButton>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p className="text-right">
                <MyButton to="/cart" className={styles.btnBuy}>
                  Continuar
                </MyButton>
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
