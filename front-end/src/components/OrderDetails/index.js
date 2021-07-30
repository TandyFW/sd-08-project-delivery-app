import React, { useContext } from 'react';
import OrderTable from '../Table';
import DeliveryContext from '../../context/DeliveryContext';

import { OrderDetailsBody, TotalPrice } from './styled';

const testIds = {
  item: 'customer_checkout__element-order-table-item-number-',
  name: 'customer_checkout__element-order-table-name-',
  quantity: 'customer_checkout__element-order-table-quantity-',
  price: 'customer_checkout__element-order-table-unit-price-',
  subTotal: 'customer_checkout__element-order-table-sub-total-',
  remove: 'customer_checkout__element-order-table-remove-',
  total: 'customer_checkout__element-order-total-price',
};

function OrderDetails() {
  const { cart } = useContext(DeliveryContext);
  const totalPrice = cart.reduce(
    (acc, curr) => (acc + (curr.count * curr.price)), 0,
  ).toFixed(2);

  return (
    <OrderDetailsBody>
      <OrderTable products={ cart } testIds={ testIds } />
      <TotalPrice>
        Total: R$
        <span>{totalPrice.replace('.', ',')}</span>
      </TotalPrice>
    </OrderDetailsBody>
  );
}

export default OrderDetails;
