import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsCarrinho } from '../../service/getLocalStorage';
import { setCarrinho } from '../../service/setLocalStorage';
import { actionChangeTotalValue } from '../../redux/actions/index.action';

export default function ItemTable() {
  const [getLocalData, setLocalData] = useState(getProductsCarrinho());
  const dispatch = useDispatch();
  const { totalValue } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(actionChangeTotalValue());
  }, [dispatch]);

  const removeProductFromCarrinho = (id) => {
    setCarrinho({ id, name: '', price: 1, quantity: 0, urlImage: '' });
    setLocalData(getProductsCarrinho());
    dispatch(actionChangeTotalValue());
  };

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
        {getLocalData
          && getLocalData.map((item, i) => (
            <tr key={ i }>
              <td
                data-testid={ `customer_checkout__element-order-table-item-number-${i}` }
              >
                {i + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${i}` }
              >
                {item.name}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
              >
                {item.quantity}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-unity-price-${i}` }
              >
                R$
                {' '}
                {Number(item.price).toFixed(2).toString().replace('.', ',')}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
              >
                R$
                {' '}
                {(item.quantity * Number(item.price))
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-remove-${i}` }
              >
                <button
                  type="button"
                  onClick={ () => removeProductFromCarrinho(item.id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
      </table>
      <span data-testid="customer_checkout__element-order-total-price">
        Total: R$
        {' '}
        {totalValue.toFixed(2).toString().replace('.', ',')}
      </span>
    </div>
  );
}
