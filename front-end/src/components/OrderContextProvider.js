import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OrderContext from './OrderContext';

const MOCK_ORDERS = [
  {
    id: 1,
    status: 'pendente',
    date: '02/07/2021',
    total: '9,96',
  },
  {
    id: 2,
    status: 'pendente',
    date: '03/07/2021',
    total: '20,99',
  },
  {
    id: 3,
    status: 'pendente',
    date: '04/07/2021',
    total: '39,90',
  },
  {
    id: 4,
    status: 'pendente',
    date: '05/07/2021',
    total: '15,25',
  },
];

const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState(MOCK_ORDERS);

  useEffect(() => {
    setOrders(MOCK_ORDERS);
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
