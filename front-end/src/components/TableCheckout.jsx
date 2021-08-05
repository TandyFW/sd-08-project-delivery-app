import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function TableCheckout({ removeButtons = true, prefix }) {
  const { cart } = useContext(Context);
  const realCart = cart.value.filter(({ quantity }) => quantity > 0);
  console.log('REALCART', realCart);
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          {
            removeButtons && (
              <th>Remover Item</th>
            )
          }
        </tr>
      </thead>
      <tbody>
        { realCart.map(({ id, price, name, quantity }, index) => (
          <tr key={ id }>
            <td
              data-testid={
                `${prefix}element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `${prefix}element-order-table-name-${index}`
              }
            >
              {name}
            </td>
            <td
              data-testid={
                `${prefix}element-order-table-quantity-${index}`
              }
            >
              {quantity}
            </td>
            <td
              data-testid={
                `${prefix}element-order-table-unit-price-${index}`
              }
            >
              {`R$ ${price.replace('.', ',')}`}
            </td>
            <td>
              <span>R$ </span>
              <span
                data-testid={
                  `${prefix}element-order-table-sub-total-${index}`
                }
              >
                {(Number(price) * quantity).toFixed(2).toString().replace('.', ',')}
              </span>
            </td>
            <td
              data-testid={
                `${prefix}element-order-table-remove-${index}`
              }
            >
              { removeButtons && (
                <button
                  type="button"
                  onClick={ () => cart.update({ name, id, quantity: 0, price }) }
                >
                  Remover
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableCheckout.propTypes = {
  removeButtons: PropTypes.element.isRequired,
  prefix: PropTypes.string.isRequired,
};

export default TableCheckout;
