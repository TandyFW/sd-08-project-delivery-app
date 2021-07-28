import React from 'react';
import './styles.css';

const data = [
  {
    item: 'Teste',
    descricao: 'teste',
    quantidade: 'teste',
    valor: 'teste',
    subtotal: 'teste',
  },
  {
    item: 'Teste',
    descricao: 'teste',
    quantidade: 'teste',
    valor: 'teste',
    subtotal: 'teste',
  },
  {
    item: 'Teste',
    descricao: 'teste',
    quantidade: 'teste',
    valor: 'teste',
    subtotal: 'teste',
  }];

function CheckoutTable() {
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
          {data.map((element, index) => (
            <tr key={ index }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-
                ${index}` }
              >
                {element.item}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {element.descricao}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {element.quantidade}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unit-price-
                ${index}` }
              >
                {element.valor}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-
                ${index}` }
              >
                {element.subtotal}
              </td>
              <button
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
        data-testid="customer_checkout__element-order-total-price"
      >
        Total Price: $1000000
      </h4>
    </div>
  );
}

export default CheckoutTable;
