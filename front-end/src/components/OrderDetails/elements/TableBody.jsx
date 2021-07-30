import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import testIds from '../testIds';
import { formatNumberToReal } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  row: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const MyTableBody = ({ userType, products }) => {
  const classes = useStyles();
  const rows = products.map(({ name, price, quantity }, index) => {
    const itemNumber = index + 1;
    const unitPrice = formatNumberToReal(price);
    const subtotal = formatNumberToReal(price * quantity);
    return { itemNumber, name, unitPrice, quantity, subtotal };
  });

  const dti = testIds(userType).table;

  return (
    <TableBody>
      { rows.map((row, index) => (
        <TableRow key={ row.itemNumber } className={ classes.row }>
          <TableCell data-testid={ `${dti.itemNumber}${index}` } align="center">
            { row.itemNumber }
          </TableCell>
          <TableCell data-testid={ `${dti.name}${index}` } align="center">
            { row.name }
          </TableCell>
          <TableCell data-testid={ `${dti.unitPrice}${index}` } align="center">
            { row.unitPrice }
          </TableCell>
          <TableCell data-testid={ `${dti.quantity}${index}` } align="center">
            { row.quantity }
          </TableCell>
          <TableCell data-testid={ `${dti.subtotal}${index}` } align="center">
            { row.subtotal }
          </TableCell>
        </TableRow>
      )) }
    </TableBody>
  );
};

MyTableBody.propTypes = {
  userType: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default MyTableBody;
