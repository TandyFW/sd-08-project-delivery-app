import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartContextProvider from '../components/CartContextProvider';

const CustomerProducts = () => {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) return history.push('/login');
    setUser(userData);
    axios.get('http://localhost:3001/customer/products', {
      headers: {
        authorization: userData.token,
      },
    })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, [history]);

  return (
    <CartContextProvider>
      <Navbar name={ user.name } />
      { products
        .map((product) => <ProductCard key={ product.id } product={ product } />) }
    </CartContextProvider>
  );
};

export default CustomerProducts;
