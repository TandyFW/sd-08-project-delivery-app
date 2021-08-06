import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';
import TableCheckout from '../../components/TableCheckout';
import TableSeller from '../../components/TableSeller';
import Context from '../../context/Context';

function OrderDetailsSeller(props) {
  const { sellerOrders } = useContext(Context);
  const { match: { params: { id } } } = props;

  const orderPrice = sellerOrders.value.find((order) => Number(id) === order.id);

  return (
    <>
      <NavBar />
      <h3>Detalhes do Pedido</h3>
      <TableSeller id={ id } />
      <TableCheckout removeButtons={ false } prefix="seller_order_details__" />
      <span data-testid="seller_order_details__element-order-total-price">
        { orderPrice.totalPrice.replace('.', ',') }
      </span>
    </>
  );
}

OrderDetailsSeller.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default OrderDetailsSeller;
