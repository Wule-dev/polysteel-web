import React from 'react';
import { OrderProps } from '../../types';
import { MyButton } from '..';
import styles from './Orders.module.css';

const Orders: React.FC<OrderProps> = ({
  date,
  price,
  order,
  status,
  fileLayout,
  details,
  children,
}: OrderProps) => {
  const layoutProp =
    status === 'layout-aprovado' || status !== 'pedido-realizado'
      ? styles.checked
      : '';
  const productionProp =
    status === 'em-producao' ||
    (status !== 'pedido-realizado' && status !== 'layout-aprovado')
      ? styles.checked
      : '';
  const manufacturedProp =
    status === 'fabricado' ||
    (status !== 'pedido-realizado' &&
      status !== 'layout-aprovado' &&
      status !== 'em-producao')
      ? styles.checked
      : '';
  const shipRouteProp =
    status === 'em-rota' || status === 'entregue' ? styles.checked : '';
  const shipProp = status === 'entregue' ? styles.checked : '';

  return (
    <div className={`col-md-12 ${styles.Order}`}>
      <div className={`row ${styles.headOrder}`}>
        <div className="col-auto">
          <span>DATA DO PEDIDO</span>
          {date}
        </div>
        <div className="col">
          <span>VALOR</span>
          {price}
        </div>
        <div className="col-auto">
          <span>Nº PEDIDO</span>
          {order}
        </div>
      </div>
      <div className={`row ${styles.orderDetails}`}>
        <div className="col-md-8">{children}</div>
        <div className="col-md-4">
          <button type="button">Relatar Problema</button>
        </div>
      </div>
      {typeof fileLayout !== 'undefined' ? (
        <div className="col-md-12">
          <h2>Teste</h2>
        </div>
      ) : (
        ''
      )}
      {typeof details === 'undefined' ? (
        <>
          <div className={`row ${styles.checkStatus}`}>
            <div className="col-auto">
              <span className={styles.checked}>
                <i className="fas fa-check" />
              </span>
              <p>Pedido Realizado</p>
            </div>
            <div className="col-auto">
              <span className={layoutProp}>
                <i className="fas fa-check" />
              </span>
              <p>Layout Aprovado</p>
            </div>
            <div className="col-auto">
              <span className={productionProp}>
                <i className="fas fa-check" />
              </span>
              <p>Em Produção</p>
            </div>
            <div className="col-auto">
              <span className={manufacturedProp}>
                <i className="fas fa-check" />
              </span>
              <p>Produto Fabricado</p>
            </div>
            <div className="col-auto">
              <span className={shipRouteProp}>
                <i className="fas fa-check" />
              </span>
              <p>Em Rota de Entrega</p>
            </div>
            <div className="col-auto">
              <span className={shipProp}>
                <i className="fas fa-check" />
              </span>
              <p>Entregue</p>
            </div>
          </div>
          <div className={`row ${styles.details}`}>
            <div className="col-md-12 text-center">
              <MyButton to={`/user/order/${order}`}>ver detalhes</MyButton>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Orders;
