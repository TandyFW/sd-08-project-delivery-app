import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import { amber, lightGreen, teal, brown } from '@material-ui/core/colors';
import { PENDING, PREPARING, ON_THE_WAY, DELIVERED } from '../consts';

const useStyles = makeStyles((theme) => ({
  [PENDING.action]: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
  },
  [PREPARING.action]: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
  },
  [ON_THE_WAY.action]: {
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
  },
  [DELIVERED.action]: {
    color: theme.palette.getContrastText(teal[400]),
    backgroundColor: teal[400],
  },
  all: {
    padding: '12px',
    // textTransform: 'Uppercase',
  },
}));

const HeaderStatus = ({ testId, status }) => {
  const classes = useStyles();

  const getActionByStatus = () => {
    const { action } = [PENDING, PREPARING, ON_THE_WAY, DELIVERED]
      .find(({ state }) => state === status);
    return action;
  };

  return (
    <Paper
      component="section"
      className={ `${classes[getActionByStatus()]} ${classes.all}` }
      elevation={ 3 }
      data-testid={ testId }
    >
      { status }
    </Paper>
  );
};

HeaderStatus.propTypes = {
  testId: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default HeaderStatus;
