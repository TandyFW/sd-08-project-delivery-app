import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Cards.css';

export default function Cards({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    if (quantity > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [quantity]);

  const { name, price, urlImage, id } = product;

  return (
    <div className="container">
      <div className="Cards">
        <h2
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.toString().replace('.', ',') }
        </h2>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt="Imagem"
        />
        <h3
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </h3>
        <div>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            onClick={ removeItem }
            disabled={ disabled }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="text"
            value={ quantity }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ addItem }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  product: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
