import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import { TableHead, TableBody } from './elements';

const OrderDetailsTable = ({ info }) => {
  const { userType, products } = info;
  return (
    <Table>
      <TableHead />
      <TableBody userType={ userType } products={ products } />
    </Table>
  );
};

OrderDetailsTable.propTypes = {
  info: PropTypes.shape({
    userType: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default OrderDetailsTable;
