import React from 'react';
// import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
// import Table from '../components/Table';

function ClientCheckout() {
  const prefix = 'customer_checkout__';
  return (
    <>
      <NavBar user="Sicrano da Silva" />
      <h3>Finalizar Pedido</h3>
      {/* <Table /> */}
      <h3>Detalhes e endereço para Entrega</h3>
      <Input
        label="Vendedor"
        // onChange={ onChange }
        // value={ value }
        data-testid={ `${prefix}select-seller` }
        // placeholder={ placeholder }
      />
      <Input
        label="Endereço"
        // onChange={ onChange }
        // value={ value }
        data-testid={ `${prefix}input-address` }
        // placeholder={ Endereço }
      />
      <Input
        label="Número"
        // onChange={ onChange }
        // value={ value }
        data-testid={ `${prefix}input-addressNumber` }
        // placeholder="Número"
      />
      <Button
        type="button"
        // onClick={ onClick }
        data-testid={ `${prefix}button-submit-order` }
        // disabled={ disabled }
        label="Finalizar Pedido"
      />
    </>
  );
}

export default ClientCheckout;
