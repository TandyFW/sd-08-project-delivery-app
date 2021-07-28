import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';
import StyledTotalPrice from './Styled';

export default function TotalPrice() {
  const history = useHistory();
  const { products } = useContext(Context);
  const totalValue = products.reduce((total, product) => {
    const productPrice = parseFloat(product.price);
    total += productPrice * product.quantity;
    return total;
  }, 0);

  return (
    <StyledTotalPrice
      onClick={ () => {
        history.push('/customer/checkout');
      } }
    >
      <span>Ver carrinho: R$ </span>
      <span data-testid="customer_products__checkout-bottom-value">
        {totalValue.toFixed(2).replace(/\./, ',')}
      </span>
    </StyledTotalPrice>
  );
}
