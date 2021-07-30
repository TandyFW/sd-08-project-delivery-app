import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: blueGrey[500],
  },
}));

const MyTableHead = () => {
  const classes = useStyles();

  return (
    <TableHead className={ classes.root }>
      <TableRow>
        <TableCell align="center">Item</TableCell>
        <TableCell align="center">Descrição</TableCell>
        <TableCell align="center">Quantidade</TableCell>
        <TableCell align="center">Valor Unitário</TableCell>
        <TableCell align="center">Sub-total</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default MyTableHead;
