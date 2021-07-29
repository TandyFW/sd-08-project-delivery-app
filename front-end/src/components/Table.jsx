import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const [btnRemove, setBtnRemove] = useState(true);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {}, [btnRemove]);

  const removeItem = (id) => {
    console.log('remove', id);
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
    setBtnRemove(!btnRemove);
  };

  const renderExpenseRow = (item, index) => {
    const prefix = 'customer_checkout__';
    const { id, qtd, price, title } = item;
    return (
      <tr key={ id }>
        <td data-testid={ `${prefix}element-order-table-item-number-${index}` }>
          { index + 1 }
        </td>
        <td data-testid={ `${prefix}element-order-table-name-${index}` }>
          { title }
        </td>
        <td data-testid={ `${prefix}element-order-table-quantity-${index}` }>
          { qtd }
        </td>
        <td data-testid={ `${prefix}element-order-table-unit-price-${index}` }>
          { price.replace('.', ',') }
        </td>
        <td data-testid={ `${prefix}element-order-table-sub-total-${index}` }>
          { (Number(qtd) * Number(price)).toFixed(2).replace('.', ',') }
        </td>
        <td data-testid={ `${prefix}element-order-table-remove-${index}` }>
          <button
            type="button"
            onClick={ () => removeItem(id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  };

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
          {
            products && products
              .map((item, index) => renderExpenseRow(item, index))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
