import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Add, Remove } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import { CardBody, CardImg } from './styled';

const ProductCard = ({ product: { id, name, image, price } }) => {
  const [count, setCount] = useState(0);

  const handleChange = ({ target }) => {
    setCount(target.value);
  };

  return (
    <CardBody>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { `R$ ${price}` }
      </span>
      <CardImg
        src={ image }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </p>
      <div>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={ () => { setCount(count - 1); } }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          <Remove />
        </Button>
        <input
          type="number"
          value={ count }
          onChange={ handleChange }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={ () => { setCount(Number(count) + 1); } }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          <Add />
        </Button>
      </div>
    </CardBody>);
};

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductCard;
