import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider, Loading } from '../contexts/auth';
import { ProductProvider } from '../contexts/product';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <Loading>
          <Component {...pageProps} />
        </Loading>
      </ProductProvider>
    </AuthProvider>
  );
};

export default MyApp;
