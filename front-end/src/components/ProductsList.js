import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import Table from './Table';
import HEADING_LIST_CHECKOUT from '../utils/Lists';

export default function ProductsList() {
  const { itemsList, totalPrice } = useContext(DeliveryAppContext);
  const [heading, setHeading] = useState([]);
  const [body, setBody] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItensList = () => setBody(itemsList);

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
    if (!heading.length || !body.length) return setIsLoading(true);
    if (heading.length && body.length) return setIsLoading(false);
  };

  useEffect(() => getItensList(), [itemsList, getItensList]);
  useEffect(() => setLoadingMessage(), [body, heading]);
  useEffect(() => getLocation(), []);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <div className="products-list-container">
      <h2 className="title-h2">
        Finalizar Pedido
      </h2>
      <Table heading={ heading } body={ body } />
      <div className="total-container">
        <p
          className="total-price-order"
          data-testid="customer_checkout__element-order-total-price"
        >
          { `Total: R$ ${totalPrice}` }
        </p>
      </div>
    </div>
  );
}
