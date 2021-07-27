import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard(props) {
  const { product: { id, name, price, urlImage } } = props;
  console.log(props);
  return (
    <div>
      <h2
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price}` }
      </h2>
      <img
        alt="Movie Cover"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
      />
      <div>
        <h4 data-testid={ `customer_products__element-card-title-${id}` }>{ name }</h4>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          placeholder="0"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
};
