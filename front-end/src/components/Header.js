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

  // const { name, role } = JSON.parse(obj) || 'undefined';
  // const ruleConfig = {
  //   customer: [
  //     { name: 'PRODUTOS', link: '/customer/products' },
  //     { name: 'MEUS PEDIDOS', link: '/customer/orders' },
  //   ],
  //   seller: [
  //     { name: 'PEDIDOS', link: '/seller/products' },
  //   ],
  //   admin: [
  //     { name: 'GERENCIAR USUÁRIOS', link: '/admin/manage' },
  //   ],
  // };

  // { ruleConfig[role].map((contents) => (
  //   <Nav.Link
  //     href={ contents.link }
  //     data-testid={`${role}_products__element-navbar-link-${contents.link.split('/')[1]}`}
  //   > ));
  //   }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Delivery App</Navbar.Brand>
        <Nav
          className="me-auto"
        >

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
