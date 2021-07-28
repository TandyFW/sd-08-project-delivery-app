import React from 'react';
import './styles.css';

const mockValue = {
  stella: 3.5,
  skol: 4.1,
  torcida: 1.56,
};
const data = [
  {
    id: 1,
    descricao: 'Cerveja Stella 250ml',
    quantidade: 3,
    valor: mockValue.stella,
  },
  {
    id: 2,
    descricao: 'Cerveja Skol Latão 450ml',
    quantidade: 4,
    valor: mockValue.skol,
  },
  {
    id: 3,
    descricao: 'Salgadinho Torcido Churrasco',
    quantidade: 1,
    valor: mockValue.torcida,
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
                {element.id}
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
                {element.valor * element.quantidade}
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
        {`Total Price: 
        ${data.reduce((acc, curr) => acc + (curr.quantidade * curr.valor), 0).toFixed(2)
    }`}
      </h4>
    </div>
  );
}

export default CheckoutTable;
