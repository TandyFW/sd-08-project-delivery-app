import React from 'react';
import ItemList from '../ItemList';

import
{ Container,
  Title,
  ContainerDiv,
  TotalOrder,
  /* InvalidBox, */
} from './Styled';

const mockProducts = [
  { id: 1, description: 'cerveja', qtde: 3, valorUnit: 3.50, total: 10.50 },
  { id: 2, description: 'salgadinho', qtde: 2, valorUnit: 1.56, total: 1.56 },
];

export default function ProductsList() {
  // const [totalValueCart, setTotalValueCart] = useState();

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
