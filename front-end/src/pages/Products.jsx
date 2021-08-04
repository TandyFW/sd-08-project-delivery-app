import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBar, ProductsList, ProductsCart } from '../components';
import { lStorage } from '../utils';

const Products = () => {
  const [subtotal, setSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/customer/products') lStorage().cart.remove();
  }, [location.pathname]);

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
    <>
      <NavBar userType="customer" userName={ userFullName } />
      <ProductsCart subtotal={ subtotal } refreshCart={ refreshSubTotal } />
      <ProductsList refreshCart={ refreshSubTotal } />
    </>
  );
};

export default Products;
