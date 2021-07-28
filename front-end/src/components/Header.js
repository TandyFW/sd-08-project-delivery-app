import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export default function Header() {
  const [redirect, setRedirect] = useState(false);
  if (redirect) return (<Redirect to="/login" />);

  const obj = localStorage.getItem('user');
  const name = JSON.parse(obj).name || 'undefined';

  const logout = () => {
    localStorage.clear();
    setRedirect(true);
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Delivery App</Navbar.Brand>
        <Nav className="me-auto">
          <Navbar.Text
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
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
          <Button
            variant="danger"
            onClick={ logout }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
