import React, { useContext } from 'react';
import DeliveryAppContext from '../context/DeliveryAppContext';

const ITEM1 = 'customer_products__element-navbar-link-products';
const ITEM2 = 'customer_products__element-navbar-link-orders';
const NICK = 'customer_products__element-navbar-user-full-name';
const SAIR = 'customer_products__element-navbar-link-logout';
export default function Header() {
  const { user, route } = useContext(DeliveryAppContext);

  return (
    <header>
      {route === 'customer'
        && (
          <button
            type="button"
            data-teste-id={ `${ITEM1}` }
          >
            PRODUTOS
          </button>)}
      {route !== 'admin'
        && (
          <button
            type="button"
            data-teste-id={ `${ITEM2}` }
          >
            MEUS PEDIDOS
          </button>)}
      {route === 'admin'
        && (
          <button
            type="button"
            data-teste-id={ `${ITEM1}` }
          >
            GERENCIAR USUÁRIOS
          </button>)}
      <h3 data-teste-id={ `${NICK}` }>{ user.name }</h3>
      <button type="button" data-teste-id={ `${SAIR}` }>SAIR</button>
    </header>
  );
}
