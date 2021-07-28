import React, { useEffect, useState } from 'react';
import SaleCard from './SaleCard';
import { requestSeller } from '../utils';
// import Components from '../components';

const SalesList = () => {
  // NOme a ser obtido do localStorage
  const name = 'Vini Vasconcelos';

  const [seller, setSeller] = useState({});

  useEffect(() => {
    const getSales = async () => {
      const encodedName = encodeURI(name);
      const sellerRequest = await requestSeller(`sale/${encodedName}`, 'Get');
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
    <div>
      {renderCards()}
    </div>);
};
export default SalesList;
