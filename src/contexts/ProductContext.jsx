/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState('Hepsi');
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const moreClick = (item) => {
    navigate(`/productdetail/${item.id}`);
    setProduct(item);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('/products');
      setProducts(response.data);
    };
    getProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        products,
        setProducts,
        product,
        setProduct,
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
