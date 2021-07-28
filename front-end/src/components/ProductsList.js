import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import { HEADING_LIST_CHECKOUT } from '../utils/Lists';

export default function ProductsList({ match }) {
  const { itemsList } = useContext(DeliveryAppContext);
  const [heading, setHeading] = useState([]);
  const [body, setBody] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0.00)

  const getItensList = () => setBody(itemsList);

  const getLocation = () => {
    const currentLocation = match.path;
    switch (true) {
    case (currentLocation.includes('checkout')):
      return setHeading(HEADING_LIST_CHECKOUT);
    default:
      return setIsLoading(true);
    }
  };

  const subTotalCalc = () => {
    const priceList = itemsList.map((item) => item.subtotal);
    const currentTotal = priceList.reduce((acc, cur) => acc + cur, 0);
    return setTotalPrice(currentTotal);
  };

  const setLoadingMessage = () => {
    if (!heading.length || !body.length) return setIsLoading(true);
    if (heading.length && body.length) return setIsLoading(false);
  };

  useEffect(() => getItensList(), [itemsList]);
  useEffect(() => subTotalCalc(), [body]);
  useEffect(() => setLoadingMessage(), [body, heading]);
  useEffect(() => getLocation(), []);

  if (isLoading) return <p>Carregando...</p>
  return (
    <div className="products-list-container">
      <Table heading={heading} body={body} />
      <div className="total-container">
        <p
          className="total-price-order"
          data-testid="customer_checkout__element-order-total-price"
        >
          { totalPrice }
        </p>
      </div>
    </div>
  );
}
