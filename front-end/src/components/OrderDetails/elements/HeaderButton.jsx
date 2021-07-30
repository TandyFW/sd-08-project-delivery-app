import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { lightGreen, teal, brown } from '@material-ui/core/colors';
import { PENDING, PREPARING, ON_THE_WAY, DELIVERED } from '../consts';
import { Context } from '../../../context';

const useStyles = makeStyles((theme) => ({
  [PENDING.action]: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    },
  },
  [PREPARING.action]: {
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
    '&:hover': {
      backgroundColor: brown[700],
    },
  },
  [ON_THE_WAY.action]: {
    color: theme.palette.getContrastText(teal[400]),
    backgroundColor: teal[400],
    '&:hover': {
      backgroundColor: teal[600],
    },
  },
}));

const HeaderButton = ({ type, status, orderId }) => {
  const classes = useStyles();
  const { socket } = useContext(Context);

  const shouldDisable = () => {
    switch (type) {
    case PENDING.action:
      return status !== PENDING.state;
    case PREPARING.action:
      return status !== PREPARING.state;
    case ON_THE_WAY.action:
      return status !== ON_THE_WAY.state;
    default: return true;
    }
  };

  const getText = () => {
    switch (type) {
    case PENDING.action:
      return 'Preparar pedido';
    case PREPARING.action:
      return 'Saiu para entrega';
    case ON_THE_WAY.action:
      return 'Entregue';
    default: return 'Button';
    }
  };

  const getTestId = () => {
    switch (type) {
    case PENDING.action:
      return 'seller_order_details__button-preparing-check';
    case PREPARING.action:
      return 'seller_order_details__button-dispatch-check';
    case ON_THE_WAY.action:
      return 'customer_order_details__button-delivery-check';
    default: return 'button';
    }
  };

  const handleClick = () => {
    const flow = [PENDING.state, PREPARING.state, ON_THE_WAY.state, DELIVERED.state];
    const prevIndex = flow.indexOf(status);
    const newStatus = flow[prevIndex + 1];
    socket.emit('updateOrder-server', { id: orderId, newStatus });
  };

  return (
    <Button
      className={ classes[type] }
      type="button"
      variant="contained"
      onClick={ handleClick }
      data-testid={ getTestId() }
      disabled={ shouldDisable() }
    >
      { getText() }
    </Button>
  );
};

HeaderButton.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
};

export default HeaderButton;
