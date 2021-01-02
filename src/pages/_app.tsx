import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider, Loading } from '../contexts/auth';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Loading>
        <Component {...pageProps} />
      </Loading>
    </AuthProvider>
  );
};

export default MyApp;
