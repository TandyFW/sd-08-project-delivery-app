import React from 'react';
import Header from '../../components/Header';

import { clientHeaderLinks } from '../../services/HeaderButtons';

function OrderDetails() {
  return (
    <div>
      <Header dinamicButtons={ clientHeaderLinks } />

    </div>
  );
}

export default OrderDetails;
