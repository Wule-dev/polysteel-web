import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBars,
  faUser,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">Teste</div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Pesquise por produtos..."
              className={styles.searchBox}
            />
            <button type="submit" className={styles.searchBtn}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className={`${styles.iconsMenu} col-md-3`}>
            <a href="/products" className={styles.productBtn}>
              Produtos
              <FontAwesomeIcon icon={faBars} />
            </a>
            <a href="/user">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a href="/user">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
