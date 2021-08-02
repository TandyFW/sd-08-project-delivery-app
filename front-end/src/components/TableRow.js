import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function TableRow({ row, tableIndex }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);

  useEffect(() => {
    const srtList = JSON.stringify(itemsList);
    return localStorage.setItem('currentItemsList', srtList);
  }, [itemsList]);

  const remove = () => {
    console.log(row.name);
    const currentList = itemsList.filter((item) => item.name !== row.name);
    setItemsList(currentList);
  };

  return (
    <tr key={ tableIndex }>
      <td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-item-number${tableIndex}` }
      >
        { tableIndex + 1 }
      </td>
      <td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-name-${tableIndex}` }
      >
        { row.name }
      </td>
      <td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-quantity-${tableIndex}` }
      >
        { row.quantity }
      </td>
      <td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-unit-price-${tableIndex}` }
      >
        { (+row.unitaryPrice).toFixed(2) }
      </td>
      <td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-sub-total-${tableIndex}` }
      >
        { row.itemsPrice }
      </td>
      <td>
        <button
          type="button"
          className="btn-remove"
          onClick={ remove }
          data-testid={ `customer_checkout__element-order-table-remove-${tableIndex}` }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    unitaryPrice: PropTypes.number.isRequired,
    itemsPrice: PropTypes.string.isRequired,
  }).isRequired,
  tableIndex: PropTypes.number.isRequired,
};
