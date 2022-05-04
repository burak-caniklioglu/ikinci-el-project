import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useProduct } from '../../contexts/ProductContext';
import sendOffer from '../../api/sendOffer';
import ConfirmModal from '../ConfirmModal';

function OfferListInfo({ type, item }) {
  // const typeChange = type === 'receivedOffers';
  const [displayModal, setDisplayModal] = useState(false);
  const {
    product, products, setProduct, setProducts,
  } = useProduct();

  const handlePurchase = async () => {
    await sendOffer.put(`/products/${product.id}`, {
      isSold: true,
      isOfferable: false,
      // users_permissions_user: myID,
    });
    setProduct({ ...product, isSold: true, isOfferable: false });
    setProducts([...products, product]);
  };

  const givenOffered = () => (
    <p className="text-offered">Satıcıdan bilgi bekleniyor</p>
  );

  const givenAccepted = () => (
    <>
      <button
        type="button"
        className="btn-accept"
        onClick={() => {
          setDisplayModal(true);
        }}
      >
        Satın Al
      </button>
      <p className="text-confirm">Onaylandı</p>
      <ConfirmModal
        showModal={displayModal}
        closeModal={() => setDisplayModal(false)}
        callback={handlePurchase}
      />
    </>
  );

  const givenRejected = () => <p className="text-rejected">Reddedildi</p>;
  const givenPurchased = () => <p className="text-purchased">Satın alındı</p>;
  const givenSoldOut = () => <p className="text-soldout">Ürün satıldı</p>;

  const putAcceptOffer = async () => {
    await sendOffer.put(`/offers/${item.id}`, {
      status: 'accepted',
    });
    setProduct({ ...product, isSold: true, isOfferable: false });
    setProducts([...products, product]);
  };
  const postRejectOffer = async () => {
    await sendOffer.put(`/offers/${item.id}`, {
      status: 'rejected',
    });
    setProduct({ ...product, isSold: false, isOfferable: true });
    setProducts([...products, product]);
  };
  const receivedOffered = () => (
    <>
      <button
        type="button"
        className="btn-accept"
        onClick={() => {
          putAcceptOffer(item.id);
        }}
      >
        Onayla
      </button>
      <button
        type="button"
        className="btn-reject"
        onClick={() => {
          postRejectOffer(item.id);
        }}
      >
        Reddet
      </button>
    </>
  );

  const receivedRejected = () => <p className="text-rejected">Reddedildi</p>;
  const receivedAccepted = () => <p className="text-confirm">Onaylandı</p>;
  const receivedPurchased = () => <p className="text-purchased">Satıldı</p>;
  switch (type) {
    case 'givenOffers':
      switch (item.status) {
        case 'accepted':
          if (item.isSold === 'true') {
            return givenPurchased();
          }
          return givenAccepted();
        case 'offered':
          if (item.isSold === 'true') {
            return givenSoldOut();
          }
          return givenOffered();
        default:
          return givenRejected();
      }

    case 'receivedOffers':
      if (item.isSold) {
        if (item.status === 'accepted') {
          return receivedPurchased();
        }
        return receivedRejected();
      }
      switch (item.status) {
        case 'accepted':
          return receivedAccepted();
        case 'rejected':
          return receivedRejected();
        default:
          return receivedOffered();
      }
    default:
      return null;
  }
}

OfferListInfo.propTypes = {
  type: propTypes.string.isRequired,
  item: propTypes.shape().isRequired,
};

export default OfferListInfo;
