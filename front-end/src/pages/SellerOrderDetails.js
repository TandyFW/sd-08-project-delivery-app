/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { loadState } from '../services/LocalStorage';
import { fetchSaleById } from '../services/Api';
import Navbar from '../components/Navbar';
import OrderTableHead from '../components/OrderTableHead';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
import OrderTableRow from '../components/OrderTableRow';

function SellerOrderDetails({ match }) {
  const [order, setOrder] = useState(undefined);
  const { id } = match.params;
  const user = loadState('user');

  const getOrder = async () => {
    const fetchedOrder = await fetchSaleById(id, user.token);
    setOrder(fetchedOrder);
  };

  useEffect(() => { getOrder(); }, []);

  return (
    <>
      <Navbar name={ user.name } />
      <h3>Detalhes do Pedido</h3>
      { !order
        ? <h2>Carregando</h2>
        : <div className="order-details-container">
          <OrderDetailsHeader
            order={ order }
            user={ user }
          />
          <table>
            <OrderTableHead />
            <tbody>
              { order.products
                .map((product, index) => (
                  <OrderTableRow key={ product.id } product={ product } index={ index } />
                )) }
            </tbody>
          </table>
          <p data-testid="seller_order_details__element-order-total-price">
            {order.totalPrice.replace('.', ',')}
          </p>
        </div> }
    </>
  );
}

SellerOrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}.isRequired;

export default SellerOrderDetails;
