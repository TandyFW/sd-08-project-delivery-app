import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { lStorage } from '../utils';

const useStyles = makeStyles({
  root: {
    margin: '50px',
    maxWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  price: {
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    width: 20,
    textAlign: 'center',
  },
});

function ProductCard({ product, refreshCart }) {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(0);

  const filterInput = (event) => {
    const lastKey = event.target.value[event.target.value.length - 1];
    if (parseInt(lastKey, 10) || event.target.value === '' || lastKey === '0') {
      if (event.target.value === '') return null;
      return parseInt(event.target.value, 10);
    }
  };

  const handleChange = (event) => {
    const value = filterInput(event);
    lStorage().cart.set({
      name: product.name,
      quantity: ((!value) ? 0 : value),
      price: product.price,
    });
    refreshCart();
    if (!value) setQuantity(0);
    else setQuantity(value);
  };

  return (
    <Card className={ classes.root } variant="outlined">
      <CardContent className={ classes.card }>
        <Typography
          className={ classes.title }
          data-testid={ `customer_products__element-card-title-${product.id}` }
          color="textSecondary"
          gutterBottom
        >
          { product.name }
        </Typography>
        <Typography
          data-testid={ `customer_products__element-card-price-${product.id}` }
          className={ classes.price }
          color="textSecondary"
        >
          { product.price.replace('.', ',') }
        </Typography>
        <img
          src={ product.urlImage }
          className={ classes.image }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          alt="product"
          width="150px"
          height="150px"
        />
      </CardContent>
      <CardActions>
        <Button
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          onClick={ () => {
            if (quantity !== 0) {
              lStorage().cart.set({
                name: product.name,
                quantity: quantity - 1,
                price: product.price,
              });
              setQuantity(quantity - 1);
              refreshCart();
            }
          } }
        >
          -
        </Button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
          className={ classes.input }
          value={ quantity }
          onChange={ handleChange }
        />
        <Button
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
          onClick={ () => {
            lStorage().cart.set({
              name: product.name,
              quantity: quantity + 1,
              price: product.price,
            });
            setQuantity(quantity + 1);
            refreshCart();
          } }
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
  refreshCart: PropTypes.func.isRequired,
};

export default ProductCard;
