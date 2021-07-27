import React from 'react';
import Components from '../components';

const CustomerProduct = () => (
  <div>
    <Components.TopBar subject="Gerenciar Usuários" user="Test" />
    <Components.CustomerProducts />
  </div>);

export default CustomerProduct;
