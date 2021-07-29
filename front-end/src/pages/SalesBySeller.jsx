import React from 'react';
import { lStorage } from '../utils';
import { SalesList, TopBar } from '../components';

const SalesBySeller = () => {
  const savedSeller = lStorage().user.get();
  const { name, token } = savedSeller;
  return (
    <div>
      <TopBar subject="Pedidos" user={ name } />
      <SalesList name={ name } token={ token } />
    </div>);
};
export default SalesBySeller;
