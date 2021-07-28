import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Header from '../components/Header';
import { API_PRODUCTS_URL } from '../service/backendApi';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: API_PRODUCTS_URL,
    })
      .then((result) => setProducts(result.data));
    setLoading(false);
  }, []);

  return (
    <>
      <Header />
      <Container fluid>
        { loading
          ? <div>Loading</div>
          : products.map((item, index) => (
            <ProductCard key={ index } product={ item } />
          ))}
      </Container>
    </>
  );
}

export default Products;
