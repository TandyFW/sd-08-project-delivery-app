import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { amber, lightGreen, teal, brown } from '@material-ui/core/colors';
import { PENDING, PREPARING, ON_THE_WAY, DELIVERED } from './consts';

const useStyles = makeStyles((theme) => ({
  pending: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
    '&:hover': {
      backgroundColor: amber[700],
    },
  },
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

const HeaderStatus = ({ statusValue }) => {
  const classes = useStyles();

  const getDisplayText = () => {
    switch (statusValue) {
    case PENDING:
      return 'PENDENTE';
    case PREPARING:
      return 'PREPARANDO';
    case ON_THE_WAY:
      return 'EM TRÂNSITO';
    case DELIVERED:
      return 'ENTREGUE';
    default: return 'WRONG INPUT';
    }
  };

  return (
    <Button
      component="section"
      className={ classes[statusValue] }
      type="button"
      variant="outlined"
      data-testid=""
      disabled
    >
      { getDisplayText() }
    </Button>
  );
};

HeaderStatus.propTypes = {
  statusValue: PropTypes.string.isRequired,
};

export default HeaderStatus;
