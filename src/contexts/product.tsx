import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext<any>({
  product: null,
});

export const ProductProvider: React.FC = ({ children }: any) => {
  const [product, setProduct] = useState(null);

  const getProduct = async (): Promise<void> => {
    try {
      await fetch('http://localhost:3001/products.json')
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setProduct(response);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ product, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
