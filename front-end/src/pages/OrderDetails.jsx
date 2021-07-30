import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';
import { OrderDetails } from '../components';
import { lStorage } from '../utils';

const { Header, Table, TotalPrice } = OrderDetails;

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

const OrderDetailsPage = (userType) => {
  const { id: orderId } = useParams();

  const [info, setInfo] = useState({});

  useEffect(() => {
    preRenderConfig(orderId, userType, setInfo);
  }, [orderId, userType]);

  return (
    <Paper elevation={ 8 }>
      <Header info={ info } />
      <Table info={ info } />
      <TotalPrice info={ info } />
    </Paper>
  );
};

OrderDetails.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default OrderDetailsPage;
