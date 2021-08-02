import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartContext from '../components/CartContext';

const CustomerProducts = () => {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const { total } = useContext(CartContext);

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
  console.log(products);

  return (
    <>
      <Navbar name={ user.name } />
      { products
        .map((product) => <ProductCard key={ product.id } product={ product } />) }
      <button
        data-testid="customer_products__button-cart"
        type="button"
        disabled={ !total }
        onClick={ () => history.push('/customer/checkout') }
      >
        <span data-testid="customer_products__checkout-bottom-value">
          { total.toFixed(2).replace('.', ',') }
        </span>
      </button>
    </>
  );
};

export default CustomerProducts;
