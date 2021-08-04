import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';

const ITEM1 = 'customer_products__element-navbar-link-products';
const ITEM2 = 'customer_products__element-navbar-link-orders';
const NICK = 'customer_products__element-navbar-user-full-name';
const SAIR = 'customer_products__element-navbar-link-logout';
export default function Header() {
  const { user, route } = useContext(DeliveryAppContext);

  const clear = () => localStorage.clear();

  return (
    <header>
      {route === 'customer'
        && (
          <Link to="/customer/products">
            <button
              type="button"
              data-testid={ `${ITEM1}` }
            >
              PRODUTOS
            </button>
          </Link>)}
      {route !== 'admin'
        && (
          <Link to={ `/${route}/orders` }>
            <button
              type="button"
              data-testid={ `${ITEM2}` }
            >
              MEUS PEDIDOS
            </button>
          </Link>)}
      {route === 'admin'
        && (
          <button
            type="button"
            data-testid={ `${ITEM1}` }
          >
            GERENCIAR USUÁRIOS
          </button>)}
      <h3 data-testid={ `${NICK}` }>{ user.name }</h3>
      <Link to="/">
        <button
          type="button"
          onClick={ clear }
          data-testid={ `${SAIR}` }
        >
          SAIR
        </button>
      </Link>
    </header>
  );
}
