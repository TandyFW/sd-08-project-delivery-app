import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';

const ITEM1 = 'customer_products__element-navbar-link-products';
const ITEM2 = 'customer_products__element-navbar-link-orders';
const NICK = 'customer_products__element-navbar-user-full-name';
const SAIR = 'customer_products__element-navbar-link-logout';
export default function Header() {
  const { user } = useContext(DeliveryAppContext);
  const history = useHistory();
  const local = history.location.pathname;
  if (local.search('customer')) {
    return (
      <header>
        <button type="button" data-teste-id={ `${ITEM1}` }>PRODUTOS</button>
        <button type="button" data-teste-id={ `${ITEM2}` }>MEUS PEDIDOS</button>
        <h3 data-teste-id={ `${NICK}` }>{ user.name }</h3>
        <button type="button" data-teste-id={ `${SAIR}` }>SAIR</button>
      </header>);
  }
  if (local.search('seller')) {
    return (
      <header>
        <button type="button" data-teste-id={ `${ITEM1}` }>PEDIDOS</button>
        <h3 data-teste-id={ `${NICK}` }>NICK</h3>
        <button type="button" data-teste-id={ `${SAIR}` }>SAIR</button>
      </header>);
  }
  if (local.search('admin')) {
    return (
      <header>
        <button type="button" data-teste-id={ `${ITEM1}` }>GERENCIAR USUÁRIOS</button>
        <h3 data-teste-id={ `${NICK}` }>NICK</h3>
        <button type="button" data-teste-id={ `${SAIR}` }>SAIR</button>
      </header>);
  }
}
