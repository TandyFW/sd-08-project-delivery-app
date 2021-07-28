import React, { useState, useEffect } from 'react';

import ProductCard from '../ProductCard/index';

import { getProducts } from '../../services/api';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    getProducts(token)
      .then(({ products }) => {
        console.log(products);
        setProductList(products);
      });
  }, []);

  return (
    <div>
      { productList.map((product, index) => (
        <ProductCard key={ index } product={ product } />
      ))}
    </div>
  );
}

export default ProductList;
