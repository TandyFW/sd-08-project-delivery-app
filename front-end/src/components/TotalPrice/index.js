import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';
import StyledTotalPrice from './Styled';

export default function TotalPrice() {
  const history = useHistory();
  const { products } = useContext(Context);
  const totalValue = products
    .reduce((total, product) => {
      const productPrice = parseFloat(product.price);
      total += (productPrice * product.quantity);
      return total;
    }, 0);

  return (
    <StyledTotalPrice
      data-testid="customer_products__checkout-bottom-value"
      onClick={ () => { history.push('/customer/checkout'); } }
    >
      {`Ver carrinho: R$ ${totalValue.toFixed(2)}`}
    </StyledTotalPrice>
  );
}
