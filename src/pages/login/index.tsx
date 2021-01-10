import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../contexts/auth';
import { Head, Header, Footer, Breadcrumb } from '../../components';

const Products: React.FC = () => {
  const { login, logout, join, error } = useContext(AuthContext);
  const [inputEmail, setinputEmail] = useState<boolean>(false);
  const [inputPassword, setinputPassword] = useState<boolean>(false);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailJoin, setEmailJoin] = useState<string>('');
  const [passwordJoin, setPasswordJoin] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSignIn = (e) => {
    setinputEmail(false);
    setinputPassword(false);
    e.preventDefault();
    if (!email) return setinputEmail(true);
    if (!password) return setinputPassword(true);
    return login(email, password);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    return join(name, emailJoin, passwordJoin);
  };

  return (
    <>
      <Head
        title="Login"
        description="A Poly-Steel oferece diversas opções de serviços gráficos como Placas de Homenagem, Placas de Aço Inox, Letras Caixa e mais."
        keywords="placa de homenagem, placa de aço, troféus, banners, letras caixa, gráfica, gráfica rápida, placas adesivadas, placas com molduras, gráfica em são paulo, melhor serviço de gráfica em são paulo, melhor gráfica, gráfica mais rápida, melhor preço em placa em aço inox"
      />
      <Header />
      <Breadcrumb>
        <span>Login</span>
      </Breadcrumb>
      <div className="container pageContent">
        <div className="row">
          <div className="col-md-5 offset-md-1">
            <h2>Já sou cadastrado</h2>
            {error ? (
              <div className="error">
                <i className="fas fa-exclamation-circle" />
                {error.message}
              </div>
            ) : (
              ''
            )}
            <form onSubmit={(e) => handleSignIn(e)}>
              <label htmlFor="email">
                <input
                  type="text"
                  placeholder="E-mail"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputEmail ? 'erroInput' : ''}
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  placeholder="Senha"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputPassword ? 'erroInput' : ''}
                />
              </label>
              <button type="submit" className="btn-primary">
                Entrar
              </button>
            </form>
          </div>
          <div className="col-md-5 offset-md-1">
            <h2>Ainda não sou cadastrado</h2>
            <form onSubmit={(e) => handleSignUp(e)}>
              <label htmlFor="name">
                <input
                  type="text"
                  placeholder="Nome"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="emailJoin">
                <input
                  type="text"
                  placeholder="E-mail"
                  id="emailJoin"
                  onChange={(e) => setEmailJoin(e.target.value)}
                />
              </label>
              <label htmlFor="passwordJoin">
                <input
                  type="password"
                  placeholder="Senha"
                  id="passwordJoin"
                  onChange={(e) => setPasswordJoin(e.target.value)}
                />
              </label>
              <button
                type="submit"
                className="btn-primary"
                onClick={() => logout()}
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
