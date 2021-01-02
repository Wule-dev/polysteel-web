import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import api from '../services/api';
import { AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  user: null,
});

export const AuthProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pathname, setPathname] = useState('');

  const router = useRouter();

  const login = async (email: string, password: string): Promise<any> => {
    try {
      const { data: token } = await api.post('/signin', { email, password });
      if (token) {
        Cookies.set('token', token, { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data } = await api.get('/user');
        Cookies.set('user', data, { expires: 60 });
        setUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data: token } = await api.post('/signin', {
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    delete api.defaults.headers.Authorization;
    router.push('/signin');
  };

  useEffect(() => {
    if (router.pathname === '/path' && !user) router.push('/login');
    console.log(user)
  }, [router.pathname]);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading: loading,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
