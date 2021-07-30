import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { TableHead, TableBody } from './elements';

const useStyles = makeStyles(() => ({
  root: {
    padding: '6px',
  },
}));

const OrderDetailsTable = ({ info }) => {
  const classes = useStyles();
  const { userType, products } = info;
  return (
    <Grid container className={ classes.root }>
      <Table>
        <TableHead />
        <TableBody userType={ userType } products={ products } />
      </Table>
    </Grid>
  );
};

OrderDetailsTable.propTypes = {
  info: PropTypes.shape({
    userType: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default OrderDetailsTable;
