import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { MyButton } from '../..';

const Header: React.FC = () => {
  const [productsMenu, setProductsMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-md-auto col">
<<<<<<< HEAD
            <MyButton to="/">
=======
            <Link href="/">
>>>>>>> b92afcadb1305a227a7a60b5d98d1489916ae625
              <img
                src="/images/logo.png"
                alt="Poly-Steel"
                className="img-responsive"
              />
<<<<<<< HEAD
            </MyButton>
          </div>
          <div className={`col-auto ${styles.mobileMenu}`}>
            <MyButton to="/login">
              <i className="fa fa-user" />
            </MyButton>
            <MyButton to="/cart">
              <i className="fa fa-shopping-cart" />
            </MyButton>
=======
            </Link>
          </div>
          <div className={`col-auto ${styles.mobileMenu}`}>
            <Link href="/login">
              <i className="fa fa-user" />
            </Link>
            <Link href="/cart">
              <i className="fa fa-shopping-cart" />
            </Link>
>>>>>>> b92afcadb1305a227a7a60b5d98d1489916ae625
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
<<<<<<< HEAD
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
=======
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
>>>>>>> b92afcadb1305a227a7a60b5d98d1489916ae625
              </li>
              <li>
                <span>Outros</span>
              </li>
              <li>
<<<<<<< HEAD
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
=======
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
>>>>>>> b92afcadb1305a227a7a60b5d98d1489916ae625
              </li>
              <li>
                <span>ADESIVOS</span>
              </li>
              <li>
<<<<<<< HEAD
                <MyButton to="#a">Adesivos 1m² entregue sem corte</MyButton>
              </li>
              <li>
                <MyButton to="#a">Adesivo 1m² com corte eletrônico</MyButton>
=======
                <Link href="#a">Adesivos 1m² entregue sem corte</Link>
              </li>
              <li>
                <Link href="#a">Adesivo 1m² com corte eletrônico</Link>
>>>>>>> b92afcadb1305a227a7a60b5d98d1489916ae625
              </li>
              <li className={styles.allProducts}>
                <MyButton to="/products/">
                  Todos os Produtos
                  <i className="fas fa-arrow-right" />
                </MyButton>
              </li>
            </ul>
<<<<<<< HEAD
            <MyButton to="/login">
              <i className="fa fa-user" />
            </MyButton>
            <MyButton to="/cart">
              <i className="fa fa-shopping-cart" />
            </MyButton>
=======
            <Link href="/login">
              <i className="fa fa-user" />
            </Link>
            <Link href="/cart">
              <i className="fa fa-shopping-cart" />
            </Link>
>>>>>>> b92afcadb1305a227a7a60b5d98d1489916ae625
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
