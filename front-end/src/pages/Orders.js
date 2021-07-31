import React from 'react';
import Header from '../components/Header';
import OrdersList from '../components/OrdersList';

export default function Orders() {
  return (
    <section className="orders-page">
      <Header />
      <OrdersList />
    </section>
  );
}
