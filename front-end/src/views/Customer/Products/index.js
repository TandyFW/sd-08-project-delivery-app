import React, { useEffect, useState, useContext } from 'react';

import NavBar from '../../Components/NavBar';
import Cart from '../../Components/Cart';
import CardProduct from '../../Components/CardProduct';
import Context from '../../../context/Context';
import './styles.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { userData } = useContext(Context);
  async function getData() {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: userData.token,
      },
    };
    await fetch('http://localhost:3001/customer/products', myInit)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, [userData]);

  return (
    <div className="main-wrapper-products">
      <NavBar
        userType={ userData.role }
        userName={ userData.name }
      />
      <div className="wrapper-card-product">
        {products && products.length > 0 && (
          products.map((product) => (
            <CardProduct key={ product.id } product={ product } />
          )))}
      </div>
      <Cart />
    </div>
  );
};

export default Products;
