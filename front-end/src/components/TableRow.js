import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function TableRow({ row, tableIndex }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);

  const remove = () => {
    const currentList = itemsList.filter((item) => item[1] !== row.name);
    setItemsList(currentList);
  };

  return (
    <tr>
      <td
        className="products-table-cel"
        key={ tableIndex }
        data-testid={ `customer_checkout__element-order-table-item-number${tableIndex}` }
      >
        { row.id }
      </td>
      <td
        className="products-table-cel"
        key={ tableIndex }
        data-testid={ `customer_checkout__element-order-table-name-${tableInde}` }
      >
        { row.name }
      </td>
      <td
        className="products-table-cel"
        key={ tableIndex }
        data-testid={ `customer_checkout__element-order-table-quantity-${tableIndex}` }
      >
        { row.quantity }
      </td>
      <td
        className="products-table-cel"
        key={ tableIndex }
        data-testid={ `customer_checkout__element-order-table-sub-total-${tableIndex}` }
      >
        { row.subtotal }
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired,
  }).isRequired,
  tableIndex: PropTypes.number.isRequired,
};
