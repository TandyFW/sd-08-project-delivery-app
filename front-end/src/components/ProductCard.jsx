import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    marginBottom: 12,
    textAlign: 'center',
  },
  image: {
  },
});

function ProductCard({ product }) {
  const classes = useStyles();

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
          { product.price }
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
        >
          -
        </Button>
        <Button
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    name: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
