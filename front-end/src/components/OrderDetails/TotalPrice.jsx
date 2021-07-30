import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { formatNumberToReal } from '../../utils';
import testIds from './testIds';

const useStyles = makeStyles((theme) => ({
  totalPrice: {
    color: theme.palette.getContrastText('#036B52'),
    backgroundColor: '#036B52',
  },
}));

const TotalPrice = ({ info }) => {
  const { userType, totalPrice } = info;
  const classes = useStyles();
  return (
    <Grid container alignItems="flex-end">
      <Button
        component="section"
        className={ classes.totalPrice }
        type="button"
        variant="contained"
        data-testid={ testIds(userType).totalPrice }
        size="large"
        disabled
      >
        { formatNumberToReal(totalPrice) }
      </Button>
    </Grid>
  );
};

TotalPrice.propTypes = {
  info: PropTypes.shape({
    userType: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default TotalPrice;
