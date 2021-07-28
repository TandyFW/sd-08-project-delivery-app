import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ProductCard from '../ProductCard/index';

import { getProducts } from '../../services/api';
import { logout } from '../../services/auth';

function ProductList() {
  const history = useHistory();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')) || '';

    getProducts(token)
      .then(({ products }) => {
        console.log(products);
        setProductList(products);
      })
      .catch((err) => {
        const UNAUTHORIZED = 401;
        if (err.response.status === UNAUTHORIZED) logout(history);
      });
  }, [history]);

  return (
    <div>
      { productList.map((product, index) => (
        <ProductCard key={ index } product={ product } />
      ))}
    </div>
  );
}

export default ProductList;
