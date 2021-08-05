import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
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
    <section className="order-details-container">
      <h2 className="title-2">
        Detalhe do Pedido
      </h2>
      <div className="order-details-info-bar">
        <p
          className="order-details-order-id"
          data-testid={ `${DATA_TESTID_PREFIX}element-order-details-label-order-id` }
        >
          { `PEDIDO ${order.id}`}
        </p>
        <p
          className="order-details-seller-name"
          data-testid={ `${DATA_TESTID_PREFIX}element-order-details-label-seller-name` }
        >
          { sellerName }
        </p>
        <p
          className="order-details-order-date"
          data-testid={ `${DATA_TESTID_PREFIX}element-order-details-label-order-date` }
        >
          { orderDate }
        </p>
        <p
          className="order-details-order-status"
          data-testid={
            `${DATA_TESTID_PREFIX}element-order-details-label-delivery-status`
          }
        >
          { order.status }
        </p>
        {route === 'seller'
              && (
                <button
                  data-testid="seller_order_details__button-preparing-check"
                  type="button"
                >
                  PREPARAR PEDIDO
                </button>
              )}
        <button
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
        </button>
      </div>
      <Table
        heading={ HEADING_LIST_DETAILS }
        body={ order && order.products }
      />
      <p
        data-testid={ `${DATA_TESTID_PREFIX}element-order-total-price` }
      >
        { total }
      </p>
    </section>
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
