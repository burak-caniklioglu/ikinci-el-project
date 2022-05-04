import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ProfilePicture from '../../constants/icons/ProfilePicture';
import OfferTabs from '../../components/AccountOfferTabs';
import sendOffer from '../../api/sendOffer';
import OfferListItem from '../../components/AccountOfferList-Item';
import './account.scss';

function Account() {
  const email = Cookies.get('user');
  const myID = Cookies.get('myId');
  const [selectedTab, setSelectedTab] = useState('receivedOffers');
  const [givenOffers, setGivenOffers] = useState([]);
  const [receivedOffers, setReceivedOffers] = useState([]);

  useEffect(() => {
    let mounted = true;
    const handleGivenOffers = async () => {
      const response = await sendOffer.get(`/offers?users_permissions_user=${myID}`);
      setGivenOffers(response.data);
    };
    const handleReceivedOffers = async () => {
      const response = await sendOffer.get(`/products?users_permissions_user=${myID}`);
      setReceivedOffers(response.data);
    };
    if (mounted) {
      handleGivenOffers();
      handleReceivedOffers();
    }
    return () => {
      mounted = false;
    };
  }, []);

  let renderList;
  if (selectedTab === 'receivedOffers') {
    renderList = receivedOffers;
  }

  if (selectedTab === 'givenOffers') {
    renderList = givenOffers;
  }

  return (
    <>
      <Navbar />
      <div className="account-container">
        <div className="account-wrapper">
          <div className="account-info">
            <div className="account-info-wrapper">
              <figure>
                <ProfilePicture />
              </figure>
              <p>{email}</p>
            </div>
          </div>
          <div className="account-content">
            <div className="account-content-wrapper">
              <OfferTabs
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
              <div className="offer-list">
                {renderList
                && renderList.map((offer) => (
                  <OfferListItem
                    item={offer}
                    type={selectedTab}
                    key={offer.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
