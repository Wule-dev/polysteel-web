import React, { useContext } from 'react';
import {
  Head,
  Header,
  Footer,
  Breadcrumb,
  MyButton,
} from '../../../components';
import AuthContext from '../../../contexts/auth';

const EditProfile = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Head
        title="Editar Meus Dados"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <MyButton to="/user/home">Minha Conta</MyButton>
        <MyButton to="/user/profile">Meu Perfil</MyButton>
        <span>Editar Meus Dados</span>
      </Breadcrumb>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Editar Perfil</h2>
            <p>Edite suas informações</p>

            <form action="">
              <label htmlFor="name">
                <span>Nome Completo</span>
                <input
                  type="text"
                  id="name"
                  placeholder="Nome Completo"
                  value={user.name}
                />
              </label>
              <p>{`CPF: ${user.cpf}`}</p>
              <label htmlFor="email">
                <span>E-mail</span>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  value={user.email}
                />
              </label>
              <label htmlFor="phone">
                <span>Telefone</span>
                <input
                  type="text"
                  id="phone"
                  placeholder="Telefone"
                  value={user.phone}
                />
              </label>
              <p>
                <button type="submit" className="btn-primary">
                  Salvar
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
