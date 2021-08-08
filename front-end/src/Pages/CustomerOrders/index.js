import React from 'react';
import Header from '../../components/Header';
import OrderList from '../../components/OrderList';

import { clientHeaderLinks } from '../../services/HeaderButtons';

function CustomerOrders() {
  return (
    <div>
      <Header dinamicButtons={ clientHeaderLinks } />
      <OrderList />
    </div>
  );
}

export default CustomerOrders;
