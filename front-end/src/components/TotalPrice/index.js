import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';
import PriceTag from './Styled';

export default function TotalPrice() {
  const { setTotalPrice } = useContext(Context);
  const history = useHistory();
  const { products } = useContext(Context);
  const totalValue = products.reduce((total, product) => {
    const productPrice = parseFloat(product.price);
    total += productPrice * product.quantity;
    return total;
  }, 0);
  setTotalPrice(totalValue);

  return (
    <PriceTag
      data-testid="customer_products__button-cart"
      disabled={ !totalValue }
      onClick={ () => { history.push('/customer/checkout'); } }
    >
      <span>Ver carrinho: R$ </span>
      <span data-testid="customer_products__checkout-bottom-value">
        {totalValue.toFixed(2).replace(/\./, ',')}
      </span>
    </PriceTag>
  );
}
