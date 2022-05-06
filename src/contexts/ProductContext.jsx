/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from '../api/axios';
import sendOffer from '../api/sendOffer';

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState('Hepsi');
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [usingStatus, setUsingStatus] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [givenOffers, setGivenOffers] = useState([]);
  const [receivedOffers, setReceivedOffers] = useState([]);

  const navigate = useNavigate();
  const moreClick = (item) => {
    navigate(`/productdetail/${item?.id}`);
    setProduct(item);
  };

  const getProducts = async () => {
    const response = await axios.get('/products');
    setProducts(response.data);
  };

  const handleGivenOffers = async () => {
    const myID = Cookies.get('myId');
    const response = await sendOffer.get(`/offers?users_permissions_user=${myID}`);
    setGivenOffers(response.data);
  };
  const handleReceivedOffers = async () => {
    const myID = Cookies.get('myId');
    const response = await sendOffer.get(`/products?users_permissions_user=${myID}`);
    setReceivedOffers(response.data);
  };
  useEffect(() => {
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
        categories,
        setCategories,
        colors,
        setColors,
        brands,
        setBrands,
        usingStatus,
        setUsingStatus,
        getProducts,
        givenOffers,
        setGivenOffers,
        receivedOffers,
        setReceivedOffers,
        handleGivenOffers,
        handleReceivedOffers,
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
