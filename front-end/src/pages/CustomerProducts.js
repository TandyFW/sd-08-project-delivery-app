import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const CustomerProducts = (props) => {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if(!userData)
    setUser(user);
    axios.get('http://localhost:3001/customer/products', {
      headers: {
        authorization: userData.token,
      },
    })
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, [user]);

  return (
    <>
      <Navbar name={ user.name } />
      { products.map((product) => <ProductCard key={ product.id } product={product} />) }
    </>
  );
};

export default CustomerProducts;
