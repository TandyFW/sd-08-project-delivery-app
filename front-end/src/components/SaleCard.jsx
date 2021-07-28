/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
}));

export default function SaleCard({ sale }) {
  const classes = useStyles();
  const history = useHistory();

  const {
    deliveryAddress,
    deliveryNumber,
    id,
    salesDate,
    status,
    totalPrice,
  } = sale;

  const formatDate = (date) => {
    const timesTampDate = Date.parse(date);
    const dateObj = new Date(timesTampDate);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const redirectToSaleDetail = (idParam) => {
    history.push(`orders/${idParam}`);
  };

  return (
    <div className={ classes.root }>
      <Paper className={ classes.paper }>
        <Grid container spacing={ 2 } onClick={ () => redirectToSaleDetail(id) }>
          <Grid
            item
            inputProps={ { 'data-testid': `seller_orders__element-order-id-${id}` } }
          >
            {`Pedido ${id}`}
          </Grid>
          <Grid item xs={ 12 } sm container>
            <Grid item xs container direction="column" spacing={ 2 }>
              <Grid item xs>
                <Typography
                  inputProps={ {
                    'data-testid': `seller_orders__element-delivery-status-${id}` } }
                  variant="subtitle1"
                >
                  {status}
                </Typography>
                <Typography
                  inputProps={ {
                    'data-testid': `seller_orders__element-order-date-${id}` } }
                  variant="body2"
                >
                  {formatDate(salesDate)}
                </Typography>
                <Typography
                  inputProps={ {
                    'data-testid': `seller_orders__element-card-address-${id}` } }
                  variant="body2"
                  color="textSecondary"
                >
                  {`${deliveryAddress}, ${deliveryNumber}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                inputProps={ {
                  'data-testid': `seller_orders__element-card-price-${id}` } }
                variant="subtitle1"
              >
                {`R$ ${totalPrice}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    salesDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};
