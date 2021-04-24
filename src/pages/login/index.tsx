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

  const [emailSignin, setEmailSignin] = useState<string>('');
  const [passwordSignin, setPasswordSignin] = useState<string>('');
  const [emailSignup, setEmailSignup] = useState<string>('');
  const [passwordSignup, setPasswordSignup] = useState<string>('');
  const [nameSignup, setNameSignup] = useState<string>('');

  const handleSignIn = (e) => {
    setinputEmail(false);
    setinputPassword(false);
    e.preventDefault();
    if (!emailSignin) return setinputEmail(true);
    if (!passwordSignin) return setinputPassword(true);
    return login(emailSignin, passwordSignin);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    return join(nameSignup, emailSignup, passwordSignup);
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
            {error && !error.field && (
              <div className="error">
                <i className="fas fa-exclamation-circle" />
                {error.message}
              </div>
            )}
            <form onSubmit={(e) => handleSignIn(e)}>
              <label htmlFor="email">
                <input
                  type="text"
                  placeholder="E-mail"
                  id="email"
                  onChange={(e) => setEmailSignin(e.target.value)}
                  className={
                    (error && error.field === 'loginEmail') || inputEmail
                      ? 'erroInput'
                      : ''
                  }
                />
                {error && error.field === 'loginEmail' && (
                  <div className="error">
                    <i className="fas fa-exclamation-circle" />
                    {error.message}
                  </div>
                )}
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  placeholder="Senha"
                  id="password"
                  onChange={(e) => setPasswordSignin(e.target.value)}
                  className={
                    (error && error.field === 'loginPassword') || inputPassword
                      ? 'erroInput'
                      : ''
                  }
                />
                {error && error.field === 'loginPassword' && (
                  <div className="error">
                    <i className="fas fa-exclamation-circle" />
                    {error.message}
                  </div>
                )}
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
                  onChange={(e) => setNameSignup(e.target.value)}
                />
                {error && error.field === 'registerName' && (
                  <div className="error">
                    <i className="fas fa-exclamation-circle" />
                    {error.message}
                  </div>
                )}
              </label>
              <label htmlFor="emailSignup">
                <input
                  type="text"
                  placeholder="E-mail"
                  id="emailSignup"
                  onChange={(e) => setEmailSignup(e.target.value)}
                />
                {error && error.field === 'registerEmail' && (
                  <div className="error">
                    <i className="fas fa-exclamation-circle" />
                    {error.message}
                  </div>
                )}
              </label>
              <label htmlFor="passwordSignup">
                <input
                  type="password"
                  placeholder="Senha"
                  id="passwordSignup"
                  onChange={(e) => setPasswordSignup(e.target.value)}
                />
                {error && error.field === 'registerPassword' && (
                  <div className="error">
                    <i className="fas fa-exclamation-circle" />
                    {error.message}
                  </div>
                )}
              </label>
              <button type="submit" className="btn-primary">
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
