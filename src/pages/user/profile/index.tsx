import React, { useContext } from 'react';
import {
  Head,
  Header,
  Footer,
  Breadcrumb,
  MyButton,
} from '../../../components';
import AuthContext from '../../../contexts/auth';
import styles from './Profile.module.css';

const HomeUser = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Head
        title="Meus Dados"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <MyButton to="/user/home">Minha Conta</MyButton>
        <span>Meus Dados</span>
      </Breadcrumb>
      <div className={`container pageContent ${styles.view}`}>
        <div className="row">
          <div className="col-md-6">
            <h1>
              Meus Dados
              <MyButton to="/user/edit-profile/">Alterar</MyButton>
            </h1>
            <p>
              <span>Nome</span>
              {user.name}
            </p>
            <p>
              <span>CPF</span>
              {user.cpf}
            </p>
            <p>
              <span>E-mail</span>
              {user.email}
            </p>
            <p>
              <span>Telefone</span>
              {user.phone}
            </p>
          </div>
          <div className="col-md-6">
            {user.company ? (
              <>
                <h1>
                  Empresa
                  <MyButton to="/edit">Alterar</MyButton>
                </h1>
                <p>
                  <span>Nome</span>
                  Doceria LTDA
                </p>
                <p>
                  <span>CNPJ</span>
                  xx. xxx/0001-??
                </p>
                <p>
                  <span>E-mail</span>
                  teste@teste.com.br
                </p>
                <p>
                  <span>Telefone</span>
                  (11) 90000-0000
                </p>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Endereços</h2>
          </div>
          <div className={`col-md-4 ${styles.addCard}`}>
            <MyButton to="/user/address/add">Adicionar Novo</MyButton>
          </div>
          <div className={`col-md-4 ${styles.card}`}>
            <div>
              <p>
                {user.address.street}
                <br />
                {user.address.neighborhood}
                <br />
                {`${user.address.city} - ${user.address.state}`}
                <br />
                {user.address.cep}
              </p>
              <div className={styles.controls}>
                <MyButton to="/user/address/edit">Alterar</MyButton>
                <MyButton to="/user/address/exclude">Excluir</MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeUser;
