import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import OrderContext from './OrderContext';

const OrderContextProvider = ({ children }) => {
  async function fetchData() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const userOrders = await axios
      .get(
        'http://localhost:3001/customer/orders',
        {
          headers: {
            authorization: token,
          },
        },
      ).then((data) => data.data)
      .catch((error) => console.log('erro: ', error));
    return userOrders;
  }

  async function getOrders() {
    const orders = await fetchData();
    return orders;
  }

  const orderContextValue = { getOrders };

  return (
    <OrderContext.Provider value={ orderContextValue }>
      { children }
    </OrderContext.Provider>
  );
};

OrderContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]).isRequired,
};

export default OrderContextProvider;
