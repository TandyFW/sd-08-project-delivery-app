import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OrderCard from './OrderCard';
import { request } from '../utils';

const OrdersList = ({ name, token, title }) => {
  const [user, setUser] = useState({});

  const uri = (title === 'customer' ? 'purchase' : 'sale');

  useEffect(() => {
    const getSales = async () => {
      const encodedName = encodeURI(name);
      const options = {
        headers: {
          Authorization: token,
        },
        method: 'GET',
      };
      const userRequest = await request(`${uri}/${encodedName}`, options);
      setUser(userRequest);
    };
    getSales();
  }, [name, token, uri]);

  const renderCards = () => {
    const orders = (title === 'customer' ? 'purchases' : 'sales');
    if (user[orders]) {
      return user[orders].map((order) => (
        <OrderCard
          key={ order.id }
          order={ order }
          title={ title }
        />));
    }
  };

  return (
    <>
      {renderCards()}
    </>);
};

OrdersList.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default OrdersList;
