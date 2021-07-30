import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { lightGreen, teal, brown } from '@material-ui/core/colors';
import { PENDING, PREPARING, ON_THE_WAY, DELIVERED } from '../consts';
import { Context } from '../../../context';

const useStyles = makeStyles((theme) => ({
  preparing: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[700],
    },
  },
  onTheWay: {
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
    '&:hover': {
      backgroundColor: brown[700],
    },
  },
  delivered: {
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
    case PREPARING:
      return status !== PENDING;
    case ON_THE_WAY:
      return status !== PREPARING;
    case DELIVERED:
      return status !== ON_THE_WAY;
    default: return true;
    }
  };

  const getText = () => {
    switch (type) {
    case PREPARING:
      return 'Preparar pedido';
    case ON_THE_WAY:
      return 'Saiu para entrega';
    case DELIVERED:
      return 'Entregue';
    default: return 'Button';
    }
  };

  const getTestId = () => {
    switch (type) {
    case PREPARING:
      return 'seller_order_details__button-preparing-check';
    case ON_THE_WAY:
      return 'seller_order_details__button-dispatch-check';
    case DELIVERED:
      return 'customer_order_details__button-delivery-check';
    default: return 'button';
    }
  };

  const handleClick = () => {
    const flow = [PENDING, PREPARING, ON_THE_WAY, DELIVERED];
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
