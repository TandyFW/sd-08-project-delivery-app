import React, { useRef } from 'react';
import './styles.css';

const data = [
  {
    id: 1,
    descricao: 'Cerveja Stella 250ml',
    quantidade: 3,
    valor: 3.5,
  },
  {
    id: 2,
    descricao: 'Cerveja Skol Latão 450ml',
    quantidade: 4,
    valor: 4.1,
  },
  {
    id: 3,
    descricao: 'Salgadinho Torcida Churrasco',
    quantidade: 1,
    valor: 1.56,
  }];

function SellerTable() {
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
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
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
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {element.valor}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {Number(element.valor) * Number(element.quantidade)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4
        ref={ total }
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total Price:
        ${data.reduce((acc, curr) => acc + (curr.quantidade * curr.valor), 0).toFixed(2)
    }`}
      </h4>
    </div>
  );
}

export default SellerTable;
