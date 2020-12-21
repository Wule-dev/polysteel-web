import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-md-auto">
            <img src="./images/logo.png" alt="PolySteel" />
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
            <a href="/products" className={styles.productBtn}>
              Produtos
              <i className="fa fa-bars" />
            </a>
            <a href="/user">
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
