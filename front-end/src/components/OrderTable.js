import React from 'react';
import PropTypes from 'prop-types';

function OrderTable({ orderData, onClick }) {
// function OrderTable({ orderData }) {
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
          <tr key={ index } data-testid={ `element-order-table-name-${index}` }>
            <td>{index}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{`R$ ${item.unitValue.toFixed(2)}`}</td>
            <td>{`R$ ${(item.quantity * item.unitValue).toFixed(2)}`}</td>
            <td>
              <button
                type="button"
                onClick={ (e) => removeElement(e) }
                name={ index }
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

OrderTable.propTypes = {
  orderData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderTable;
