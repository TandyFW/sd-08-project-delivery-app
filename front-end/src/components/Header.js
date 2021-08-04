import React, { useContext, useState } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Col,
  NavbarBrand,
} from 'react-bootstrap';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalProvider';
import './Header.css';

export default function Header() {
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);
  const [, role, route] = useLocation().pathname.split('/');
  const {
    functions: { setStoredLS },
  } = useContext(GlobalContext);
  const obj = localStorage.getItem('user');

  if (redirect) return <Redirect to="/login" />;
  const logout = () => {
    localStorage.clear();
    setStoredLS(false);
    setRedirect(true);
  };

  const { name } = JSON.parse(obj) || 'undefined';
  const routers = {
    customer: [
      { name: 'PRODUTOS', link: '/customer/products' },
      { name: 'MEUS PEDIDOS', link: '/customer/orders' },
    ],
    seller: [{ name: 'PEDIDOS', link: '/seller/orders' }],
    admin: [{ name: 'GERENCIAR USUÁRIOS', link: '/admin/manage' }],
  };
  return (
    <Container fluid className="bgGreen">
      <Row>
        <Col
          className="pt-2 px-3 text-center"
          md={ { span: 2 } }
          xs={ { span: 12 } }
        >
          <NavbarBrand className="text-white text-uppercase" href="#home">
            Delivery App
          </NavbarBrand>
        </Col>
        <Col
          md={ { span: 6 } }
          xs={ { span: 12 } }
          className="d-flex text-center
          align-item-center"
        >
          <Nav
            variant="pills"
            className="p-1"
            defaultActiveKey={ `/${role}/${route}` }
          >
            {routers[role].map((contents, idx) => (
              <Nav.Link
                key={ idx }
                eventKey={ contents.link }
                data-testid={ `customer_products__element-navbar-link-${
                  contents.link.split('/')[2]
                }` }
                onClick={ () => history.push(contents.link) }
              >
                {contents.name}
              </Nav.Link>
            ))}
          </Nav>
        </Col>
        <Col
          md={ { span: 3 } }
          xs={ { span: 10 } }
          className="d-flex text-center
          align-item-center justify-content-center bgPurple"
        >
          <Navbar.Text
            className="text-white align-middle m-1"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {name}
          </Navbar.Text>
        </Col>
        <Col className="bg-danger p-0" md={ { span: 1 } } xs={ { span: 2 } }>
          <Button
            className="extend"
            variant="danger"
            onClick={ logout }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
