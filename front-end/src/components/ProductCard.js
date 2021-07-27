import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { id, name, price, url_image: urlImage } = product;
  return (
    <section className="card">
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {'R$ {price}'}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="product"
      />
      <div>
        <p data-testid={ `customer_products__element-card-title-${name}` }>{name}</p>
      </div>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -
        </button>
        <span
          data-testid={ `customer_products__input-card-quantity-${id}` }
        >
          {Number(price)}
        </span>
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +
        </button>
      </div>
    </section>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
