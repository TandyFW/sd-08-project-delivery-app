import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import fetchOrders from '../services/fetchOrders';

export default function OrdersList() {
  const { route, userId } = useContext(DeliveryAppContext);
  const [ordersList, setOrdersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const SLICE_INDEX_ZERO = 0;
  const SLICE_INDEX_FOUR = 4;
  const SLICE_INDEX_FIVE = 5;
  const SLICE_INDEX_SEVEN = 7;
  const SLICE_INDEX_EIGHT = 8;
  const SLICE_INDEX_TEN = 10;

  const getOrders = async () => {
    const data = await fetchOrders(route, userId);
    const newData = data.map((sale) => {
      const day = sale.saleDate.slice(SLICE_INDEX_EIGHT, SLICE_INDEX_TEN);
      const month = sale.saleDate.slice(SLICE_INDEX_FIVE, SLICE_INDEX_SEVEN);
      const year = sale.saleDate.slice(SLICE_INDEX_ZERO, SLICE_INDEX_FOUR);
      const newDate = `${day}/${month}/${year}`;
      return { ...sale, saleDate: newDate };
    });
    setOrdersList(newData);
  };

  const setLoadingMessage = () => {
    if (!ordersList || !route) return setIsLoading(true);
    if (ordersList.length && route.length) return setIsLoading(false);
  };

  useEffect(() => getOrders(), []);

  useEffect(() => setLoadingMessage(), [route, ordersList]);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <section className="orders-container">
      {ordersList.map((order, index) => (
        <div className="order-card" key={ index }>
          <Link to={ `/${route}/orders/${order.id}` }>
            <div
              className="order-id"
              data-testid={ `${route}_orders__element-order-id-${order.id}` }
            >
              { `Pedido ${order.id}` }
            </div>
            <div
              className="order-status"
              data-testid={ `${route}_orders__element-delivery-status-${order.id}` }
            >
              { order.status }
            </div>
            <div className="order-infos-overview-container">
              <div
                className="order-date"
                data-testid={ `${route}_orders__element-order-date-${order.id}` }
              >
                { order.saleDate }
              </div>
              <div
                className="order-card-price"
                data-testid={ `${route}_orders__element-card-price-${index + 1}` }
              >
                { order.totalPrice.replace('.', ',') }
              </div>
              {route === 'seller'
              && (
                <div className="order-card-address">
                  <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
                    { `${order.deliveryAddress},${order.deliveryNumber}` }
                  </p>
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
