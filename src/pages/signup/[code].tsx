import React from 'react';
import { Head, Address } from '../../components';
import styles from './Signup.module.css';

const SignUp = (): JSX.Element => {
  return (
    <>
      <Head
        title="Validação de Conta"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <div className={`container ${styles.recoverPass}`}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Conclua a validação de sua conta.</h1>
            <p>
              Agora finalize o seu cadastro para acessar sua área
              administrativa.
            </p>
            <form action="/">
              <label htmlFor="cpf">
                <input type="text" placeholder="CPF" id="cpf" />
              </label>
              <Address />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
