/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Head, Header, Footer, Breadcrumb } from '../../components';
import styles from './Contato.module.css';

const Contato = (): JSX.Element => {
  return (
    <>
      <Head
        title="Fale Conosco"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Contato</span>
      </Breadcrumb>
      <div className="container pageContent">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1>Fale Conosco</h1>
            <p>Possuímos uma equipe sempre pronta para lhe antender.</p>
          </div>
          <div className="col-md-8 offset-md-2">
            <label htmlFor="name">
              <input type="text" id="name" placeholder="Nome" />
            </label>
            <label htmlFor="email">
              <input type="text" id="email" placeholder="E-mail" />
            </label>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="phone">
                  <input type="text" id="phone" placeholder="Telefone" />
                </label>
              </div>
              <div className="col-md-6">
                <label htmlFor="order">
                  <input type="text" id="order" placeholder="Pedido" />
                </label>
              </div>
            </div>
            <label htmlFor="message">
              <textarea name="" id="message" cols={30} rows={10} />
            </label>
            <p className="text-right">
              <button type="submit" className="btn-primary">
                Enviar
              </button>
            </p>
          </div>
        </div>
        <div className={`row ${styles.contact}`}>
          <div className="col-md-5 offset-md-1">
            <h2>Atendimento WhatsApp</h2>
            <p>
              Possuímos atendimento especializado via WhatsApp, onde você poderá
              realizar o envio dos arquivos, tirar suas dúvidas sobre os
              produtos e até mesmo solicitar informações sobre o envio de um
              pedido.
            </p>
            <p className="text-center">
              <button type="submit" className={styles.whatsButton}>
                <i className="fab fa-whatsapp" />
                WhatsApp
              </button>
            </p>
          </div>
          <div className="col-md-5">
            <h2>Atendimento Telefônico</h2>
            <ul>
              <li>
                <a href="tel:+551120635366">
                  <i className="fa fa-phone" />
                  (11) 2063-5366
                </a>
              </li>
              <li>
                <a href="tel:+551138063170">
                  <i className="fa fa-phone" />
                  (11) 3806-3170
                </a>
              </li>
              <li>
                <a href="tel:+5511996587395">
                  <i className="fab fa-whatsapp" />
                  (11) 99658-7395
                </a>
              </li>
            </ul>
            <br />
            <p className="therm">
              Atendimento de Seg à Sex, das 08:00 às 18:00
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contato;
