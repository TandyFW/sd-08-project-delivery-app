import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import OrderContext from './OrderContext';

const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    async function fetchData() {
      const userOrders = await axios
        .get(
          'http://localhost:3001/customer/orders',
          {},
          {
            headers: {
              authorization: token,
            },
          },
        ).then((data) => data.data)
        .catch((error) => console.log('erro: ', error));
      setOrders(userOrders);
      console.log('orders: ', orders);
    }
    fetchData();
  }, []);

  const orderContextValue = { orders };

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
