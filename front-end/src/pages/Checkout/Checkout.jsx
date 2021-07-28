import React from 'react';
import DeliveryForm from '../../Components/DeliveryForm/DeliveryForm';
import ItemTable from '../../Components/ItemTable/ItemTable';
import NavBar from '../../Components/NavBar/NavBar';

export default function Checkout() {
  return (
    <div>
      <NavBar />
      <ItemTable />
      <DeliveryForm />
    </div>
  );
}
