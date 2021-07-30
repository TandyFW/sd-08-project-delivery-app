import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { OrderDetails, Loading } from '../components';
import { lStorage, request } from '../utils';

const { Header, Table, TotalPrice } = OrderDetails;

const useStyles = makeStyles(() => ({
  root: {
    padding: '30px 20px 30px',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      marginBottom: '8px',
    },
  },
}));

async function preRenderConfig(orderId, userType, setInfo) {
  const { name: userName, token } = lStorage().user.get();
  const options = {
    headers: {
      Authorization: token,
    },
    method: 'GET',
  };

  const saleObj = await request(`sales/${orderId}`, options);
  const { totalPrice, salesDate: date, status, products: prods } = saleObj;
  let seller;
  if (userType === 'seller') {
    const { name: sellerName } = await request(`users/${saleObj.sellerId}`, options);
    seller = sellerName;
  }
  const products = prods.map(({ name, price, SaleProducts: { quantity } }) => ({
    name, price, quantity,
  }));
  setInfo({ orderId, userName, userType, totalPrice, date, status, products, seller });
}

const OrderDetailsPage = ({ userType }) => {
  const classes = useStyles();
  const { id } = useParams();
  const orderId = +id;

  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preRenderConfig(orderId, userType, setInfo);
  }, [orderId, userType]);

  useEffect(() => {
    if (info.products) setLoading(false);
  }, [info]);

  return (
    loading ? <Loading /> : (
      <Grid container className={ classes.root }>
        <Typography variant="h4">Detalhes do pedido</Typography>
        <Paper elevation={ 8 }>
          <Header info={ info } />
          <Table info={ info } />
          <TotalPrice info={ info } />
        </Paper>
      </Grid>
    )
  );
};

OrderDetailsPage.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default OrderDetailsPage;
