import React, { useContext, useState, useEffect } from 'react';
import CartContext from './CartContext';

function TableCheckout() {
  const { total, cart, removeFromCart } = useContext(CartContext);
  const NUMBER_ONE = 1;
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('carrinho'));
    setCartList(products);
  }, [cart]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { cartList.map((product, index) => {
            const { id, name, quantity, unitPrice, subTotal } = product;
            return (
              <tr key={ id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { index + NUMBER_ONE }
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  { name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { Number(unitPrice).toFixed(2).replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { Number(subTotal).toFixed(2).replace('.', ',') }
                </td>
                {/* <td> */}
                <button
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                  type="button"
                  onClick={ () => removeFromCart(id) }
                >
                  Remover
                </button>
                {/* </td> */}
              </tr>
            );
          }) }
        </tbody>
      </table>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: R$ ${Number(total).toFixed(2).replace('.', ',')}` }
      </p>
    </div>
  );
}

export default TableCheckout;
