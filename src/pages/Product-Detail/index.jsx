import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ProductDetailButtons from '../../components/ProductDetailButtons';
import './product-detail.scss';

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;
  console.log(product);
  const {
    image, name, brand, color, status, price, description,
  } = product;
  return (
    <>
      <Navbar />
      <main className="product-detail-container">
        <div className="product-detail-wrapper">
          <div className="product-detail">
            <figure className="product-detail-img">
              <img src={`https://bootcamp.akbolat.net${image.url}`} alt="product-img" />
            </figure>
            <div className="product-detail-content">
              <div className="content-title">{name}</div>
              <div className="content-info">
                <p className="content-info-brand">
                  <span className="strong">Marka:</span>
                  {brand}

                </p>
                <p className="content-info-color">
                  <span className="strong">Renk:</span>
                  {color}
                </p>
                <p className="content-info-status">
                  <span className="strong">Kullanım Durumu:</span>
                  {status}
                </p>
              </div>
              <div className="content-price">
                {price}
                {' '}
                TL
              </div>
              <ProductDetailButtons />
              <div className="content-desc">
                <p className="strong">Açıklama</p>
                <p className="content-desc-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductDetail;
