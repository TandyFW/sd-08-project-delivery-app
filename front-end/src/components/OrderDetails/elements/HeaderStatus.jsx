import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { amber, lightGreen, teal, brown } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  pending: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
  },
  preparing: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
  },
  onTheWay: {
    color: theme.palette.getContrastText(brown[500]),
    backgroundColor: brown[500],
  },
  delivered: {
    color: theme.palette.getContrastText(teal[400]),
    backgroundColor: teal[400],
  },
}));

const HeaderStatus = ({ testId, status }) => {
  const classes = useStyles();

  return (
    <Button
      component="section"
      className={ classes[status] }
      type="button"
      variant="outlined"
      data-testid={ testId }
      disabled
    >
      { status }
    </Button>
  );
};

HeaderStatus.propTypes = {
  testId: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default HeaderStatus;
