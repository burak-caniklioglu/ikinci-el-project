import React from 'react';
import propTypes from 'prop-types';
import './product.scss';
import { useProduct } from '../../contexts/ProductContext';

function Product({ product }) {
  const { moreClick } = useProduct();
  const {
    brand, color, price, image,
  } = product;
  return (
    <div className="card__item" role="none" onClick={() => moreClick(product)}>
      <figure className="card__item-img">
        <img src={`https://bootcamp.akbolat.net${image?.url}`} alt="item-img" />
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
  product: propTypes.node.isRequired,
};

export default Product;
