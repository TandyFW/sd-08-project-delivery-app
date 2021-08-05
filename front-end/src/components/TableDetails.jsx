import React, { useContext } from 'react';
import dateFormat from 'dateformat';
import Context from '../context/Context';

function TableDetails() {
  const { orderInfo } = useContext(Context);
  const prefix = 'customer_order_details__';
  return (
    <table>
      <thead>
        <tr>
          <th
            data-testid={ `${prefix}element-order-details-label-order-id` }
          >
            { `PEDIDO 000${orderInfo.value[0]}` }
          </th>
          <th>
            P. Vend:
            <span
              data-testid={ `${prefix}element-order-details-label-seller-name` }
            >
              Fulana Pereira
            </span>
          </th>
          <th data-testid={ `${prefix}element-order-details-label-order-date` }>
            { dateFormat(orderInfo.value[1], 'dd/mm/yyyy') }
          </th>
          <th
            data-testid={
              `${prefix}element-order-details-label-delivery-status`
            }
          >
            { orderInfo.value[2] }
          </th>
          <button
            type="button"
            data-testid={ `${prefix}button-delivery-check` }
            disabled
          >
            MARCAR COMO ENTREGUE
          </button>
        </tr>
      </thead>
    </table>
  );
}

export default TableDetails;
