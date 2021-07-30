import React from 'react';
import NavBar from '../components/NavBar';

const saleDetails = () => {
  const oi = 'oi';
  const currUser = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <NavBar user={ currUser.name || 'Fulano' } />
      <div>{ oi }</div>
    </>
  );
};

export default saleDetails;
