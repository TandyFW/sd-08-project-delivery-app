import React, { useContext } from 'react';
import { Context } from '../../Context';
import ItemList from '../ItemList';

import
{ Container,
  Title,
  ContainerDiv,
  TotalOrder,
  /* InvalidBox, */
} from './Styled';

export default function ProductsList() {
  const { products, setProducts } = useContext(Context);
  const selectedProducts = products.filter((product) => product.quantity > 0);
  console.log(selectedProducts, setProducts);

  return (
    <Container>
      <Title>Finalizar Pedido</Title>
      <ContainerDiv>
        { mockProducts.length > 0 ? mockProducts.map((item, index) => (
          <ItemList
            key={ index }
            item={ item.id }
            description={ item.description }
            quantity={ item.qtde }
            unitaryValue={ item.valorUnit }
            totalValue={ item.total }
          />
        )) : <h2>Não há produtos no carrinho</h2> }
        <TotalOrder>
          Total: R$ 0,00
          <span data-testid="customer_checkout__element-order-total-price">
            {/* {` R$ ${totalValueCart.toFixed(2)`} */}
          </span>
        </TotalOrder>
      </ContainerDiv>
    </Container>
  );
}
