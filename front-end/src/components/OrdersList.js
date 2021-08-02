import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import fetchOrders from '../services/fetchOrders';

export default function OrdersList() {
  const { route } = useContext(DeliveryAppContext);
  const [ordersList, setOrdersList] = useState([]);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getPageUser = () => setUser(route);

  const getOrders = async () => {
    const data = await fetchOrders();
    setOrdersList(data);
  };

  const setLoadingMessage = () => {
    if (!ordersList.length || !user.length) return setIsLoading(true);
    if (ordersList.length && user.length) return setIsLoading(false);
  };

  useEffect(() => {
    getPageUser();
    getOrders();
  }, []);

  useEffect(() => setLoadingMessage(), [user, ordersList]);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <section className="orders-container">
      {ordersList.map((order, index) => (
        <div className="order-card" key={ index }>
          <Link to={ `/${user}/order/${order.id}` }>
            <div
              className="order-id"
              data-testid={ `${user}_orders__element-order-id-${order.id}` }
            >
              { `Pedido ${order.id}` }
            </div>
            <div
              className="order-status"
              data-testid={ `${user}_orders__element-delivery-status-${order.id}` }
            >
              { order.status }
            </div>
            <div className="order-infos-overview-container">
              <div
                className="order-date"
                data-testid={ `${user}_orders__element-order-date-${order.id}` }
              >
                { order.salesDate }
              </div>
              <div
                className="order-card-price"
                data-testid={ `${user}_orders__element-card-price-${order.totalPrice}` }
              >
                { order.totalPrice }
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
