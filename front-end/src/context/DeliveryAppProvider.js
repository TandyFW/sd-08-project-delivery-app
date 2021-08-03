import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryAppContext from './DeliveryAppContext';
import fetchProducts from '../services/fetchProducts';

function DeliveryAppProvider({ children }) {
  const [itemsList, setItemsList] = useState([]);
  const [route, setRoute] = useState('');
  const [cardsList, setCardsList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sellerId, setSellerId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [sellers, setSellers] = useState([]);

  const getRoute = () => {
    const currentRoute = localStorage.getItem('route');
    console.log('getRoute');
    setRoute(currentRoute);
  };

  const rescueStorageList = () => {
    console.log('rescueStorageList');
    console.log(itemsList);
    if (!itemsList.length) {
      const storageList = JSON.parse(localStorage.getItem('currentItemsList'));
      console.log('if');
      if (storageList !== null) return setItemsList(storageList);
    }
    console.log(itemsList);
  };

  const getCardList = async () => {
    const data = await fetchProducts();
    setCardsList(data);
  };

  const getTotalPrice = () => {
    console.log('getTotalPrice');
    const priceList = itemsList.map((item) => +item.itemsPrice);
    const currentTotalPrice = priceList.reduce((cur, acc) => acc + cur, 0).toFixed(2);
    console.log(currentTotalPrice);
    setTotalPrice(currentTotalPrice);
  };

  const getSellers = async () => {
    const data = await fetchSellers();
    return setSellers(data);
  };

  useEffect(() => getTotalPrice(), [itemsList]);

  useEffect(() => {
    getCardList();
    getRoute();
    getSellers();
    rescueStorageList();
  }, []);

  return (
    <DeliveryAppContext.Provider
      value={ {
        itemsList,
        setItemsList,
        route,
        setRoute,
        cardsList,
        setCardsList,
        totalPrice,
        setTotalPrice,
        sellerId,
        setSellerId,
        userId,
        setUserId,
        sellers,
        setSellers,
      } }
    >
      {children}
    </DeliveryAppContext.Provider>
  );
}

DeliveryAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryAppProvider;
