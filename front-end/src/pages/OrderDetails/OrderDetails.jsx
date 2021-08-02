import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ItemTable from '../../Components/ItemTable/ItemTable';

export default function OrderDetails() {
  return (
    <div>
      <NavBar label="PRODUTOS" text="MEUS PEDIDOS" />
      <h1>Detalhe do Pedido</h1>
      <h3
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido 0003
      </h3>
      <h3 data-testid="customer_order_details__element-order-details-label-seller-name">
        P. Vend: Fulana Pereira
      </h3>
      <h3 data-testid="customer_order_details__element-order-details-label-order-date">
        07/04/2021
      </h3>
      <h3
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        Entregue
      </h3>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar Como Entregue
      </button>
      <ItemTable prefix="customer_order_details__" />
    </div>
  );
}
