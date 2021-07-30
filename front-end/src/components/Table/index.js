import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles(
  {

    table: {
      minWidth: 700,
    },
  },
);

export default function OrderTable({ products, testIds, remove }) {
  const classes = useStyles();

  return (
    <TableContainer component={ Paper }>
      <Table className={ classes.table } aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Descrição</StyledTableCell>
            <StyledTableCell align="right">Quantidade</StyledTableCell>
            <StyledTableCell align="right">Valor unitário</StyledTableCell>
            <StyledTableCell align="right">Sub-total</StyledTableCell>
            {remove && <StyledTableCell align="right">Remover item</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({ price, name, count }, index) => (
            <StyledTableRow key={ index }>
              <StyledTableCell
                component="th"
                scope="row"
                data-testid={ `${testIds.item}${index}` }
              >
                {index + 1}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                data-testid={ `${testIds.name}${index}` }
              >
                {name}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                data-testid={ `${testIds.quantity}${index}` }
              >
                {count}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                data-testid={ `${testIds.price}${index}` }
              >
                {`R$ ${price}`}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                data-testid={ `${testIds.subTotal}${index}` }
              >
                {`R$ ${(count * price).toFixed(2)}`}
              </StyledTableCell>
              {remove && (
                <StyledTableCell align="right">
                  <button
                    data-testid={ `${testIds.remove}${index}` }
                    type="button"
                  >
                    Remover
                  </button>
                </StyledTableCell>)}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

OrderTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  remove: PropTypes.bool,
  testIds: PropTypes.objectOf(PropTypes.any).isRequired,
};

OrderTable.defaultProps = {
  remove: true,
};
