import React from 'react';
import Header from '../../components/Header';

const Products = () => (
  <>
    <Header
      dinamicButtons={ [
        { name: 'produtos', link: '/products' },
        { name: 'Meus Pedidos', link: '/sei-la' },
      ] }
    />
    <div>
      tela de produtos
    </div>
  </>
);

export default Products;
