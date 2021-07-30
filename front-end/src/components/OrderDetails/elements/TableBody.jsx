import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import testIds from '../testIds';
import { formatNumberToReal } from '../../../utils';

const MyTableBody = ({ userType, products }) => {
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
        <TableRow key={ row.itemNumber }>
          <TableCell data-testid={ `${dti.itemNumber}${index}` }>
            { row.itemNumber }
          </TableCell>
          <TableCell data-testid={ `${dti.name}${index}` }>
            { row.name }
          </TableCell>
          <TableCell data-testid={ `${dti.unitPrice}${index}` }>
            { row.unitPrice }
          </TableCell>
          <TableCell data-testid={ `${dti.quantity}${index}` }>
            { row.quantity }
          </TableCell>
          <TableCell data-testid={ `${dti.subtotal}${index}` }>
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
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default MyTableBody;
