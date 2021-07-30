import React, { useContext } from 'react';
import { Context } from '../../Context';
import ItemList from '../ItemList';

import {
  Container,
  Title,
  ContainerDiv,
  TotalOrder,
  /* InvalidBox, */
} from './Styled';

export default function ProductsList() {
  const { products, totalPrice } = useContext(Context);
  const selectedProducts = products.filter((product) => product.quantity > 0);

  return (
    <Container>
      <Title>Finalizar Pedido</Title>
      <ContainerDiv>
        {selectedProducts.length > 0 ? (
          selectedProducts.map((item, index) => (
            <ItemList
              key={ index }
              item={ item.id }
              description={ item.name }
              quantity={ item.quantity }
              unitaryValue={ item.price }
              index={ index }
              dataTestId="customer_checkout"
            />
          ))
        ) : (
          <h2>Não há produtos no carrinho</h2>
        )}
        <TotalOrder>
          Total: R$
          <span data-testid="customer_checkout__element-order-total-price">
            {totalPrice.toFixed(2).replace(/\./, ',')}
          </span>
        </TotalOrder>
      </ContainerDiv>
    </Container>
  );
}
