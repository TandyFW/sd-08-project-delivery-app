import React, { useContext } from 'react';
import ProductCard from '../ProductCard';
import { Context } from '../../Context';
import TotalPrice from '../TotalPrice';

export default function DisplayProducts() {
  const { products } = useContext(Context);

  return (
    <div>
      <div>
        {
          products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
        }
      </div>
      <TotalPrice />
    </div>
  );
}
