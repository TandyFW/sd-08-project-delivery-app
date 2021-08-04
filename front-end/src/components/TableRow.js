import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function TableRow({ row, tableIndex, showRemove }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);
  const [rowQuantity, setRowQuantity] = useState(0);
  const [rowUnitaryPrice, setRowUnitaryPrice] = useState(0);
  const [rowSubtotal, setRowSubtotal] = useState(0);

  console.log(row);

  const remove = () => {
    console.log(row.name);
    console.log(itemsList);
    const currentList = itemsList.filter((item) => item.name !== row.name);
    console.log(currentList);
    setItemsList(currentList);
  };

  const componentSettings = () => {
    if (showRemove) {
      console.log(showRemove);
      setRowQuantity(+row.quantity);
      setRowUnitaryPrice(+(+row.unitaryPrice).toFixed(2));
      return setRowSubtotal((+(+row.unitaryPrice).toFixed(2)) * (+row.quantity));
    }

    setRowQuantity(+row.salesProducts.quantity);
    setRowUnitaryPrice(+(+row.price).toFixed(2));
    setRowSubtotal((+(+row.price).toFixed(2)) * (+row.salesProducts.quantity));
  };

  useEffect(() => {
    const srtList = JSON.stringify(itemsList);
    console.log(srtList);
    return localStorage.setItem('currentItemsList', srtList);
  }, [itemsList]);

  useEffect(() => componentSettings(), []);

  return (
    <tr key={ tableIndex }>
      <td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-item-number-${tableIndex}` }
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
        { rowQuantity }
      </td>
      <td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-unit-price-${tableIndex}` }
      >
        { rowUnitaryPrice
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </td>
      <td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-sub-total-${tableIndex}` }
      >
        { rowSubtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </td>
      {showRemove
      && (
        <td>
          <button
            type="button"
            className="btn-remove"
            onClick={ remove }
            data-testid={
              `customer_checkout__element-order-table-remove-${row.productId}`
            }
          >
            Remover
          </button>
        </td>
      )}
    </tr>
  );
}

TableRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unitaryPrice: PropTypes.number,
    itemsPrice: PropTypes.string,
    price: PropTypes.string,
    salesProducts: PropTypes.shape({
      quantity: PropTypes.number,
    }),
    productId: PropTypes.number,
  }).isRequired,
  tableIndex: PropTypes.number.isRequired,
  showRemove: PropTypes.bool.isRequired,

};
