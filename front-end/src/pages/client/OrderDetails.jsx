import React, { useContext } from 'react';
import NavBar from '../../components/NavBar';
import TableCheckout from '../../components/TableCheckout';
import TableDetails from '../../components/TableDetails';
import Context from '../../context/Context';

function OrderDetails() {
  const { cartTotal } = useContext(Context);
  return (
    <div>
      <NavBar />
      <h3>Detalhes do Pedido</h3>
      <TableDetails />
      <TableCheckout removeButtons={ false } prefix="customer_order_details__" />
      <span data-testid="customer_order_details__element-order-total-price">
        {`Total: R$ ${cartTotal.value}`}
      </span>
    </div>
  );
}

export default OrderDetails;
