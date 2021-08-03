import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import DeliveryAppContext from '../context/DeliveryAppContext';
import Table from './Table';
import { HEADING_LIST_DETAILS } from '../utils/Lists';
import fetchOrderDetails from '../services/fetchOrderDetails';

export default function Details() {
  const { sellers, orderStatus, setOrderStatus } = useContext(DeliveryAppContext);
  const [sellerName, setSellerName] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [order, setOrder] = useState({});

  const getSellerName = () => {
    const { sellerId } = order;
    const currentSellerName = sellers.filter((seller) => seller.sellerId === sellerId);
    setSellerName(currentSellerName[0]);
  };

  const SLICE_INDEX_ZERO = 0;
  const SLICE_INDEX_FOUR = 4;
  const SLICE_INDEX_FIVE = 5;
  const SLICE_INDEX_SEVEN = 7;
  const SLICE_INDEX_EIGHT = 8;
  const SLICE_INDEX_TEN = 10;
  const DATA_TESTID_PREFIX = 'customer_order_details__';

  const formatDate = () => {
    if (order.salesDate !== undefined) {
      const { salesDate } = order;
      const day = salesDate.slice(SLICE_INDEX_EIGHT, SLICE_INDEX_TEN);
      const month = salesDate.slice(SLICE_INDEX_FIVE, SLICE_INDEX_SEVEN);
      const year = salesDate.slice(SLICE_INDEX_ZERO, SLICE_INDEX_FOUR);
      const newDate = `${day}/${month}/${year}`;
      setOrderDate(newDate);
    }
  };

  const confirmDelivery = () => {
    setOrderStatus('ENTREGUE');
  };

  const getOrder = async (id) => {
    const data = await fetchOrderDetails(id);
    console.log(data[0]);
    setOrder(data[0]);
  };

  const getId = () => {
    const location = window.location.pathname;
    console.log(location);

    const arrayLocation = location.split('/');
    console.log(arrayLocation);

    const currentId = arrayLocation[3];
    console.log(currentId);
    console.log(typeof (currentId));

    getOrder(+currentId);
  };

  useEffect(() => {
    getSellerName();
    formatDate();
  }, [order]);

  useEffect(() => getId(), []);

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
          { orderStatus }
        </p>
        <button
          type="button"
          className="btn-confirm-delivery"
          onClick={ confirmDelivery }
          data-testid={ `${DATA_TESTID_PREFIX}button-delivery-check` }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <Table
        heading={ HEADING_LIST_DETAILS }
        body={ order && order.products }
      />
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
