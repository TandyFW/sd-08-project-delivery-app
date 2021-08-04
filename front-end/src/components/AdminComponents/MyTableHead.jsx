import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: blueGrey[400],
    '& > * > *': {
      fontWeight: '700',
    },
  },
}));

const MyTableHead = () => {
  const classes = useStyles();

  return (
    <TableHead className={ classes.root }>
      <TableRow>
        <TableCell align="center">Item</TableCell>
        <TableCell align="center">Nome</TableCell>
        <TableCell align="center">E-mail</TableCell>
        <TableCell align="center">Tipo</TableCell>
        <TableCell align="center">Excluir</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default MyTableHead;
