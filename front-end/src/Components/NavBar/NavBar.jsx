import React from 'react';
import './NavBar.css';
import getLocalStorage from '../../service/getLocalStorage';

export default function NavBar() {
  return (
    <ul>
      <li>Produtos</li>
      <li>Meus Pedidos</li>
      <li>{ getLocalStorage().name }</li>
      <li>Sair</li>
    </ul>
  );
}
