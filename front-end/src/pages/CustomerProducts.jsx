import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import CardProduct from '../components/CardProduct';
import { ProductList } from '../styles/pages/CustomerProducts.styled';
import api from '../services/api';

const getProducts = async () => {
  const result = await api.get('/delivery/products');
  // console.log(result.data);
  return result.data;
};

function ClientProducts() {
  const prefix = 'customer_products__';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
    setLoading(false);
  }, []);
  return (
    <div>
      <NavBar user={ user.name } />
      <ProductList>
        {!loading
          && products.map((product, index) => (
            <CardProduct
              key={ index }
              prefix={ prefix }
              price={ product.price }
              tumbnail={ product.urlImage }
              title={ product.name }
              id={ product.id }
            />
          ))}
      </ProductList>
      <span data-testid={ `${prefix}checkout-bottom-value` } />
    </div>
  );
}

export default ClientProducts;
