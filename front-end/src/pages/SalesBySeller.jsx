import React from 'react';
import { SalesList, TopBar } from '../components';

const SalesBySeller = () => (
  <div>
    <TopBar subject="Pedidos" user="Nome no localStorage" />
    <SalesList />
  </div>);
export default SalesBySeller;
