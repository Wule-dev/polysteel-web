import React, { useState } from 'react';
import styles from './Header.module.css';
import { MyButton } from '../..';

const Header: React.FC = () => {
  const [productsMenu, setProductsMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-md-auto col">
            <MyButton to="/">
              <img
                src="/images/logo.png"
                alt="Poly-Steel"
                className="img-responsive"
              />
            </MyButton>
          </div>
          <div className={`col-auto ${styles.mobileMenu}`}>
            <MyButton to="/login">
              <i className="fa fa-user" />
            </MyButton>
            <MyButton to="/cart">
              <i className="fa fa-shopping-cart" />
            </MyButton>
          </div>
          <div className={`${styles.searchInput} col-md`}>
            <div>
              <input
                type="text"
                placeholder="Pesquise por produtos..."
                className={styles.searchBox}
              />
              <button type="submit" className={styles.searchBtn}>
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
          <div className={`${styles.iconsMenu} col-md-3`}>
            <button
              type="button"
              className={styles.productBtn}
              onClick={() => {
                setProductsMenu(!productsMenu);
              }}
            >
              Produtos
              <i className="fa fa-bars" />
            </button>
            <ul className={productsMenu ? styles.submenuActive : ''}>
              <li>
                <span>PLACAS</span>
              </li>
              <li>
                <MyButton to="/cart/teste">Placa de Premiação</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Agradecimento</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Parabenizar</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Parabenização</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Tempo de Casa</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Reconhecimento</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Inauguração</MyButton>
              </li>
              <li>
                <MyButton to="#a">Plaquetas</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Identiﬁcação (Interna)</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Identiﬁcação (Externa)</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placa de Sinalização</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placas de Acrílico (Diversos)</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placas de Aço Inox (Diversos)</MyButton>
              </li>
              <li>
                <MyButton to="#a">Placas Diversas</MyButton>
              </li>
              <li>
                <span>Outros</span>
              </li>
              <li>
                <MyButton to="#a">Troféus</MyButton>
              </li>
              <li>
                <MyButton to="#a">Totem</MyButton>
              </li>
              <li>
                <MyButton to="#a">Letra Caixa</MyButton>
              </li>
              <li>
                <MyButton to="#a">Banners</MyButton>
              </li>
              <li>
                <MyButton to="#a">Túmulo/Jazigo</MyButton>
              </li>
              <li>
                <MyButton to="#a">Crachá</MyButton>
              </li>
              <li>
                <MyButton to="#a">Diploma</MyButton>
              </li>
              <li>
                <span>ADESIVOS</span>
              </li>
              <li>
                <MyButton to="#a">Adesivos 1m² entregue sem corte</MyButton>
              </li>
              <li>
                <MyButton to="#a">Adesivo 1m² com corte eletrônico</MyButton>
              </li>
              <li className={styles.allProducts}>
                <MyButton to="/products/">
                  Todos os Produtos
                  <i className="fas fa-arrow-right" />
                </MyButton>
              </li>
            </ul>
            <MyButton to="/login">
              <i className="fa fa-user" />
            </MyButton>
            <MyButton to="/cart">
              <i className="fa fa-shopping-cart" />
            </MyButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
