import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getSaleById } from '../../services/api';
import SaleInfo from '../SaleInfo';
// import OrderCard from '../OrderCard';
import OrderTable from '../Table';
import OrderListBody from './styled';

const fakeOrders = [
  { id: 1,
    status: 'pendente',
    date: '01/01/2001',
    price: '4.59',
    name: 'test item 1',
    count: 18 },
  { id: 1,
    status: 'entregue',
    date: '01/01/2001',
    price: '5.59',
    name: 'test item 2',
    count: 18 },
];
const testIds = {
  item: 'customer_order_details__element-order-table-item-number-',
  name: 'customer_order_details__element-order-table-name-',
  quantity: 'customer_order_details__element-order-table-quantity-',
  price: 'customer_order_details__element-order-table-unit-price-',
  subTotal: 'customer_order_details__element-order-table-sub-total-',
  remove: '',
};

function OrderDetail() {
  const location = useLocation();
  const [sale, setSale] = useState(null);
  const saleId = location.pathname.split('/')[3];

  useEffect(() => {
    getSaleById(saleId).then((response) => setSale(response));
  }, [saleId]);

  const totalPrice = fakeOrders.reduce(
    (acc, curr) => (acc + (curr.count * curr.price)), 0,
  ).toFixed(2);

  return (
    <OrderListBody>

      {sale
      && (
        <>
          <SaleInfo sale={ sale.sales } />
          <OrderTable
            products={ sale.sales.Products }
            testIds={ testIds }
            remove={ false }
          />
        </>)}
      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        {totalPrice.replace('.', ',')}
      </span>
    </OrderListBody>
  );
}

export default OrderDetail;
