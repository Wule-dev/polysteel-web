import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider, Loading } from '../contexts/auth';
import { ProductsProvider } from '../contexts/product';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <Loading>
          <Component {...pageProps} />
        </Loading>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default MyApp;
