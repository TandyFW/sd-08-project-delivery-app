import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function Products() {
  const a = {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  };

  return (
    <>
      <Header />
      <ProductCard product={ a } />
    </>
  );
}

export default Products;
