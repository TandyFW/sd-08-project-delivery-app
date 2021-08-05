import React from 'react';
import PropTypes from 'prop-types';
import Order from './Order';

function ListOrders(props) {
  const { orders, prefix, isSeller } = props;
  return (
    <>
      {orders.map((order) => (<Order
        key={ order.id }
        { ...order }
        isSeller={ isSeller }
        prefix={ prefix }
      />))}
    </>
  );
}

ListOrders.propTypes = {
  orders: PropTypes.arrayOf.isRequired,
  prefix: PropTypes.string.isRequired,
  isSeller: PropTypes.bool.isRequired,
};

export default ListOrders;
