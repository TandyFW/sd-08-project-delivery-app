import React, { useContext } from 'react';
import CartContext from './CartContext';

function TableCheckout() {
  const { total, cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
    <table>
    <tr>
    <th>Item</th>
    <th>Descrição</th>
    <th>Quantidade</th>
    <th>Valor Unitário</th>
    <th>Sub-Total</th>
    <th>Remover Item</th>
    </tr> 
    { cart.map((product, index) => {
      const { productId ,name, quantity, unitPrice, subTotal } = product;
      return (
        <tr>
          <td
            data-testid={`customer_checkout__element-order-table-item-number-${index}` }
          >
            { index }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-name-${ index }` }
          >
            { name }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-quantity-${ index }` }
          >
            { quantity }
          </td>
          <td
            data-testid={`customer_checkout__element-order-table-unit-price-${ index }`}
          >
            { unitPrice }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-sub-total-${ index }` }
          >
            { subTotal }
          </td>
          <td
            data-testid={ `customer_checkout__element-order-table-remove-${ index }` }
          >
            <button type="button" onClick={ () => removeFromCart(productId) }>Remover</button>
          </td>
        </tr>
      )
    }) }
    </table>
    <p
      data-testid="customer_checkout__element-order-total-price"
    >
      { `Total: R$ ${total}` }
    </p>
    </div>
  );
}

export default TableCheckout;