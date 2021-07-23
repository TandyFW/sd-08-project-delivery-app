import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import GlobalContext from '../context/GlobalProvider';

export default function Header() {
  const {
    values: {
      name,
    },
  } = useContext(GlobalContext);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Delivery App</Navbar.Brand>
        <Nav className="me-auto">
          <Navbar.Text
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {name}
          </Navbar.Text>
          <Nav.Link
            href="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Nav.Link>
          <Nav.Link
            href="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </Nav.Link>
          <Nav.Link
            href="/login"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
