import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Box, Text, Heading, Flex, Button } from '@chakra-ui/react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import Table from './Table';
import { HEADING_LIST_DETAILS } from '../utils/Lists';
import fetchOrderDetails from '../services/fetchOrderDetails';

export default function Details() {
  const { setOrderStatus, route } = useContext(DeliveryAppContext);
  const [sellerName, setSellerName] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState(0);

  // const getSellerName = () => {
  //   const { userSeller } = order;
  //   setSellerName(userSeller.name);
  // };

  const SLICE_INDEX_ZERO = 0;
  const SLICE_INDEX_FOUR = 4;
  const SLICE_INDEX_FIVE = 5;
  const SLICE_INDEX_SEVEN = 7;
  const SLICE_INDEX_EIGHT = 8;
  const SLICE_INDEX_TEN = 10;
  const DATA_TESTID_PREFIX = `${route}_order_details__`;

  const formatDate = () => {
    console.log(order);
    if (order.saleDate !== undefined) {
      const { saleDate, userSeller, totalPrice } = order;

      setTotal(totalPrice.replace('.', ','));
      setSellerName(userSeller.name);

      const day = saleDate.slice(SLICE_INDEX_EIGHT, SLICE_INDEX_TEN);
      const month = saleDate.slice(SLICE_INDEX_FIVE, SLICE_INDEX_SEVEN);
      const year = saleDate.slice(SLICE_INDEX_ZERO, SLICE_INDEX_FOUR);
      const newDate = `${day}/${month}/${year}`;
      setOrderDate(newDate);
    }
  };

  const confirmDelivery = () => {
    setOrderStatus('ENTREGUE');
  };

  const getOrder = async (id) => {
    const data = await fetchOrderDetails(id);
    setOrder(data[0]);
  };

  const getId = () => {
    const location = window.location.pathname;

    const arrayLocation = location.split('/');

    const currentId = arrayLocation[3];

    getOrder(+currentId);
  };

  useEffect(() => getId(), []);

  useEffect(() => {
    // getSellerName();
    formatDate();
  }, [order]);

  return (
    <Box className="order-details-container" bg="orange" height="xl">
      <Heading className="title-2" marginLeft="2" color="#121212">
        Detalhe do Pedido
      </Heading>
      <Flex
        className="order-details-info-bar"
        justifyContent="space-between"
        alignItems="flex-end"
        marginBottom="5"
      >
        <Flex>
          <Text
            marginRight="2"
            marginLeft="2"
            fontWeight="bold"
            color="#121212"
          >
            Número do pedido:
          </Text>
          <Text
            className="order-details-order-id"
            data-testid={ `${DATA_TESTID_PREFIX}element-order-details-label-order-id` }
            color="#121212"
          >
            { `${order.id}`}
          </Text>
        </Flex>
        <Flex>
          <Text marginRight="2" fontWeight="bold" color="#121212">Nome do vendedor:</Text>
          <Text
            className="order-details-seller-name"
            data-testid={ `${DATA_TESTID_PREFIX}element-order-details-label-seller-name` }
            color="#121212"
          >
            { sellerName }
          </Text>
        </Flex>
        <Flex>
          <Text marginRight="2" fontWeight="bold" color="#121212">Data do pedido:</Text>
          <Text
            className="order-details-order-date"
            data-testid={ `${DATA_TESTID_PREFIX}element-order-details-label-order-date` }
            color="#121212"
          >
            { orderDate }
          </Text>
        </Flex>
        <Flex>
          <Text marginRight="2" fontWeight="bold" vcolor="#121212">Status:</Text>
          <Text
            className="order-details-order-status"
            data-testid={
              `${DATA_TESTID_PREFIX}element-order-details-label-delivery-status`
            }
            color="#121212"
          >
            { order.status }
          </Text>
        </Flex>
        {route === 'seller'
              && (
                <Button
                  data-testid="seller_order_details__button-preparing-check"
                  type="button"
                  bg="black"
                  color="white"
                  _hover="none"
                >
                  PREPARAR PEDIDO
                </Button>
              )}
        <Button
          type="button"
          className="btn-confirm-delivery"
          onClick={ confirmDelivery }
          disabled="true"
          data-testid={
            route === 'customer'
              ? `${DATA_TESTID_PREFIX}button-delivery-check`
              : `${DATA_TESTID_PREFIX}button-dispatch-check`
          }
        >
          {route === 'seller' ? 'SAIU PARA ENTREGA' : 'MARCAR COMO ENTREGUE'}
        </Button>
      </Flex>
      <Table
        heading={ HEADING_LIST_DETAILS }
        body={ order && order.products }
      />
      <Flex justifyContent="flex-end" marginRight="5">
        <Text fontSize="2xl" transform="skewX(-12deg)" color="#121212">Total: R$ </Text>
        <Text
          fontSize="2xl"
          transform="skewX(-12deg)"
          color="#121212"
          data-testid={ `${DATA_TESTID_PREFIX}element-order-total-price` }
        >
          { total }
        </Text>
      </Flex>
    </Box>
  );
}

// Details.propTypes = {
//   order: PropTypes.shape({
//     // id: PropTypes.number,
//     sellerId: PropTypes.number,
//     salesDate: PropTypes.string,
//     status: PropTypes.string,
//     Products: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// };
