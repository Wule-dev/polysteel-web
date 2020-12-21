import React, { useEffect, useState } from 'react';
import styles from './Tabs.module.css';
import { getHomeDestaqData } from '../../services/http-client';
import { HomeDestaqProps } from '../../types';

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getHomeDestaq = async () => {
    const { data } = await getHomeDestaqData(tab.categoryId);
    setUser(data);
  };

  useEffect(() => {
    getHomeDestaq();
  }, [getHomeDestaq, tab]);

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
      <div className="row">
        {Object.entries(user).map((elem, key) => (
          <div className="col-md-4">{elem}</div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
