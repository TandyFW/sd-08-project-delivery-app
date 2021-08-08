/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Add, Remove } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import { CardBody, CardImg } from './styled';
import DeliveryContext from '../../context/DeliveryContext';

import { minProductVerify } from '../../services/validations';

const ProductCard = ({ product: { id, name, urlImage, price } }) => {
  const [quantity, setQuantity] = useState(0);

  const { cart, setCart } = useContext(DeliveryContext);

  const handleChange = ({ target }) => {
    setQuantity(target.value);
  };

  const updateCard = () => {
    const itemExists = cart.find((elem) => elem.id === id);

    if (quantity === 0) {
      const removeProduct = cart.filter((elem) => elem.id !== id);
      setCart(removeProduct);
    } else if (itemExists) {
      const updatedCart = cart.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            quantity,
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
        quantity,
      };

      setCart([...cart, item]);
    }
  };

  useEffect(() => {
    updateCard();
  }, [quantity]);

  return (
    <CardBody>
      <div>
        R$
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {String(price).replace('.', ',')}
        </span>

      </div>
      <CardImg
        src={ urlImage }
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
          onClick={ () => { setQuantity(quantity - 1); } }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          disabled={ minProductVerify(quantity) }
        >
          <Remove />
        </Button>
        <input
          type="number"
          value={ quantity }
          onChange={ handleChange }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          min="0"
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={ () => { setQuantity(Number(quantity) + 1); } }
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
