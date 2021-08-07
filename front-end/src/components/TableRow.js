import React, { useContext, useEffect, useState } from 'react';
import { Tr, Td, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function TableRow({ row, tableIndex, showRemove }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);
  const [rowQuantity, setRowQuantity] = useState(0);
  const [rowUnitaryPrice, setRowUnitaryPrice] = useState(0);
  const [rowSubtotal, setRowSubtotal] = useState(0);

  // console.log(row);

  const remove = () => {
    console.log(row.name);
    console.log(itemsList);
    const currentList = itemsList.filter((item) => item.name !== row.name);
    console.log(currentList);
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
    // console.log(srtList);
    return localStorage.setItem('currentItemsList', srtList);
  }, [itemsList]);

  useEffect(() => componentSettings(), []);

  return (
    <Tr key={ tableIndex } textAlign="center">
      <Td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-item-number-${tableIndex}` }
      >
        { tableIndex + 1 }
      </Td>
      <Td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-name-${tableIndex}` }
      >
        { row.name }
      </Td>
      <Td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-quantity-${tableIndex}` }
      >
        { rowQuantity }
      </Td>
      <Td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-unit-price-${tableIndex}` }
      >
        { rowUnitaryPrice
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </Td>
      <Td
        className="products-table-cel"
        data-testid={ `customer_checkout__element-order-table-sub-total-${tableIndex}` }
      >
        { rowSubtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
      </Td>
      {showRemove
      && (
        <Td>
          <Button
            type="button"
            className="btn-remove"
            onClick={ remove }
            data-testid={
              `customer_checkout__element-order-table-remove-${tableIndex}`
            }
          >
            <DeleteIcon />
          </Button>
        </Td>
      )}
    </Tr>
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
