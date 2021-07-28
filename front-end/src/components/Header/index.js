import React from 'react';
import { useHistory } from 'react-router-dom';

import
{ Container,
  ProductsButton,
  OrdersButton,
  UserButton,
  LogoutButton,
  /* InvalidBox, */
} from './Styled';

export default function Header() {
  const history = useHistory();

  // const name = JSON.parse(localStorage.user) || 'nome';

  return (
    <Container>
      <ProductsButton
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/customer/products') }
      >
        PRODUTOS
      </ProductsButton>
      <OrdersButton
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/customer/orders') }
      >
        MEUS PEDIDOS
      </OrdersButton>
      <UserButton
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
        // onClick={ () => history.push('/user') }
      >
        name
      </UserButton>
      <LogoutButton
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => history.push('/login') }
      >
        Sair
      </LogoutButton>
    </Container>
  );
}
