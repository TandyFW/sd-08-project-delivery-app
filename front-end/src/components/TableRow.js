import React, { useContext, useEffect, useState } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function TableRow({ row, tableIndex, match }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);

  const remove = () => {
    const currentList = itemsList.filter((item) => item[1] !== row[1])
    setItemsList(currentList);
  }

  useEffect(() => renderRow(), [itemsList])

  return (
    <tr>
      <td
        className="products-table-cel"
        key={tableIndex}
        data-testid={`customer_checkout__element-order-table-item-number${tableIndex}`}
      >
        {row.id}
      </td>
      <td
        className="products-table-cel"
        key={tableIndex}
        data-testid={`customer_checkout__element-order-table-name-${tableInde}`}
      >
        {row.name}
      </td>
      <td
        className="products-table-cel"
        key={tableIndex}
        data-testid={`customer_checkout__element-order-table-quantity-${tableInde}`}
      >
        {row.quantity}
      </td>
      <td
        className="products-table-cel"
        key={tableIndex}
        data-testid={`customer_checkout__element-order-table-sub-total-${tableIndex}`}
      >
        {row.subtotal}
      </td>
      <td>
        <button
          type="button"
          className="btn-remove"
          onclick={ remove }
          data-testid={`customer_checkout__element-order-table-remove-${tableIndex}`}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
