import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
// import Cookies from 'js-cookie';
import sendOffer from '../../api/sendOffer';
import { useProduct } from '../../contexts/ProductContext';
import axios from '../../api/axios';
import './confirm-modal.scss';

function ConfirmModal({ displayModal, closeModal }) {
  // const myID = Cookies.get('myId');
  const { product, setProduct, setProducts } = useProduct();
  useEffect(() => {
    const closeEscapeKey = (e) => {
      if (displayModal) {
        if (e.keyCode === 27) {
          closeModal();
        }
      }
    };
    document.addEventListener('keydown', closeEscapeKey);
    return () => {
      document.removeEventListener('keydown', closeEscapeKey);
    };
  }, [displayModal, closeModal]);

  const handlePurchase = async () => {
    await sendOffer.put(`/products/${product.id}`, {
      isSold: true,
      isOfferable: false,
      // users_permissions_user: myID,
    });
    const newProduct = await axios(`/products/${product.id}`);
    setProduct(newProduct.data);
    const response = await axios('/products');
    setProducts(response.data);
    closeModal();
  };
  return ReactDOM.createPortal(
    <div className={displayModal ? 'confirm-modal' : 'off-confirm-modal'}>
      <div className="confirm-modal-info">
        <div className="confirm-modal-info-title" id="confirm-modal-title">
          <h2>Satın Al</h2>
        </div>
        <div className="confirm-modal-info-body">
          <p>Satın almak istiyor musunuz?</p>
        </div>
        <div className="confirm-modal-info-footer">
          <button
            type="button"
            className="btn cancel"
            onClick={() => closeModal()}
          >
            Vazgeç
          </button>
          <button
            type="button"
            className="btn confirm"
            onClick={() => {
              handlePurchase();
            }}
          >
            Satın Al
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
}

ConfirmModal.propTypes = {
  showModal: propTypes.bool,
  closeModal: propTypes.func,
};

export default ConfirmModal;
