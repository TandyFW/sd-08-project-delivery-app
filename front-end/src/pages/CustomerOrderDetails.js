import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { loadState } from '../services/LocalStorage';
import { fetchSaleById } from '../services/Api';
import Navbar from '../components/Navbar';
import OrderTableHead from '../components/OrderTableHead';
import OrderDetailsHeader from '../components/OrderDetailsHeader';
import OrderTableRow from '../components/OrderTableRow';

function CustomerOrderDetails({ match }) {
  const [order, setOrder] = useState(undefined);
  const { id } = match.params;
  const user = loadState('user');

  const getOrder = async () => {
    const fetchedOrder = await fetchSaleById(id, user.token);
    console.log('fetchedOrder', fetchedOrder);
    setOrder(fetchedOrder);
  };

  useEffect(() => { getOrder(); }, []);

  return (
    <>
      { console.log('order', order) }
      <Navbar name={ user.name } />
      <h3>Detalhes do Pedido</h3>
      { order
        && (
          <div className="order-details-container">
            <OrderDetailsHeader
              order={ order }
              user={ user }
            />
            <table>
              <OrderTableHead />
              <tbody>
                { order.products
                  .map((product, index) => (
                    <OrderTableRow
                      key={ product.id }
                      product={ product }
                      index={ index }
                    />
                  )) }
              </tbody>
            </table>
            <p data-testid="customer_order_details__element-order-total-price">
              {order.totalPrice.replace('.', ',')}
            </p>
          </div>) }
    </>
  );
}

CustomerOrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
}.isRequired;

export default CustomerOrderDetails;
