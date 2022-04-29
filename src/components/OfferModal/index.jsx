import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import Cookies from 'js-cookie';
import sendOffer from '../../api/sendOffer';
import './offer-modal.scss';

function OfferModal({ displayModal, closeModal, product }) {
  const [selectedOption, setSelectedOption] = useState(0);
  const [offer, setOffer] = useState({ offeredPrice: 0 });
  const [customPrice, setCustomPrice] = useState('');
  const [isValid, setIsValid] = useState(true);
  const myID = Cookies.get('myId');

  useEffect(() => {
    setIsValid(customPrice.match(/^\d+$/) !== null);
  }, [customPrice]);

  useEffect(() => {
    switch (selectedOption) {
      case 0:
        setOffer({ offeredPrice: product.price * 0.2 });
        setCustomPrice('');
        break;
      case 1:
        setOffer({ offeredPrice: product.price * 0.3 });
        setCustomPrice('');
        break;
      case 2:
        setOffer({ offeredPrice: product.price * 0.4 });
        setCustomPrice('');
        break;
      default:
        setOffer({ offeredPrice: parseFloat(customPrice) });
        break;
    }

    return () => {};
  }, [customPrice, product.price, selectedOption]);

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

  const handleSubmit = () => {
    if (selectedOption === 3 && isValid && customPrice !== '') {
      sendOffer.post('/offers', {
        product: product.id,
        offerPrice: parseFloat(customPrice),
        users_permissions_user: myID,
      });
      closeModal();
    }
    if (selectedOption !== 3) {
      sendOffer.post('/offers', {
        product: product.id,
        offerPrice: offer.offeredPrice,
        users_permissions_user: myID,
      });
      closeModal();
    }
  };

  const {
    image, name, price,
  } = product;
  return ReactDOM.createPortal(
    <main className={displayModal ? 'modal-wrapper ' : 'off-modal-wrapper'}>
      <section className="modal-info">
        <div className="modal-info-container">
          <div className="modal-info-title">
            <h2>Teklif Ver</h2>
            <span onClick={() => closeModal()} role="none">X</span>
          </div>
          <div className="modal-info-body">
            <div className="product-info">
              <div className="product-info-left">
                <img src={`https://bootcamp.akbolat.net${image.url}`} alt={name} />
                <p className="product-title">
                  {name}
                </p>
              </div>
              <p className="product-price">
                {price}
                {' '}
                {' '}
                TL
              </p>
            </div>
            <div className="offer-options">
              <div
                role="none"
                onClick={() => setSelectedOption(0)}
                className={`option ${selectedOption === 0 ? 'selected' : ''}`}
              >
                <span className="checkbox" />
                <span>%20&apos;si Kadar Teklif Ver</span>
              </div>
              <div
                role="none"
                onClick={() => setSelectedOption(1)}
                className={`option ${selectedOption === 1 ? 'selected' : ''}`}
              >
                <span className="checkbox" />
                <span>%30&apos;si Kadar Teklif Ver</span>
              </div>
              <div
                role="none"
                onClick={() => setSelectedOption(2)}
                className={`option ${selectedOption === 2 ? 'selected' : ''}`}
              >
                <span className="checkbox" />
                <span>%40&apos;si Kadar Teklif Ver</span>
              </div>
              <div
                role="none"
                onClick={() => setSelectedOption(3)}
                className={`option custom-offer offer-container ${
                  selectedOption === 3 && isValid ? 'selected' : ''
                } ${
                  selectedOption === 3 && customPrice && !isValid
                    ? 'selected-notValid'
                    : ''
                }

              `}
              >
                <div className="custom-offer">
                  <input
                    type="text"
                    name="offeredPrice"
                    placeholder="Teklif belirle"
                    value={customPrice}
                    onChange={(e) => setCustomPrice(e.target.value)}
                    autoComplete="off"
                  />
                  <p>TL</p>
                </div>
              </div>
              {selectedOption === 3 && customPrice && !isValid && (
              <span className="validation-warning">
                Geçerli bir tutar giriniz! (Örnek: 1234.56)
              </span>
              )}
            </div>
          </div>
          <div className="modal-content-footer">
            <button
              type="button"
              className="btn btn-offer"
              onClick={() => {
                handleSubmit();
              }}
            >
              Onayla
            </button>
          </div>
        </div>

      </section>
    </main>,
    document.getElementById('modal'),
  );
}
OfferModal.propTypes = {
  displayModal: propTypes.bool.isRequired,
  closeModal: propTypes.func.isRequired,
  id: propTypes.number,
};

export default OfferModal;
