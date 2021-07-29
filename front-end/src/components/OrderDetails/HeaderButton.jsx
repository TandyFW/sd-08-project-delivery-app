import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { lightGreen, teal, brown } from '@material-ui/core/colors';
import { PENDING, PREPARING, ON_THE_WAY, DELIVERED } from './consts';

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

const HeaderButton = ({ type, status }) => {
  const classes = useStyles();

  const shouldDisable = () => {
    switch (type) {
    case PREPARING:
      return status.value !== PENDING;
    case ON_THE_WAY:
      return status.value !== PREPARING;
    case DELIVERED:
      return status.value !== ON_THE_WAY;
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

  const handleClick = () => {
    const flow = [PENDING, PREPARING, ON_THE_WAY, DELIVERED];
    const prevIndex = flow.indexOf(status.value);
    status.set(flow[prevIndex + 1]);
  };

  return (
    <Button
      className={ classes[type] }
      type="button"
      variant="contained"
      onClick={ handleClick }
      data-testid=""
      disabled={ shouldDisable() }
    >
      { getText() }
    </Button>
  );
};

HeaderButton.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.shape({
    value: PropTypes.string.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
};

export default HeaderButton;
