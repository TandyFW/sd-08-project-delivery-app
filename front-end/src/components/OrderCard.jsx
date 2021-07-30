/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import moment from 'moment';

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

export default function OrderCard({ order, title }) {
  const classes = useStyles();
  const history = useHistory();

  const {
    deliveryAddress,
    deliveryNumber,
    id,
    salesDate,
    status,
    totalPrice,
    // id,
    // status,
    // sale_date: salesDate,
    // total_price: totalPrice,
    // delivery_address: deliveryAddress,
    // delivery_number: deliveryNumber,
  } = order;

  const formatDate = (date) => {
    // const timesTampDate = Date.parse(date);
    const dateObj = new Date(date);

    // const day = dateObj.getDate();
    // const month = dateObj.getMonth() + 1;
    // const year = dateObj.getFullYear();
    return dateObj.toLocaleDateString('pt-br');
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
            data-testid={ `${title}_orders__element-order-id-${id}` }
          >
            {`Pedido ${id}`}
          </Grid>
          <Grid item xs={ 12 } sm container>
            <Grid item xs container direction="column" spacing={ 2 }>
              <Grid item xs>
                <Typography
                  data-testid={ `${title}_orders__element-delivery-status-${id}` }
                  variant="subtitle1"
                >
                  {status}
                </Typography>
                <Typography
                  data-testid={ `${title}_orders__element-order-date-${id}` }
                  variant="body2"
                >
                  {formatDate(salesDate)}
                </Typography>
                <Typography
                  data-testid={ `${title}_orders__element-card-address-${id}` }
                  variant="body2"
                  color="textSecondary"
                >
                  {`${deliveryAddress}, ${deliveryNumber}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                data-testid={ `${title}_orders__element-card-price-${id}` }
                variant="subtitle1"
              >
                {`R$ ${totalPrice.replace(/\./, ',')}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  order: PropTypes.shape({
    // id: PropTypes.number,
    // sale_date: PropTypes.string,
    // status: PropTypes.string,
    // total_price: PropTypes.string,
    // delivery_address: PropTypes.string,
    // delivery_number: PropTypes.string,
    id: PropTypes.number,
    salesDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};
