import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  row: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const MyTableBody = ({ users, removeUser }) => {
  const classes = useStyles();

  return (
    <TableBody>
      { users.map((user, index) => (
        <TableRow key={ user.id } className={ classes.row }>
          <TableCell
            data-testid={ `admin_manage__element-user-table-item-number-${index}` }
            align="center"
          >
            { index + 1 }
          </TableCell>
          <TableCell
            data-testid={ `admin_manage__element-user-table-name-${index}` }
            align="center"
          >
            {user.name}
          </TableCell>
          <TableCell
            data-testid={ `admin_manage__element-user-table-email-${index}` }
            align="center"
          >
            {user.email}
          </TableCell>
          <TableCell
            data-testid={ `admin_manage__element-user-table-role-${index}` }
            align="center"
          >
            {user.role}
          </TableCell>
          <TableCell
            data-testid={ `admin_manage__element-user-table-remove-${index}` }
            align="center"
          >
            <DeleteIcon onClick={ () => removeUser(user.id) } />
          </TableCell>
        </TableRow>
      )) }
    </TableBody>
  );
};

MyTableBody.propTypes = {
  removeUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.number.isRequired,
  })).isRequired,
};

export default MyTableBody;
