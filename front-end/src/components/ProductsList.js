import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import { HEADING_LIST_CHECKOUT } from '../utils/Lists';

export default function ProductsList({ match }) {
  const { itemsList } = useContext(DeliveryAppContext);
  const [heading, setHeading] = useState([]);
  const [body, setBody] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItensList = () => setBody(itemsList);

  const getLocation = () => {
    const currentLocation = match.path;
    switch(true) {
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

  useEffect(() => getItensList(), [itemsList]);
  useEffect(() => setLoadingMessage(), [itemsList, heading]);
  useEffect(() => getLocation(), []);

  if (isLoading) return <p>Carregando...</p>
  return (
    <div className="products-list-container">
      <Table heading={heading} body={body} />
    </div>
  );
}
