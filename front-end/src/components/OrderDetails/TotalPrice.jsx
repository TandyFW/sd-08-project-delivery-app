import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { formatNumberToReal } from '../../utils';
import testIds from './testIds';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '6px',
    justifyContent: 'flex-end',
  },
  totalPrice: {
    color: theme.palette.getContrastText('#036B52'),
    backgroundColor: '#036B52',
    padding: '12px',
  },
}));

const TotalPrice = ({ info }) => {
  const { userType, totalPrice } = info;
  const classes = useStyles();
  return (
    <Grid container className={ classes.root }>
      <Paper
        component="section"
        className={ classes.totalPrice }
        elevation={ 4 }
        data-testid={ testIds(userType).totalPrice }
      >
        <Typography variant="h5">
          { formatNumberToReal(totalPrice) }
        </Typography>
      </Paper>
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
