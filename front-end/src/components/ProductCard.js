import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="card">
      <span
        className="price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price}`}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt="product"
      />
      <div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
        <button
          onClick={ decreaseQuantity }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -
        </button>
        <input
          type="number"
          step={ 1 }
          min={ 0 }
          className="quantity"
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          onClick={ increaseQuantity }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
