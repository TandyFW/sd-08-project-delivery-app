import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';

const Table = () => {
  const products = useReducer((state) => state.products);
  const [btnRemove, setBtnRemove] = useState(true);
  useEffect( () => {
  }, [btnRemove]);

  const renderExpenseRow = (item, index) => {
    const prefix = 'customer_checkout__';
    const { id, qtd, price } = item;
    return (
      <tr key={ id }>
        <td data-testid={ `${prefix}element-order-table-item-number-${index}` }>
          { index }
        </td>
        <td data-testid={ `${prefix}element-order-table-name-${index}` }>
          { name }
        </td>
        <td data-testid={ `${prefix}element-order-table-quantity-${index}` }>
          { qtd }
        </td>
        <td data-testid={ `${prefix}element-order-table-unit-price-${index}` }>
          { price }
        </td>
        <td data-testid={ `${prefix}element-order-table-sub-total-${index}` }>
          { Number(qtd) * Number(price) }
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

  const removeItem = (id) => {
    const dispatch = useDispatch();
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id },
    });
    setBtnRemove(!btnRemove);
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
          { products && products.map((item, index) => renderExpenseRow(item, index)) }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
