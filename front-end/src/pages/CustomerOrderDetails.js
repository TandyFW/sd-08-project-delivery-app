import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { loadState } from '../services/LocalStorage';
import { fetchSaleById } from '../services/Api';
import Navbar from '../components/Navbar';

const statusTest = 'customer_order_details__element-order-details-label-delivery-status';

function CustomerOrderDetails({ match }) {
  const [order, setOrder] = useState(undefined);
  const { id } = match.params;
  const user = loadState('user');

  const getOrder = async () => {
    setOrder(await (fetchSaleById(id, user.token)));
  };

  useEffect(() => { getOrder(); }, []);

  console.log(order);

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            data-testid="customer_order_details__element-order-table-item-number-<index>"
          >
            1
          </td>
          <td
            data-testid="customer_order_details__element-order-table-name-<index>"
          >
            Cerveja Stella
          </td>
          <td
            data-testid="customer_order_details__element-order-table-quantity-<index>"
          >
            3
          </td>
          <td
            data-testid="customer_order_details__element-order-table-sub-total-<index>"
          >
            R$3,50
          </td>
          <td
            data-testid="customer_order_details__element-order-total-price-<index>"
          >
            R$ 10,5
          </td>
        </tr>
      </tbody>
    </table>

  );

  return (
    <>
      <Navbar name={ user.name } />
      <h3>Detalhes do Pedido</h3>
      <div className="order-details-container">
        <header>
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            Pedido 0003
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. Vend: Fulana Pereira
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            07/04/2021
          </span>
          <span data-testid={ statusTest }>Entregue</span>
          <span
            data-testid="customer_order_details__button-delivery-check"
          >
            Marcar como entregue
          </span>
        </header>
        { renderTable() }
        <p>Total: R$ 28,46</p>
      </div>
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
