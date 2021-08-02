import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function ProductCard({ data }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);
  const { id, price, urlImage, name } = data;
  const [quantity, setQuantity] = useState(0);

  const updateProductList = () => {
    const currentList = itemsList.filter((item) => item.quantity !== 0);
    if (currentList.length) {
      const filteredList = currentList.filter((item) => item.productId !== id);

      const updatedList = [
        ...filteredList,
        {
          productId: id,
          name,
          quantity,
          unitaryPrice: +price,
          itemsPrice: (+price * quantity).toFixed(2),
        },
      ];
      return setItemsList(updatedList);
    }
    setItemsList([
      ...currentList,
      {
        productId: id,
        name,
        quantity,
        unitaryPrice: +price,
        itemsPrice: (+price * quantity).toFixed(2),
      },
    ]);
  };

  const incrementItem = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decrementItem = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  useEffect(() => {
    if (quantity > 0) {
      return updateProductList();
    }
  }, [quantity]);
  useEffect(() => {
    if (quantity > 0) {
      return localStorage.setItem('currentItemsList', JSON.stringify(itemsList));
    }
  },
  [itemsList, quantity]);

  return (
    <section className="products-card">
      <div className="card-price-container">
        <p
          className="card-price"
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { `R$ ${price}` }
        </p>
      </div>
      <img
        src={ urlImage }
        alt={ name }
        className="card-img"
        data-testid={ `customer_products__element-card-bg-image-${id}` }
      />
      <div className="card-footer">
        <p
          className="card-title"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </p>
        <div className="card-control">
          <button
            type="button"
            onClick={ decrementItem }
            className="btn-card-decrement"
            id="btnCardDecrement"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
          <p
            className="card-display-quantity"
            data-testid={ `customer_products__input-card-quantity-${id}` }
          >
            { quantity }
          </p>
          <button
            type="button"
            onClick={ incrementItem }
            className="btn-card-increment"
            id="btnCardIncrement"
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.string,
    urlImage: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
