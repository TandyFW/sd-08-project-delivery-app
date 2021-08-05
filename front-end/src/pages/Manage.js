import React from 'react';
import Header from '../components/Header';
import ManageDetails from '../components/ManageDetails';

export default function Manage() {
  return (
    <section className="order-details-page">
      <Header />
      <ManageDetails />
    </section>
  );
}
