import React from 'react';

import Header from '../../components/Header';
import OrderDetail from '../../components/OrderDetail';

import { sellerHeaderLinks } from '../../services/HeaderButtons';

function OrderDetails() {
  return (
    <div>
      <Header dinamicButtons={ sellerHeaderLinks } />
      <OrderDetail />
    </div>
  );
}

export default OrderDetails;
