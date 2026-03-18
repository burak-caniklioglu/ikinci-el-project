import React from 'react';
import propTypes from 'prop-types';
import './product.scss';
import { useProduct } from '../../contexts/ProductContext';
import UndefinedProduct from '../../constants/images/undefinedProduct.webp';
import getImageUrl from '../../helper funcs/getImageUrl';

function Product({ product }) {
  const { moreClick } = useProduct();
  const {
    brand, color, price, image,
  } = product;
  const imageUrl = getImageUrl(image);
  return (
    <div className="card__item" role="none" onClick={() => moreClick(product)}>
      <figure className="card__item-img">
        <img src={imageUrl || UndefinedProduct} alt="item-img" />
      </figure>
      <div className="card__item-content">
        <div className="card__item-info">
          <p className="card__item-info-brand">{brand}</p>
          <p className="card__item-info-color">
            <b>Renk: </b>
            {color}
          </p>
        </div>
        <div className="card__item-price">{price}</div>
      </div>
    </div>
  );
}
Product.propTypes = {
  product: propTypes.shape().isRequired,
};

export default Product;
