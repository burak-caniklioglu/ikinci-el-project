/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../api/axios';

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState('Hepsi');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('/products');
      setProducts(response.data);
      console.log(response.data);
    };
    getProducts();
  }, [activeCategory]);
  return (
    <ProductContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useProduct() {
  return useContext(ProductContext);
}

export { ProductContext, ProductProvider, useProduct };
