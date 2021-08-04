import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import fetchOrders from '../services/fetchOrders';

export default function OrdersList() {
  const { route } = useContext(DeliveryAppContext);
  const [ordersList, setOrdersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOrders = async () => {
    console.log(data);
    const data = await fetchOrders(route);
    setOrdersList(data);
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
          <Link to={ `/${route}/order/${order.id}` }>
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
                { order.salesDate }
              </div>
              <div
                className="order-card-price"
                data-testid={ `${route}_orders__element-card-price-${order.totalPrice}` }
              >
                { order.totalPrice }
              </div>
              {route === 'seller'
              && (
                <div className="order-card-address">
                  <p data-testid={ `seller_orders__element-card-address-${id}` }>
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
