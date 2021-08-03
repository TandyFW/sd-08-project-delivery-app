import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import CartButton from '../../components/buttons/CartButton';
import ProductCard from '../../components/cards/productCard';
import NavBar from '../../components/NavBar';
import Context from '../../context/Context';

function Products() {
  const [products, setProducts] = useState([]);
  const { cart: { set } } = useContext(Context);

  const fetchProducts = async () => {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3001/products',
    });
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
    console.log('teste', products);
  }, []);

  useEffect(() => {
    set(products.map(({ id, price, name }) => ({ id, price, name, quantity: 0 })));
  }, [products]);

  return (
    <>
      <NavBar />
      <div><p>Products</p></div>
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        {products.map(({ id, name, price, urlImage }) => (
          <ProductCard
            key={ id }
            name={ name }
            price={ price }
            urlImage={ urlImage }
            id={ id }
          />
        ))}
      </Grid>
      <CartButton />
    </>
  );
}

export default Products;
