import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SaleCard from './SaleCard';
import { request } from '../utils';
// import Components from '../components';

const SalesList = ({ name, token }) => {
  const [seller, setSeller] = useState({});

  useEffect(() => {
    const getSales = async () => {
      const encodedName = encodeURI(name);
      const options = {
        headers: {
          Authorization: token,
        },
        method: 'GET',
      };
      const sellerRequest = await request(`sale/${encodedName}`, options);
      setSeller(sellerRequest);
    };
    getSales();
  }, []);

  const renderCards = () => {
    if (seller.sales) {
      console.log(seller.sales);
      return seller.sales.map((sale) => (<SaleCard key={ sale.id } sale={ sale } />));
    }
  };

  return (
    <>
      {renderCards()}
    </>);
};

SalesList.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default SalesList;
