import React, { useContext } from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function TableSeller(props) {
  const { id } = props;
  const { orderInfo } = useContext(Context);
  const prefix = 'seller_order_details__';
  console.log('orderInfo', orderInfo.value[0], id);
  return (
    <table>
      <thead>
        <tr>
          <th
            data-testid={ `${prefix}element-order-details-label-order-id` }
          >
            { id }
          </th>
          <th data-testid={ `${prefix}element-order-details-label-order-date` }>
            { dateFormat(orderInfo.value[1], 'dd/mm/yyyy') }
          </th>
          <th
            data-testid={
              `${prefix}element-order-details-label-delivery-status`
            }
          >
            Pendente
          </th>
          <button
            type="button"
            data-testid={ `${prefix}button-preparing-check` }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid={ `${prefix}button-dispatch-check` }
            disabled
          >
            SAIU PARA ENTREGA
          </button>
        </tr>
      </thead>
    </table>
  );
}

TableSeller.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TableSeller;
