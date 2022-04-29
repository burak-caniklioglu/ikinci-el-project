import React from 'react';
import propTypes from 'prop-types';
// import Cookies from 'js-cookie';

function ProductDetailButtons({ product, setOfferModal }) {
  console.log(product);
  // const myId = Cookies.get('myId');
  // const { offers } = product;
  // const [isOffer, setIsOffer] = React.useState(false);
  if (product?.isSold) {
    return (
      <div className="content-btn-area">
        <button type="submit" className="btn sold">Bu Ürün Satışta Değil</button>
      </div>
    );
  }
  return (
    <div className="content-btn-area">
      <button type="submit" className="btn buy">Satın Al</button>
      <button type="submit" className="btn offer" onClick={() => setOfferModal(true)}>Teklif Yap</button>
    </div>

  );
}

ProductDetailButtons.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: propTypes.object.isRequired,
  setOfferModal: propTypes.func.isRequired,
};

export default ProductDetailButtons;
