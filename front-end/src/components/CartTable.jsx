import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { lStorage } from '../utils';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit, id) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price, id };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

export default function SpanningTable({ updateCheckout }) {
  const [itensCart, setItensCart] = useState([]);

  useEffect(() => {
    if (!itensCart.length) {
      const cart = lStorage().cart.get();
      const cartKeys = Object.keys(cart);
      const rows = cartKeys.map((cartKey) => {
        const { quantity, price, id } = cart[cartKey];
        return createRow(cartKey, quantity, price, id);
      });
      setItensCart(rows);
      updateCheckout(rows);
    }
  }, [itensCart.length, updateCheckout]);

  const handleClick = (index) => {
    const newCart = itensCart.filter((itenCart, itenIndex) => itenIndex !== index);
    setItensCart(newCart);
    updateCheckout(newCart);
  };

  const DATA_TEST_ID_ITEM = 'customer_checkout__element-order-table-item-number-';
  const DATA_TEST_ID_DESC = 'customer_checkout__element-order-table-name-';
  const DATA_TEST_ID_QTY = 'customer_checkout__element-order-table-quantity-';
  const DATA_TEST_ID_PRICE = 'customer_checkout__element-order-table-unit-price-';
  const DATA_TEST_ID_SUBTOTAL = 'customer_checkout__element-order-table-sub-total-';
  const DATA_TEST_ID_BUTTON_REMOVE = 'customer_checkout__element-order-table-remove-';

  const classes = useStyles();

  return (
    <TableContainer component={ Paper }>
      <Table className={ classes.table } aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Valor Unitário</TableCell>
            <TableCell align="center">Sub-total</TableCell>
            <TableCell align="center">Remover Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itensCart.map((row, index) => (
            <TableRow key={ row.desc }>
              <TableCell
                data-testid={ `${DATA_TEST_ID_ITEM}${index}` }
              >
                { index + 1}
              </TableCell>
              <TableCell
                data-testid={ `${DATA_TEST_ID_DESC}${index}` }
              >
                {row.desc}
              </TableCell>
              <TableCell
                data-testid={ `${DATA_TEST_ID_QTY}${index}` }
                align="center"
              >
                {row.qty}
              </TableCell>
              <TableCell
                data-testid={ `${DATA_TEST_ID_PRICE}${index}` }
                align="center"
              >
                {row.unit.replace('.', ',')}
              </TableCell>
              <TableCell
                data-testid={ `${DATA_TEST_ID_SUBTOTAL}${index}` }
                align="center"
              >
                {row.price.toFixed(2).toString().replace('.', ',')}
              </TableCell>
              <TableCell align="center">
                <Button
                  type="button"
                  data-testid={ `${DATA_TEST_ID_BUTTON_REMOVE}${index}` }
                  variant="contained"
                  color="primary"
                  onClick={ () => handleClick(index) }
                >
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={ 3 } />
            <TableCell rowSpan={ 3 } />
            <TableCell rowSpan={ 3 } />
            <TableCell rowSpan={ 3 } />
            <TableCell
              data-testid="customer_checkout__element-order-total-price"
              align="center"
              id="sale-total-price"
            >
              {`TOTAL: ${subtotal(itensCart).toFixed(2).toString().replace('.', ',')}`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

SpanningTable.propTypes = {
  updateCheckout: PropTypes.func.isRequired,
};
