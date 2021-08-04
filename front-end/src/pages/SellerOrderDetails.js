import React from 'react';

function SellerOrderDetails({ order }) {
  const { id, date, status } = order;
  return (
    <div className="container">
      <h1>Detalhe do Pedido</h1>
      <div className="order-detail-card">
        <div className="order-detail-card-header">
          <span
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${id}`}
          </span>
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {date}
          </span>
          <span
            data-testid={ `seller_order_details__
            element-order-details-label-delivery-status` }
          >
            {status}
          </span>
          <button
            data-testid="seller_order_details__button-preparing-check"
            type="button"
            onClick={ () => {} }
          >
            Preparar pedido
          </button>
          <button
            data-testid="seller_order_details__button-dispatch-check"
            type="button"
            onClick={ () => {} }
          >
            Saiu para entrega
          </button>
        </div>
      </div>

    </div>
  );
}

export default SellerOrderDetails;
