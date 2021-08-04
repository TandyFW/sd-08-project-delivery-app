import React from 'react';
import PropTypes from 'prop-types';

function OrderTableRow({ product, index }) {
  const { name, price, SalesProducts } = product;
  return (
    <tr>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        1
      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        { name }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-quantity-<index>"
      >
        { SalesProducts.quantity }
      </td>
      <td
        data-testid="customer_order_details__element-order-table-sub-total-<index>"
      >
        {`R$${price.replace('.', ',')}`}
      </td>
      <td
        data-testid="customer_order_details__element-order-total-price-<index>"
      >
        {`R$${parseFloat(SalesProducts.quantity) * parseFloat(price)}`}
      </td>
    </tr>
  );
}

OrderTableRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    SalesProducts: PropTypes.shape({
      quantity: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderTableRow;
