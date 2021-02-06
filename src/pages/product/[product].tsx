import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import {
  Head,
  Header,
  Footer,
  Breadcrumb,
  About,
  Painel,
  MyButton,
} from '../../components';
import styles from './Product.module.css';
import ProductsContext from '../../contexts/product';

const Product = (): JSX.Element => {
  const router = useRouter();
  const { getProductByQuery, currentProduct } = useContext(ProductsContext);
  const params: { product?: string } = router.query;

  useEffect(() => {
    getProductByQuery(params.product);
  }, [params.product, currentProduct, getProductByQuery]);

  return (
    <>
      <Head
        title="Produtos"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      {!currentProduct ? (
        <>
          <SkeletonTheme color="#EEE" highlightColor="#FFF">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <Skeleton height={20} width={150} />
                  </p>
                </div>
              </div>
            </div>
            <div className="container pageContent">
              <div className="row">
                <div className="col-md-6">
                  <Skeleton height={300} width="100%" />
                </div>
                <div className="col-md-6">
                  <Skeleton height={70} width="100%" />
                  <p>
                    <Skeleton height={40} width="80%" />
                  </p>
                  <p>
                    <Skeleton height={150} width="100%" />
                  </p>
                </div>
              </div>
            </div>
            <div className="container pageContent">
              <div className="row">
                <div className="col-md-12">
                  <p className={styles.hr}>
                    <span>Detalhes</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Skeleton height={300} width="100%" />
                </div>
              </div>
            </div>
          </SkeletonTheme>
        </>
      ) : (
        <>
          <Breadcrumb>
            <MyButton to="/products">Produtos</MyButton>
            <span>{currentProduct.name}</span>
          </Breadcrumb>
          <div className="container pageContent">
            <div className="row">
              <div className="col-md-6">
                <Painel controls={false} autoplay dots items={1}>
                  {!currentProduct.images &&
                  currentProduct.images === undefined ? (
                    <div>Carregando...</div>
                  ) : (
                    currentProduct.images.map((image) => {
                      return (
                        <img
                          src={`/images/${image}`}
                          alt={currentProduct.name}
                          key={image}
                          className="img-responsive"
                        />
                      );
                    })
                  )}
                </Painel>
              </div>
              <div className={`col-md-6 ${styles.productDetails}`}>
                <h1>{currentProduct.name}</h1>
                <p className={styles.subtitle}>
                  Transforme um evento em uma data especial
                </p>
                <p>
                  * Valor simulando a compra de uma placa em Aço Inox Gravado à
                  laser, com medida de 30cmx20cm, sem opcionais, com acabamento
                  em Dupla Face, não considerando o valor de frete.
                </p>
                <p>** As imagens utilizadas são meramente ilustrativas</p>
                <div className={styles.price}>
                  <span>À partir de</span>
                  <h2>
                    R$
                    {currentProduct.price}
                  </h2>
                  <sub>{currentProduct.measure}</sub>
                </div>
                <div className={styles.send}>
                  <i className="fas fa-shipping-fast" />
                  <div>
                    <p className={styles.subtitle}>Envio para todo o Brasil</p>
                    <span>
                      Clique em Personalizar Produto para visualizar os prazos e
                      as formas de entregas disponíves em sua região.
                    </span>
                  </div>
                </div>
                <p>
                  <MyButton
                    to={`/product/customize/${params.product}`}
                    className={styles.btnBuy}
                  >
                    Personalizar Produto
                  </MyButton>
                  <span className={styles.obs}>
                    Ao clicar em Personalizar Produto, você poderá configurar e
                    personalizar a placa na próxima página.
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className={styles.hr}>
                  <span>Detalhes</span>
                </p>
              </div>
            </div>
            <div className={`row ${styles.details}`}>
              <div className="col-md-5 offset-md-1">
                <img
                  src="/images/product1-details.jpg"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-md-5">
                <div>
                  <h2>Alta Qualidade</h2>
                  <p>Produto produzido com a melhor qualidade do mercado.</p>
                  <p>
                    Envie o conteúdo que deseja incluir e iremos montar o layout
                    de sua placa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <About />
          <div className={styles.banner}>
            <div className="container">
              <h2>Peça a sua Placa de Inauguração</h2>
              <MyButton
                to={`/product/customize/${params.product}`}
                className={styles.btnBuy}
              >
                Personalizar Produto
              </MyButton>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Product;
