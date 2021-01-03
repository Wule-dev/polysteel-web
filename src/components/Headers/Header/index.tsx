import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [productsMenu, setProductsMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-md-auto col">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Poly-Steel"
                className="img-responsive"
              />
            </Link>
          </div>
          <div className={`col-auto ${styles.mobileMenu}`}>
            <Link href="/login">
              <i className="fa fa-user" />
            </Link>
            <Link href="/cart">
              <i className="fa fa-shopping-cart" />
            </Link>
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
              Produtoss
              <i className="fa fa-bars" />
            </button>
            <ul className={productsMenu ? styles.submenuActive : ''}>
              <li>
                <span>PLACAS</span>
              </li>
              <li>
                <Link href="/cart/teste">Placa de Premiação</Link>
              </li>
              <li>
                <Link href="#a">Placa de Agradecimento</Link>
              </li>
              <li>
                <Link href="#a">Placa de Parabenizar</Link>
              </li>
              <li>
                <Link href="#a">Placa de Parabenização</Link>
              </li>
              <li>
                <Link href="#a">Placa de Tempo de Casa</Link>
              </li>
              <li>
                <Link href="#a">Placa de Reconhecimento</Link>
              </li>
              <li>
                <Link href="#a">Placa de Inauguração</Link>
              </li>
              <li>
                <Link href="#a">Plaquetas</Link>
              </li>
              <li>
                <Link href="#a">Placa de Identiﬁcação (Interna)</Link>
              </li>
              <li>
                <Link href="#a">Placa de Identiﬁcação (Externa)</Link>
              </li>
              <li>
                <Link href="#a">Placa de Sinalização</Link>
              </li>
              <li>
                <Link href="#a">Placas de Acrílico (Diversos)</Link>
              </li>
              <li>
                <Link href="#a">Placas de Aço Inox (Diversos)</Link>
              </li>
              <li>
                <Link href="#a">Placas Diversas</Link>
              </li>
              <li>
                <span>Outros</span>
              </li>
              <li>
                <Link href="#a">Troféus</Link>
              </li>
              <li>
                <Link href="#a">Totem</Link>
              </li>
              <li>
                <Link href="#a">Letra Caixa</Link>
              </li>
              <li>
                <Link href="#a">Banners</Link>
              </li>
              <li>
                <Link href="#a">Túmulo/Jazigo</Link>
              </li>
              <li>
                <Link href="#a">Crachá</Link>
              </li>
              <li>
                <Link href="#a">Diploma</Link>
              </li>
              <li>
                <span>ADESIVOS</span>
              </li>
              <li>
                <Link href="#a">Adesivos 1m² entregue sem corte</Link>
              </li>
              <li>
                <Link href="#a">Adesivo 1m² com corte eletrônico</Link>
              </li>
              <li className={styles.allProducts}>
                <a href="/products/">
                  Todos os Produtos
                  <i className="fas fa-arrow-right" />
                </a>
              </li>
            </ul>
            <Link href="/login">
              <i className="fa fa-user" />
            </Link>
            <Link href="/cart">
              <i className="fa fa-shopping-cart" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
