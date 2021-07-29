import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeaderButton from './HeaderButton';
import HeaderStatus from './HeaderStatus';
import { PENDING, PREPARING, ON_THE_WAY, DELIVERED } from './consts';
import { Context } from '../../context';

const OrderDetailsHeader = ({ info }) => {
  const { orderNumber, date, userType, seller } = info;
  const { socket } = useContext(Context);
  // falta implementar socket!!!

  const [status, setStatus] = useState(PENDING);

  useEffect(() => {
    socket.on('updateOrder', ({ number, newStatus }) => {
      if (number === orderNumber) {
        setStatus(newStatus);
      }
    });
  }, []);

  const getButtons = () => {
    if (userType === 'customer') {
      return (
        <HeaderButton type={ DELIVERED } status={ status } orderNumber={ orderNumber } />
      );
    }
    return (
      <>
        <HeaderButton type={ PREPARING } status={ status } orderNumber={ orderNumber } />
        <HeaderButton type={ ON_THE_WAY } status={ status } orderNumber={ orderNumber } />
      </>
    );
  };

  return (
    <Grid container>
      <Grid container item>
        <Typography variant="h4" color="textPrimary">
          { `PEDIDO ${orderNumber}` }
        </Typography>
        <Typography variant="h5" color="textPrimary">
          { date }
        </Typography>
        { seller && (
          <Typography variant="subtitle1" color="textPrimary">
            { `P. Vendedora: ${seller}` }
          </Typography>
        ) }
      </Grid>
      <Grid item>
        <HeaderStatus statusValue={ status.value } />
      </Grid>
      <Grid item>
        { getButtons() }
      </Grid>
    </Grid>
  );
};

OrderDetailsHeader.propTypes = {
  info: PropTypes.shape({
    orderNumber: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    seller: PropTypes.string,
  }).isRequired,
};

export default OrderDetailsHeader;
