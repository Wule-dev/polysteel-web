import React from 'react';
import styles from './Tabs.module.css';

const Tabs: React.FC = () => {
  return (
    <div className="container">
      <div className={styles.tabs}>
        <button type="button" className={styles.buttonActive}>
          Mais Vendidos
        </button>
        <button type="button">Placas de Homenagem</button>
        <button type="button">Placas de Inauguração</button>
        <button type="button">Placas de Inauguração Interna e Externa</button>
      </div>
    </div>
  );
};

export default Tabs;
