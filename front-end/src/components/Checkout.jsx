import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartTable from './CartTable';
import AddressForm from './AddressForm';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});

const CheckoutList = () => {
  const [itensCheckout, setItensCheckout] = useState([]);

  const classes = useStyles();

  const updateItensCheckout = (itens) => {
    setItensCheckout(itens);
  };

  return (
    <div className={ classes.root }>
      <h3>Finalizar Pedido</h3>

      <CartTable updateCheckout={ updateItensCheckout } />

      <h3>Detalhes e Endereço para Entrega</h3>

      <AddressForm itensCheckout={ itensCheckout } />

    </div>
  );
};

export default CheckoutList;
