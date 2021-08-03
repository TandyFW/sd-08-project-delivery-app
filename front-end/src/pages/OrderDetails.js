import React from 'react';
import Header from '../components/Header';
import OrderDetails from '../components/OrderDetails';

export default function OrderDetails() {
  return (
    <section className="order-details-page">
      <Header />
      <OrderDetails />
    </section>
  );
}
