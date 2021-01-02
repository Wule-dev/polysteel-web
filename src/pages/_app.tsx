import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/auth';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
