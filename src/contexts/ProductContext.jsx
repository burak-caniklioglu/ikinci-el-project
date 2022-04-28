/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState('Hepsi');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const moreClick = (product) => {
    navigate(`/productdetail/${product.id}`, { state: { product } });
  };

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
        setProducts,
        moreClick,
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
