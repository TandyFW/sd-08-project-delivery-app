import React, { useState } from 'react';
import { Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import QuantitySelector from '../buttons/QuantitySelector';

const useStyles = makeStyles((theme) => (
  {

    cards: {
      flexGrow: 1,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
    },
    price: {
      position: 'absolute',
      top: '5px',
      left: '5px',
    },

  }));

function ProductCard(props) {
  const [count, setCount] = useState(0);
  const { name, price, urlImage, id } = props;
  const classes = useStyles();
  return (
    <Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 } className={ classes.cards }>
      <Card data-testid={ `customer_products__element-card-title-${id}` }>
        <CardMedia
          component="img"
          alt={ name }
          // height="180"
          image={ urlImage }
          title={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <CardContent>
          <Typography
            variant="h6"
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            { name }
          </Typography>
          <Typography
            className="classes.price"
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            { `R$${Number(price).toFixed(2)}` }
          </Typography>
          <QuantitySelector setCount={ setCount } count={ count } id={ id } />
        </CardContent>
      </Card>

    </Grid>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
