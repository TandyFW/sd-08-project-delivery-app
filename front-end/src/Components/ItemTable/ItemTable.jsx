import React from 'react';
// import getLocalStorage from '../../service/getLocalStorage';

export default function ItemTable() {
  const getLocalData = [
    {
      name: 'teste',
      quantity: 2,
      unity_price: 2.45,
      sub_total: 4.90,
    },
    {
      name: 'teste',
      quantity: 2,
      unity_price: 2.45,
      sub_total: 4.90,
    },
  ];
  return (
    <div>
      <h1>Finalizar Pedido</h1>
      <table>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          <th>Remover Item</th>
        </tr>
        { console.log(getLocalData) }
        {getLocalData.map((item, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {item}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {item}
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-unity-price-${index}`
              }
            >
              {item}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {item}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              <button type="submit">Remover</button>
            </td>
          </tr>
        ))}
      </table>
      <span data-testid="customer_checkout__element-order-total-price">
        Total: R$7,98
      </span>
    </div>
  );
}
