import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const ProductsContext = createContext<{
  products: any | null;
  currentProduct: any;
  getProducts: () => void;
  getProductByQuery: (id: string) => void;
}>({
  products: null,
  currentProduct: null,
  getProducts: () => null,
  getProductByQuery: () => null,
});

export const ProductsProvider: React.FC = ({ children }: any) => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});

  const getProducts = async (): Promise<void> => {
    try {
      const { data } = await api.get('/');
      if (data) setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductByQuery = (id) => {
    const selected = products.find((product) => {
      return product.id === id;
    });
    setCurrentProduct(selected);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, currentProduct, getProducts, getProductByQuery }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
