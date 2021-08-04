import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { HeaderButton, HeaderSeller, HeaderStatus, HeaderDate,
  HeaderOrderId } from './elements';
import { PENDING, PREPARING, ON_THE_WAY } from './consts';
import { Context } from '../../context';
import testIds from './testIds';

const useStyles = makeStyles(() => ({
  root: {
    padding: '6px',
    alignItems: 'center',
  },
  OrderNumberDate: {
    justifyContent: 'space-between',
    '& > *': {
      alignSelf: 'center',
    },
  },
  status: {
    justifyContent: 'center',
  },
  buttons: {
    justifyContent: 'flex-end',
    '& > button + button': {
      marginLeft: '6px',
    },
  },
}));

const OrderDetailsHeader = ({ info }) => {
  const classes = useStyles();
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
        <HeaderButton type={ ON_THE_WAY.action } status={ status } orderId={ orderId } />
      );
    }
    return (
      <>
        <HeaderButton type={ PENDING.action } status={ status } orderId={ orderId } />
        <HeaderButton type={ PREPARING.action } status={ status } orderId={ orderId } />
      </>
    );
  };

  const dti = testIds(userType).header;

  return (
    <Grid container className={ classes.root }>
      <Grid container item className={ classes.OrderNumberDate } xs={ 4 }>
        <HeaderOrderId id={ orderId } testId={ dti.orderId } />
        <HeaderDate date={ date } testId={ dti.orderDate } />
        <HeaderSeller seller={ seller } testId={ dti.sellerName } />
      </Grid>
      <Grid container item xs={ 3 } className={ classes.status }>
        <HeaderStatus status={ status } testId={ dti.deliveryStatus } />
      </Grid>
      <Grid container item xs={ 5 } className={ classes.buttons }>
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
