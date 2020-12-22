import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [productsMenu, setProductsMenu] = useState({
    active: false,
  });

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-md-auto col">
            <a href="/">
              <img
                src="/images/logo.png"
                alt="Poly-Steel"
                className="img-responsive"
              />
            </a>
          </div>
          <div className={`col-auto ${styles.mobileMenu}`}>
            <a href="/login">
              <i className="fa fa-user" />
            </a>
            <a href="/user">
              <i className="fa fa-shopping-cart" />
            </a>
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
                setProductsMenu({ active: !productsMenu.active });
              }}
            >
              Produtos
              <i className="fa fa-bars" />
            </button>
            <ul
              className={
                productsMenu.active === true ? styles.submenuActive : ''
              }
            >
              <li>
                <span>PLACAS</span>
              </li>
              <li>
                <a href="#a">Placa de Premiação</a>
              </li>
              <li>
                <a href="#a">Placa de Agradecimento</a>
              </li>
              <li>
                <a href="#a">Placa de Parabenizar</a>
              </li>
              <li>
                <a href="#a">Placa de Parabenização</a>
              </li>
              <li>
                <a href="#a">Placa de Tempo de Casa</a>
              </li>
              <li>
                <a href="#a">Placa de Reconhecimento</a>
              </li>
              <li>
                <a href="#a">Placa de Inauguração</a>
              </li>
              <li>
                <a href="#a">Plaquetas</a>
              </li>
              <li>
                <a href="#a">Placa de Identiﬁcação (Interna)</a>
              </li>
              <li>
                <a href="#a">Placa de Identiﬁcação (Externa)</a>
              </li>
              <li>
                <a href="#a">Placa de Sinalização</a>
              </li>
              <li>
                <a href="#a">Placas de Acrílico (Diversos)</a>
              </li>
              <li>
                <a href="#a">Placas de Aço Inox (Diversos)</a>
              </li>
              <li>
                <a href="#a">Placas Diversas</a>
              </li>
              <li>
                <span>Outros</span>
              </li>
              <li>
                <a href="#a">Troféus</a>
              </li>
              <li>
                <a href="#a">Totem</a>
              </li>
              <li>
                <a href="#a">Letra Caixa</a>
              </li>
              <li>
                <a href="#a">Banners</a>
              </li>
              <li>
                <a href="#a">Túmulo/Jazigo</a>
              </li>
              <li>
                <a href="#a">Crachá</a>
              </li>
              <li>
                <a href="#a">Diploma</a>
              </li>
              <li>
                <span>ADESIVOS</span>
              </li>
              <li>
                <a href="#a">Adesivos 1m² entregue sem corte</a>
              </li>
              <li>
                <a href="#a">Adesivo 1m² com corte eletrônico</a>
              </li>
              <li className={styles.allProducts}>
                <a href="/products/">
                  Todos os Produtos
                  <i className="fas fa-arrow-right" />
                </a>
              </li>
            </ul>
            <a href="/login">
              <i className="fa fa-user" />
            </a>
            <a href="/user">
              <i className="fa fa-shopping-cart" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
