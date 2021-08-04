import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import Table from './Table';
import { HEADING_LIST_CHECKOUT } from '../utils/Lists';

export default function ProductsList() {
  const { itemsList, totalPrice } = useContext(DeliveryAppContext);
  const [heading, setHeading] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = () => {
    const currentLocation = window.location.pathname;
    switch (true) {
    case (currentLocation.includes('checkout')):
      return setHeading(HEADING_LIST_CHECKOUT);
    default:
      return setIsLoading(true);
    }
  };

  const setLoadingMessage = () => {
    if (!heading.length || !itemsList.length) return setIsLoading(true);
    if (heading.length && itemsList.length) return setIsLoading(false);
  };

  useEffect(() => setLoadingMessage(), [itemsList, heading]);
  useEffect(() => getLocation(), []);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <div className="products-list-container">
      <h2 className="title-h2">
        Finalizar Pedido
      </h2>
      <Table heading={ heading } body={ itemsList } />
      <p>`Total: R$ </p>
      <div
        className="total-price-order"
        data-testid="customer_checkout__element-order-total-price"
      >
        { totalPrice.replace('.', ',') }
      </div>
    </div>
  );
}
