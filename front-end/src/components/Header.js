import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export default function Header() {
  const [redirect, setRedirect] = useState(false);
  if (redirect) return <Redirect to="/login" />;

  const obj = localStorage.getItem('user');

  const logout = () => {
    localStorage.clear();
    setRedirect(true);
  };

  const { name, role } = JSON.parse(obj) || 'undefined';
  const routers = {
    customer: [
      { name: 'PRODUTOS', link: '/customer/products' },
      { name: 'MEUS PEDIDOS', link: '/customer/orders' },
    ],
    seller: [{ name: 'PEDIDOS', link: '/seller/products' }],
    administrator: [{ name: 'GERENCIAR USUÁRIOS', link: '/admin/manage' }],
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Delivery App</Navbar.Brand>
        <Nav className="me-auto">
          {routers[role].map((contents, idx) => (
            <Nav.Link
              key={ idx }
              href={ contents.link }
              data-testid={ `${role}_products__element-navbar-link-${
                contents.link.split('/')[1]
              }` }
            >
              { contents.name }
            </Nav.Link>
          ))}
          <Navbar.Text data-testid="customer_products__element-navbar-user-full-name">
            {name}
          </Navbar.Text>
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
