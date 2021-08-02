import React from 'react';
import PropTypes from 'prop-types';

function SellerDetailTable({ order }) {
  console.log(order);
  return (
    <div className="main-wrapper-table">
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
          {order.salesProducts.map((element, i) => (
            <tr key={ i }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${i}`
                }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-name-${i}` }
              >
                {element.product.name}
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-quantity-${i}` }
              >
                {element.quantity}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${i}`
                }
              >
                {element.product.price.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${i}`
                }
              >
                { (Number(element.quantity) * Number(element.product.price)).toFixed(2)
                  .replace('.', ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4
        data-testid="seller_order_details__element-order-total-price"
      >
        {order.totalPrice.replace('.', ',')}
      </h4>
    </div>
  );
}

SellerDetailTable.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    salesProducts: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default SellerDetailTable;
