import React from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Input from '../components/Input';
import Table from '../components/Table';
import Select from '../components/Select';

function ClientCheckout() {
  const prefix = 'customer_checkout__';
  let total = useSelector((state) => state.products.products);
  total = total.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.qtd),
    0,
  );
  return (
    <>
      <NavBar user="Sicrano da Silva" />
      <h3>Finalizar Pedido</h3>
      <Table />
      <span data-testid={ `${prefix}element-order-total-price` }>
        {total.toFixed(2).replace('.', ',')}
      </span>
      <h3>Detalhes e endereço para Entrega</h3>
      <Select
        label="Vendedor"
        options={ [] }
        // onChange={ onChange }
        // value={ value }
        datatestid={ `${prefix}select-seller` }
        // placeholder={ placeholder }
      />
      <Input
        label="Endereço"
        // onChange={ onChange }
        // value={ value }
        datatestid={ `${prefix}input-address` }
        // placeholder={ Endereço }
      />
      <Input
        label="Número"
        // onChange={ onChange }
        // value={ value }
        datatestid={ `${prefix}input-addressNumber` }
        // placeholder="Número"
      />
      <Button
        type="button"
        // onClick={ onClick }
        datatestid={ `${prefix}button-submit-order` }
        // disabled={ disabled }
        label="Finalizar Pedido"
      />
    </>
  );
}

export default ClientCheckout;
