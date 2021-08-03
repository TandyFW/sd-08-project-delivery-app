import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import Table from './Table';
import { HEADING_LIST_DETAILS } from '../utils/Lists';

export default function Details({ order }) {
  const { sellers, orderStatus, setOrderStatus } = useContext(DeliveryAppContext);
  const [sellerName, setSellerName] = useState('');
  const [orderDate, setOrderDate] = useState('');

  const getSellerName = () => {
    const { sellerId } = order;
    const currentSellerName = sellers.filter((seller) => seller.sellerId === sellerId);
    setSellerName(currentSellerName[0]);
  };

  const formatDate = () => {
    const { salesDate } = order;
    const day = salesDate.slice(9, 10);
    const month = salesDate.slice(6, 7);
    const year = salesDate.slice(0, 4);
    const newDate = `${day}/${month}/${year}`;
    setOrderDate(newDate);
  };

  const confirmDelivery = () => {
    setOrderStatus('ENTREGUE');
  };

  useEffect(() => {
    getSellerName();
    formatDate();
    setOrderStatus(order.status);
  }, []);

  return (
    <section className="order-details-container">
      <h2 className="title-2">
        Detalhe do Pedido
      </h2>
        {order.map((data) => (
          <>
            <div className="order-details-info-bar" key={ data.id }>
              <p
                className="order-details-order-id"
                data-testid="customer_order_details__element-order-details-label-order-id"
              >
                { `PEDIDO ${data.id}`}
              </p>
              <p
                className="order-details-seller-name"
                data-testid="customer_order_details__element-order-details-label-seller-name"
              >
                { sellerName }
              </p>
              <p
                className="order-details-order-date"
                data-testid="customer_order_details__element-order-details-label-order-date"
              >
                { orderDate }
              </p>
              <p
                className="order-details-order-status"
                data-testid="customer_order_details__element-order-details-label-delivery-status"
              >
                { orderStatus }
              </p>
              <button
                type="button"
                className="btn-confirm-delivery"
                onClick={ confirmDelivery }
                data-testid="customer_order_details__button-delivery-check"
              >
                MARCAR COMO ENTREGUE
              </button>
            </div>
            <Table heading={ HEADING_LIST_DETAILS } body={ order.Products } />
          </>
        ))}
    </section>
  );
}
