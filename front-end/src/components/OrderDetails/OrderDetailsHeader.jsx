import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { HeaderButton, HeaderSeller, HeaderStatus, HeaderDate,
  HeaderOrderId } from './elements';
import { PREPARING, ON_THE_WAY, DELIVERED } from './consts';
import { Context } from '../../context';
import testIds from './testIds';

const OrderDetailsHeader = ({ info }) => {
  const { orderId, date, userType, seller } = info;
  const { socket } = useContext(Context);

  const [status, setStatus] = useState(info.status);

  useEffect(() => {
    socket.on('updateOrder-client', ({ id, newStatus }) => {
      if (id === orderId) {
        setStatus(newStatus);
      }
    });
  }, [socket, orderId]);

  const getButtons = () => {
    if (userType === 'customer') {
      return (
        <HeaderButton type={ DELIVERED } status={ status } orderId={ orderId } />
      );
    }
    return (
      <>
        <HeaderButton type={ PREPARING } status={ status } orderId={ orderId } />
        <HeaderButton type={ ON_THE_WAY } status={ status } orderId={ orderId } />
      </>
    );
  };

  const dti = testIds(userType).header;

  return (
    <Grid container>
      <Grid container item>
        <HeaderOrderId id={ orderId } testId={ dti.orderId } />
        <HeaderDate date={ date } testId={ dti.orderDate } />
        <HeaderSeller seller={ seller } testId={ dti.sellerName } />
      </Grid>
      <Grid item>
        <HeaderStatus status={ status } testId={ dti.deliveryStatus } />
      </Grid>
      <Grid item>
        { getButtons() }
      </Grid>
    </Grid>
  );
};

OrderDetailsHeader.propTypes = {
  info: PropTypes.shape({
    orderId: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
    seller: PropTypes.string,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderDetailsHeader;
