import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../Context';

export default function ProductCard(props) {
  const {
    product: { id, name, price, urlImage },
  } = props;
  const { products, setProducts } = useContext(Context);
  const [productData, setProductData] = useState({
    id,
    name,
    price,
    quantity: 0,
  });

  useEffect(() => {
    const updatedProducts = products
      .map((product) => (product.id === id ? { ...product, ...productData } : product));
    setProducts(updatedProducts);
  }, [productData]);

  const incrementItem = () => {
    setProductData({
      ...productData,
      quantity: productData.quantity + 1,
    });
  };

  const decrementItem = () => {
    if (productData.quantity === 0) return;
    setProductData({
      ...productData,
      quantity: productData.quantity - 1,
    });
  };

  const handleQuantityChange = ({ target }) => {
    setProductData({
      ...productData,
      quantity: target.value,
    });
  };

  return (
    <div>
      <div>
        <span>R$ </span>
        <span
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          {price.replace(/\./, ',')}
        </span>
      </div>
      <img
        alt="Movie Cover"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
      />
      <div>
        <h4 data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </h4>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ decrementItem }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          placeholder="0"
          value={ productData.quantity }
          onChange={ handleQuantityChange }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ incrementItem }
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
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
