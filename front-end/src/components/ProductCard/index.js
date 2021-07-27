import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Add, Remove } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import { CardBody, CardImg } from './styled';
import DeliveryContext from '../../context/DeliveryContext';

const ProductCard = ({ product: { id, name, image, price } }) => {
  const [count, setCount] = useState(0);

  const { cart, setCart } = useContext(DeliveryContext);

  const handleChange = ({ target }) => {
    setCount(target.value);
  };

  const updateCard = () => {
    const itemExists = cart.find((elem) => elem.id === id);

    if (count === 0) {
      const removeProduct = cart.filter((elem) => elem.id !== id);
      setCart(removeProduct);
    } else if (itemExists) {
      const updatedCart = cart.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            count,
          };
        }
        return elem;
      });
      setCart(updatedCart);
    } else {
      const item = {
        id,
        price,
        name,
        count,
      };

      setCart([...cart, item]);
    }
  };

  useEffect(() => {
    updateCard();
  }, [count]);

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
