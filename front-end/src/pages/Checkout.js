import React from 'react';
import FormCheckout from '../components/FormCheckout';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';

export default function Checkout() {
  return (
    <section className="checkout-page">
      <Header />
      <ProductsList />
      <FormCheckout />
    </section>
  );
}
