import React, { useContext, useEffect, useState } from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';
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
    console.log(itemsList);
    if (!heading.length || !itemsList.length) return setIsLoading(true);
    if (heading.length && itemsList.length) return setIsLoading(false);
  };

  useEffect(() => setLoadingMessage(), [itemsList, heading]);
  useEffect(() => getLocation(), []);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <Box
      className="products-list-container"
      alignItems="center"
      justifyContent="center"
    >
      <Heading className="title-h2" size="lg" marginLeft="4" color="#121212">
        Finalizar Pedido
      </Heading>
      <Table heading={ heading } body={ itemsList } />
      <Flex marginTop="28" justifyContent="flex-end" marginRight="5">
        <Text fontSize="2xl" transform="skewX(-12deg)" color="#121212">Total: R$ </Text>
        <Box
          as="p"
          className="total-price-order"
          data-testid="customer_checkout__element-order-total-price"
          marginLeft="2"
          fontSize="2xl"
          color="#121212"
          transform="skewX(-12deg)"
        >
          { totalPrice.replace('.', ',') }
        </Box>
      </Flex>
    </Box>
  );
}
