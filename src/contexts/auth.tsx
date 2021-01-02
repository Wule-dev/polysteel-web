import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import api from '../services/api';
import { AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const { data: token } = await api.post('/signin', { email, password });
      if (token) {
        Cookies.set('token', token, { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data } = await api.get('/user');
        if (data) {
          Cookies.set('user', data, { expires: 60 });
          setUser(data);
          router.push('/cart');
        }
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('user');
    setUser(null);
    delete api.defaults.headers.Authorization;
    router.push('/login');
  };

  useEffect(() => {
    if (router.pathname === '/cart' && !user) router.push('/login'); // TODO: criar padrão de pathname para rota autenticada (está como 'cart' temporariamente)
  }, [router, user]);

  useEffect(() => {
    setLoading(true);
    const token = Cookies.get('token');
    if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
    if (!user) {
      const currentUser = Cookies.get('user');
      if (currentUser) setUser(JSON.parse(currentUser));
    }
    setLoading(false);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const Loading: React.FC = ({ children }: any) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <div style={{ backgroundColor: 'red' }}>Carregando</div>;
  }
  return children;
};

export default AuthContext;
