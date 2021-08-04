import React from 'react'

function OrderTableRow({ product, index }) {
  const { name, quantity, price, SalesProducts : { quantity },  }
  return (
    <tr>
          <td
            data-testid="customer_order_details__element-order-table-item-number-<index>"
          >
            1
          </td>
          <td
            data-testid="customer_order_details__element-order-table-name-<index>"
          >
            { name }
          </td>
          <td
            data-testid="customer_order_details__element-order-table-quantity-<index>"
          >
            { quantity }
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
  )
}

export default OrderTableRow
