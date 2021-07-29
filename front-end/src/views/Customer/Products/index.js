import React, { useEffect, useState, useContext } from 'react';

import NavBar from '../../Components/NavBar';
import Cart from '../../Components/Cart';
import CardProduct from '../../Components/CardProduct';
import Context from '../../../context/Context';
import './styles.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify({
      token: user.token,
      name: user.user.name,
      email: user.user.email,
      role: user.user.role,
    }));
  }, [user]);

  async function getData() {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    await fetch('http://localhost:3001/customer/products', myInit)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card_content">
      <NavBar userType="client" userName={ user.user.name } />
      {products.length > 0 && (
        products.map((product) => (
          <CardProduct key={ product.id } product={ product } />
        )))}
      <Cart />
    </div>
  );
};

export default Products;
