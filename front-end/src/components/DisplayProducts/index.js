import React, { useEffect, useState, history } from 'react';
// import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import api from '../../Apis/api1';

export default function DisplayProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const responseProducts = await api
        .productsFetch()
        .then((data) => data)
        .catch((err) => err.message);
      console.log(responseProducts.data.response);
      setProducts(responseProducts.data.response);
    };
    loadProducts();
  }, []);

  return (
    <div>
      <div>
        {
          products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
        }
      </div>
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
        onClick={ () => { history.push('/customer/checkout'); } }
      >
        {'Ver Carrinho: R$ {total}'}
      </button>
    </div>
  );
}
