import React from 'react';
import Header from '../../components/Header';
import OrderList from '../../components/OrderList';

import { sellerHeaderLinks } from '../../services/HeaderButtons';

function SellerOrders() {
  return (
    <div>
      <Header dinamicButtons={ sellerHeaderLinks } />
      <OrderList />
    </div>
  );
}

export default SellerOrders;
