import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { request } from '../utils';
import ProductCard from './ProductCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getProducts = async () => {
      const result = await request('products', 'GET');
      setProducts(result);
    };
    if (products.length === 0) getProducts();
  }, [products]);

  return (
    <div className={ classes.root }>
      { products.map((product) => (
        <ProductCard
          key={ product.id }
          product={ product }
        />)) }
    </div>
  );
};

export default ProductsList;
