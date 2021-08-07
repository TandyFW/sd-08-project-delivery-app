import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function TableRow({ row, tableIndex, showRemove }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);
  const [rowQuantity, setRowQuantity] = useState(0);
  const [rowUnitaryPrice, setRowUnitaryPrice] = useState(0);
  const [setRowSubtotal] = useState(0);

  const remove = () => {
    const currentList = itemsList.filter((item) => item.name !== row.name);
    setItemsList(currentList);
  };

  const componentSettings = () => {
    if (showRemove) {
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
    return localStorage.setItem('currentItemsList', srtList);
  }, [itemsList]);

  useEffect(() => componentSettings(), []);

  return (
    <tr key={ tableIndex }>
      <td
        className="admin-table-cel"
        data-testid={ `admin_manage__element-user-table-item-number-${tableIndex}` }
      >
        { tableIndex + 1 }
      </td>
      <td
        className="admin-table-cel"
        data-testid={ `admin_manage__element-user-table-name-${tableIndex}` }
      >
        { row.name }
      </td>
      <td
        className="admin-table-cel"
        data-testid={ `admin_manage__element-user-table-email-${tableIndex}` }
      >
        {/* email, mudar a linha a baixo */}
        { rowQuantity }
      </td>
      <td
        className="admin-table-cel"
        data-testid={ `admin_manage__element-user-table-role-${tableIndex}` }
      >
        {/* role, mudar a linha a baixo */}
        { rowUnitaryPrice
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </td>
      {showRemove
      && (
        <td>
          <button
            type="button"
            className="btn-remove"
            onClick={ remove }
            data-testid={
              `admin_manage__element-user-table-remove-${row.productId}`
            }
          >
            Excluir
          </button>
        </td>
      )}
    </tr>
  );
}

TableRow.propTypes = {
  row: PropTypes.shape({
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
