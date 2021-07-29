import React, { useState } from 'react';
import Components from '../components';
import { lStorage } from '../utils';

lStorage().cart.remove();

const Products = () => {
  const [subtotal, setSubTotal] = useState(0);

  const screens = [
    { name: 'Produtos', testId: 'products' }, { name: 'Meus Pedidos', testId: 'orders' },
  ];

  const sumCart = () => {
    const cart = lStorage().cart.get();
    const products = Object.keys(cart);
    const sum = products.reduce((acc, product) => {
      const totalProduct = cart[product].quantity * parseFloat(cart[product].price);
      return acc + totalProduct;
    }, 0);
    return sum;
  };

  const refreshSubTotal = () => {
    const cart = lStorage().cart.get();
    if (!cart) setSubTotal(0);
    else setSubTotal(sumCart());
  };

  const userFullName = lStorage().user.get().name;

  return (
    <div>
      <Components.NavBar screens={ screens } user={ userFullName } />
      <Components.ProductsCart subtotal={ subtotal } refreshCart={ refreshSubTotal } />
      <Components.ProductsList refreshCart={ refreshSubTotal } />
    </div>
  );
};

export default Products;
