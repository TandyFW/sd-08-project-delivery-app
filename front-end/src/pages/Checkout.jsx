import React from 'react';
import { NavBar, Checkout } from '../components';
import { lStorage } from '../utils';

const CheckoutPage = () => {
  const userFullName = lStorage().user.get().name;
  return (
    <>
      <NavBar userType="customer" userName={ userFullName } />
      <Checkout />
    </>
  );
};

export default CheckoutPage;
