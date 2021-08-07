import React, { useContext, useEffect, useState } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import fetchOrders from '../services/fetchOrders';
import logo from '../images/Neto_Logo_BG_Orange_Transp.png';

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
    console.log(data);
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
    <Box height="100vh" bg="orange">
      <Flex
        className="orders-container"
        justifyContent="space-around"
        bg="orange"
      >
        {ordersList.map((order, index) => (
          <Flex
            className="order-card"
            key={ index }
            width="md"
            bg="white"
            justifyContent="center"
            margin="5"
            borderWidth="1px"
            borderColor="black"
            borderRadius="lg"
            p="2"
          >
            <Link to={ `/${route}/orders/${order.id}` }>
              <Flex width="sm" justifyContent="space-between" alignItems="center" p="5">
                <Flex flexDirection="column">
                  <Image src={ logo } height="12" />
                  <Box
                    className="order-id"
                    data-testid={ `${route}_orders__element-order-id-${order.id}` }
                    width="65px"
                    color="#121212"
                  >
                    { `Pedido ${order.id}` }
                  </Box>
                </Flex>
                <Box
                  className="order-status"
                  data-testid={ `${route}_orders__element-delivery-status-${order.id}` }
                  bg="black"
                  color="white"
                  p="5"
                  borderRadius="lg"
                  marginLeft="8"
                >
                  { order.status }
                </Box>
                <Box className="order-infos-overview-container" marginLeft="8">
                  <Box
                    className="order-date"
                    data-testid={ `${route}_orders__element-order-date-${order.id}` }
                    color="#121212"
                  >
                    { order.saleDate }
                  </Box>
                  <Box
                    className="order-card-price"
                    data-testid={ `${route}_orders__element-card-price-${index + 1}` }
                    color="#121212"
                  >
                    { order.totalPrice.replace('.', ',') }
                  </Box>
                  {route === 'seller'
                  && (
                    <Box className="order-card-address">
                      <Text
                        data-testid={ `seller_orders__element-card-address-${order.id}` }
                        color="#121212"
                      >
                        { `${order.deliveryAddress},${order.deliveryNumber}` }
                      </Text>
                    </Box>
                  )}
                </Box>
              </Flex>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
