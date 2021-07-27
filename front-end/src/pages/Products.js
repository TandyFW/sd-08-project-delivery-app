import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import useAxios from '../hooks/useAxios';
import { API_PRODUCTS_URL } from '../service/backendApi';
import ProductCard from '../components/ProductCard';

function Products() {
  const {
    request,
    response,
    loading,
  } = useAxios();

  console.log(`${response} 11111111`);

  const [products, setProducts] = useState([]);

  useEffect(() => async () => {
    console.log(`${loading} 21`);
    const options = {
      method: 'get',
      url: API_PRODUCTS_URL,
    };
    await request(options);
    console.log(`${response} 33333333`);
    setProducts(response);
  }, []);
  console.log(`${loading} 1`);

  return (
    <>
      <Header />
      { loading
        ? <div>Loading</div>
        : products.map((item, index) => <ProductCard key={ index } product={ item } />) }
    </>
  );
}

export default Products;
