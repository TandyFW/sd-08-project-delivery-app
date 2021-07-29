import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { request, lStorage } from '../utils';
import ProductCard from './ProductCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});

const CheckoutList = () => {
  const [products, setProducts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getProducts = async () => {
      const { token } = lStorage().user.get();
      const options = {
        headers: {
          Authorization: token,
        },
        method: 'GET',
      };
      const result = await request('products', options);
      setProducts(result);
    };
    if (products.length === 0) getProducts();
  }, [products]);

  return (
    <div className={ classes.root }>
      <h1>Fin</h1>
      { products.map((product) => (
        <ProductCard
          key={ product.id }
          product={ product }
        />)) }
    </div>
  );
};

export default CheckoutList;
