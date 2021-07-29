import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { request, lStorage } from '../utils';
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
  const [products, setProducts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getProducts = async () => {
      const { token } = lStorage().user.get();
      const options = {
        headers: {
          Authorization: token,
        },
        method: 'GET',
      };
      const result = await request('products', options);
      setProducts(result);
    };
    if (products.length === 0) getProducts();
  }, [products]);

  return (
    <div className={ classes.root }>
      <h3>Finalizar Pedido</h3>

      <CartTable />

      <h3>Detalhes e Endereço para Entrega</h3>

      <AddressForm />

    </div>
  );
};

export default CheckoutList;
