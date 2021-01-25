import React, { useEffect, useState } from 'react';
import styles from './Tabs.module.css';
import { getHomeDestaqData } from '../../services/http-client';
import { HomeDestaqProps } from '../../types';
import { MyButton } from '..';

const Tabs = (): JSX.Element => {
  const [user, setUser] = useState<HomeDestaqProps>({
    avatar_url: null,
    name: null,
    email: null,
    header: null,
  });

  const [tab, setTab] = useState({
    categoryId: 'wueliton',
  });

  const getHomeDestaq = async () => {
    const { data } = await getHomeDestaqData(tab.categoryId);
    setUser(data);
  };

  useEffect(() => {
    getHomeDestaq();
  }, []);

  return (
    <div className="container">
      <div className={styles.tabs}>
        <button
          type="button"
          onClick={() => setTab({ categoryId: 'wueliton' })}
          className={tab.categoryId === 'wueliton' ? styles.buttonActive : ''}
        >
          Mais Vendidos
        </button>
        <button
          type="button"
          onClick={() => setTab({ categoryId: 'devleonardorabelo' })}
          className={
            tab.categoryId === 'devleonardorabelo' ? styles.buttonActive : ''
          }
        >
          Placas de Homenagem
        </button>
        <button
          type="button"
          onClick={() => setTab({ categoryId: 'diego3g' })}
          className={tab.categoryId === 'diego3g' ? styles.buttonActive : ''}
        >
          Placas de Inauguração
        </button>
        <button
          type="button"
          onClick={() => setTab({ categoryId: 'evelynhelena' })}
          className={
            tab.categoryId === 'evelynhelena' ? styles.buttonActive : ''
          }
        >
          Placas de Inauguração Interna e Externa
        </button>
      </div>
      <div className={`row ${styles.tabContent}`}>
        <div className="col-md-3">
          <MyButton to="/product/placahomenagem">
            <img
              src="/images/placa-inauguracao.jpg"
              alt="Placa Homenagem"
              className="img-responsive"
            />
            <p>PLACAS DE HOMENAGEM</p>
            <div className={styles.price}>
              A partir de
              <span>R$ 150,00</span>
            </div>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
