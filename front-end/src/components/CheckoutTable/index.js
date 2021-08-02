import React, { useRef } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

function CheckoutTable({ cart, setCart }) {
  function handleRemove({ target }) {
    const data = cart.filter((element) => element.id !== Number(target.value));
    setCart(data);
  }
  const total = useRef();
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
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((element, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {element.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {element.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {String(element.price.toFixed(2)).replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {String((Number(element.price) * Number(element.quantity)).toFixed(2))
                  .replace('.', ',')}
              </td>
              <button
                value={ element.id }
                onClick={ handleRemove }
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                Remover
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <h4
        ref={ total }
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total Price: 
        ${String((cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
      .toFixed(2)))
      .replace('.', ',')
    }`}
      </h4>
    </div>
  );
}

CheckoutTable.propTypes = {
  cart: PropTypes.arrayOf(Object).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CheckoutTable;
