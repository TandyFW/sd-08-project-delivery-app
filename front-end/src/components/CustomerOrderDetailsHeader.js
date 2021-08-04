import React from 'react'

function CustomerOrderDetailsHeader({ id, selller, date, status }) {
  return (
    <header>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido 0003
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P. Vend: Fulana Pereira
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        07/04/2021
      </span>
      <span data-testid={ statusTest }>Entregue</span>
      <span
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </span>
    </header>
  )
}

export default CustomerOrderDetailsHeader
