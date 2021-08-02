import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ItemTable from '../../Components/ItemTable/ItemTable';

export default function SellerOrderDetails() {
  return (
    <div>
      <NavBar label="PEDIDOS" />
      <h1>Detalhe do Pedido</h1>
      <h3
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        Pedido 0003
      </h3>
      <h3 data-testid="seller_order_details__element-order-details-label-order-date">
        07/04/2021
      </h3>
      <h3
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        Entregue
      </h3>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar Pedido
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
      >
        Saiu Para Entrega
      </button>
      <ItemTable prefix="seller_order_details__" />
    </div>
  );
}
