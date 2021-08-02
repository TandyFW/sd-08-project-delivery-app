import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductsCarrinho } from '../../service/getLocalStorage';
import { setCarrinho } from '../../service/setLocalStorage';
import { actionChangeTotalValue } from '../../redux/actions/index.action';

export default function ItemTable({ prefix, orderProducts }) {
  const [getLocalData, setLocalData] = useState([]);

  const dispatch = useDispatch();
  const { totalValue } = useSelector((state) => state.productsReducer);
  console.log('adfadsf');
  useEffect(() => {
    if (!orderProducts) {
      setLocalData(getProductsCarrinho());
    } else {
      const productsOrder = orderProducts.map((product) => {
        const obj = { ...product };
        obj.quantity = product.SalesProduct.quantity;
        return obj;
      });
      localStorage.setItem('carrinho', JSON.stringify(productsOrder));
      setLocalData(productsOrder);
    }
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
          {orderProducts ? ('') : (<th>Remover Item</th>)}
        </tr>
        {getLocalData
          && getLocalData.map((item, i) => (
            <tr key={ i }>
              <td data-testid={ `${prefix}element-order-table-item-number-${i}` }>
                {i + 1}
              </td>
              <td data-testid={ `${prefix}element-order-table-name-${i}` }>
                {item.name}
              </td>
              <td data-testid={ `${prefix}element-order-table-quantity-${i}` }>
                {item.quantity}
              </td>
              <td data-testid={ `${prefix}element-order-table-unit-price-${i}` }>
                R$
                {' '}
                {Number(item.price).toFixed(2).toString().replace('.', ',')}
              </td>
              <td data-testid={ `${prefix}element-order-table-sub-total-${i}` }>
                R$
                {' '}
                {(item.quantity * Number(item.price))
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}
              </td>
              {orderProducts ? (
                ''
              ) : (
                <td data-testid={ `${prefix}element-order-table-remove-${i}` }>
                  <button
                    type="button"
                    onClick={ () => removeProductFromCarrinho(item.id) }
                  >
                    Remover
                  </button>
                </td>
              )}
            </tr>
          ))}
      </table>
      <span data-testid={ `${prefix}element-order-total-price` }>
        Total: R$
        {' '}
        {totalValue.toFixed(2).toString().replace('.', ',')}
      </span>
    </div>
  );
}

ItemTable.propTypes = {
  prefix: PropTypes.string.isRequired,
  orderProducts: PropTypes.arrayOf({}).isRequired,
};
