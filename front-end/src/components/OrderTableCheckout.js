import React from 'react';
import PropTypes from 'prop-types';

const ITEM_NUMBER_ID = 'customer_checkout__element-order-table-item-number-';
const NAME_ID = 'customer_checkout__element-order-table-name-';
const QUANT_ID = 'customer_checkout__element-order-table-quantity-';
const UNIT_PRICE_ID = 'customer_checkout__element-order-table-unit-price-';
const SUB_TOTAL_ID = 'customer_checkout__element-order-table-sub-total-';
const REMOVE_ID = 'customer_checkout__element-order-table-remove-';

function OrderTableCheckout({ orderData, onClick }) {
  const removeElement = (event) => {
    const elementIndex = parseInt(event.target.name, 10);
    const newOrderData = orderData.filter((_item, index) => index !== elementIndex);
    onClick(newOrderData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>item</th>
          <th>descrição</th>
          <th>quantidade</th>
          <th>valor unitário</th>
          <th>sub-total</th>
          <th>remover item</th>
        </tr>
      </thead>
      <tbody>
        {orderData.map((item, index) => (
          <tr key={ index }>
            <td data-testid={ ITEM_NUMBER_ID + index }>{index + 1}</td>
            <td data-testid={ NAME_ID + index }>{item.description}</td>
            <td data-testid={ QUANT_ID + index }>{item.quantity}</td>
            <td data-testid={ UNIT_PRICE_ID + index }>
              {item.unitValue.toFixed(2).toString().replace('.', ',')}
            </td>
            <td data-testid={ SUB_TOTAL_ID + index }>
              {(item.quantity * item.unitValue).toFixed(2).toString().replace('.', ',')}
            </td>
            <td>
              <button
                type="button"
                onClick={ (e) => removeElement(e) }
                name={ index }
                data-testid={ REMOVE_ID + index }
              >
                remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderTableCheckout.propTypes = {
  orderData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderTableCheckout;
