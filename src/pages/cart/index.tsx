import React from 'react';
import { Head, Header, Footer, Breadcrumb } from '../../components';
import styles from './Cart.module.css';

const Cart = (): JSX.Element => {
  return (
    <>
      <Head
        title="Carrinho"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <div className={styles.grayBack}>
        <Breadcrumb>
          <span>Carrinho</span>
        </Breadcrumb>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Sua Encomenda</h3>
            </div>
            <div className={`col-md-12 ${styles.contain}`}>
              <div className={`row ${styles.borderBottom}`}>
                <div className="col-md-12">
                  <p>Revise seu Pedido</p>
                </div>
                <div className="col-md-8">
                  <p className="subtitle">Produto</p>
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="/images/thmb-product.jpg"
                        className="img-responsive"
                        alt="Produto"
                      />
                    </div>
                    <div className="col-6">
                      <h4>Placa de Inauguração</h4>
                      <span>
                        20x30cm
                        <br />
                        Sem opcional
                        <br />
                        Dupla Face
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <p className="subtitle">Quantidade</p>
                  <div>1</div>
                </div>
                <div className="col-md-2">
                  <p className="subtitle">Total</p>
                  <div className={styles.price}>R$ 150,00</div>
                </div>
              </div>
              <div className={`row ${styles.borderBottom}`}>
                <div className="col-md-8">
                  <p className="subtitle">Cupom de Desconto</p>
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="code">
                        <input type="text" placeholder="Código" id="code" />
                      </label>
                    </div>
                    <div className="col-4">
                      <button type="button" className="btn-primary">
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <p>Desconto:</p>
                </div>
                <div className="col-auto">
                  <p>---</p>
                </div>
              </div>
              <div className={`row ${styles.totalRow}`}>
                <div className="col">Total</div>
                <div className={`col-auto ${styles.price}`}>R$ 150,00</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="text-right">
                <button type="button" className={styles.btnBuy}>
                  Finalizar Compras
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
