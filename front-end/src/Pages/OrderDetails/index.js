import React from 'react';

import Header from '../../components/Header';
import OrderDetail from '../../components/OrderDetail';

import { clientHeaderLinks } from '../../services/HeaderButtons';

function OrderDetails() {
  return (
    <div>
      <Header dinamicButtons={ clientHeaderLinks } />
      <OrderDetail />
    </div>
  );
}

export default OrderDetails;
