import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailsTable({ data }) {
  return (
    <div className="main-wrapper-table">
      <div className="status">
        <p>{}</p>
      </div>
      <table className="checkout-table">
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
          {data.map(({ product, quantity }, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-name-
                ${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-quantity-
                ${index}` }
              >
                {quantity}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-total-price-${index}`
                }
              >
                {String(product.price).replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                {String((Number(product.price) * Number(quantity)).toFixed(2))
                  .replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total Price: 
        ${String((data.reduce((acc, curr) => acc + (curr.quantity
          * curr.product.price), 0)
      .toFixed(2)))
      .replace('.', ',')
    }`}
      </h4>
    </div>
  );
}

OrderDetailsTable.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default OrderDetailsTable;
