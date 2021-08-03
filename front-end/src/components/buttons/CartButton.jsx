import { Button, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    right: '40px',
    bottom: '40px',
  },
}));

function CartButton() {
  const history = useHistory();
  const { cartTotal } = useContext(Context);
  const classes = useStyles();
  console.log(cartTotal);
  return (
    <Button
      variant="contained"
      color="primary"
      className={ classes.root }
      data-testid="customer_products__button-cart"
      disabled={ cartTotal.value === '0,00' }
      onClick={ () => { history.push('/customer/checkout'); } }
    >
      <span>Total: R$</span>
      <span data-testid="customer_products__checkout-bottom-value">
        {cartTotal.value}
      </span>
    </Button>
  );
}

export default CartButton;
