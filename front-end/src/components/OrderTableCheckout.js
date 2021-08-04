import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

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
    <>
      <legend>Finalizar Pedido</legend>
      <Table size="sm" responsive>
        <thead className="text-center">
          <tr>
            <th>item</th>
            <th>descrição</th>
            <th>quantidade</th>
            <th>valor unitário</th>
            <th>sub-total</th>
            <th>remover item</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {orderData.map((item, index) => (
            <tr key={ index }>
              <td data-testid={ ITEM_NUMBER_ID + index }>{index + 1}</td>
              <td data-testid={ NAME_ID + index }>{item.description}</td>
              <td data-testid={ QUANT_ID + index }>
                R$
                {item.quantity}
                ,00
              </td>
              <td data-testid={ UNIT_PRICE_ID + index }>
                R$
                {item.unitValue.toFixed(2).toString().replace('.', ',')}
              </td>
              <td data-testid={ SUB_TOTAL_ID + index }>
                R$
                {(item.quantity * item.unitValue).toFixed(2).toString().replace('.', ',')}
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  type="button"
                  onClick={ (e) => removeElement(e) }
                  name={ index }
                  data-testid={ REMOVE_ID + index }
                >
                  remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

OrderTableCheckout.propTypes = {
  orderData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderTableCheckout;
