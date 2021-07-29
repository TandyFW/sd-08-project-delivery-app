import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ProductsCart = ({ subtotal }) => {
  const history = useHistory();

  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <Button
        variant="outlined"
        color="primary"
        data-testid="customer_products__button-cart"
        disabled={ (subtotal === 0) }
        onClick={ () => history.push('/customer/checkout') }
      >
        <span>Subtotal: R$ </span>
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { subtotal.toFixed(2).toString().replace('.', ',') }
        </span>
      </Button>
    </div>
  );
};

ProductsCart.propTypes = {
  subtotal: PropTypes.number.isRequired,
};

export default ProductsCart;
