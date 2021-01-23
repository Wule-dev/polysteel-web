import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
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
      <Breadcrumb>
        <MyButton to="/products">Produtos</MyButton>
        <span>texto</span>
      </Breadcrumb>
      <div className="container pageContent">
        <div className="row">
          <div className="col-md-6">
            <Painel controls={false} autoplay dots items={1}>
              <img
                src="/images/product1.jpg"
                alt=""
                className="img-responsive"
              />
              <img
                src="/images/product1.jpg"
                alt=""
                className="img-responsive"
              />
            </Painel>
          </div>
          <div className={`col-md-6 ${styles.productDetails}`}>
            <h1>{currentProduct.id}</h1>
            <p className={styles.subtitle}>
              Transforme um evento em uma data especial
            </p>
            <p>
              * Valor simulando a compra de uma placa em Aço Inox Gravado à
              laser, com medida de 30cmx20cm, sem opcionais, com acabamento em
              Dupla Face, não considerando o valor de frete.
            </p>
            <p>** As imagens utilizadas são meramente ilustrativas</p>
            <div className={styles.price}>
              <span>À partir de</span>
              <h2>R$ 150,00</h2>
              <sub>/un</sub>
            </div>
            <div className={styles.send}>
              <i className="fas fa-shipping-fast" />
              <div>
                <p className={styles.subtitle}>Envio para todo o Brasil</p>
                <span>
                  Clique em Personalizar Produto para visualizar os prazos e as
                  formas de entregas disponíves em sua região.
                </span>
              </div>
            </div>
            <p>
              <MyButton
                to={`/product/customize/${product}`}
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
                Envie o conteúdo que deseja incluir e iremos montar o layout de
                sua placa
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
            to={`/product/customize/${product}`}
            className={styles.btnBuy}
          >
            Personalizar Produto
          </MyButton>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
