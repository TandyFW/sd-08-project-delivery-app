import React, { useContext } from 'react';
import OrderTable from '../Table';
import DeliveryContext from '../../context/DeliveryContext';

import { OrderDetailsBody } from './styled';

function OrderDetails() {
  const { cart } = useContext(DeliveryContext);
  const totalPrice = cart.reduce(
    (acc, curr) => (acc + (curr.count * curr.price)), 0,
  ).toFixed(2);

  return (
    <OrderDetailsBody>
      <OrderTable products={ cart } />
      <p>
        {`R$ ${totalPrice}`}
      </p>
    </OrderDetailsBody>
  );
}

export default OrderDetails;
