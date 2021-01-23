import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const ProductsContext = createContext<{
  products: any | null;
  getProducts: () => void;
}>({
  products: null,
  getProducts: () => null,
});

export const ProductsProvider: React.FC = ({ children }: any) => {
  const [products, setProducts] = useState([]);

  const getProducts = async (): Promise<void> => {
    try {
      const { data } = await api.get('/');
      if (data) setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
