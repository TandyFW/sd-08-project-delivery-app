import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CardProduct from '../components/CardProduct';
import {
  ProductList,
  CartButton,
} from '../styles/pages/CustomerProducts.styled';
import api from '../services/api';
import colors from '../styles/colors';

const getProducts = async () => {
  const result = await api.get('/delivery/products');
  return result.data;
};

function ClientProducts() {
  const prefix = 'customer_products__';
  let total = useSelector((state) => state.products.products);
  total = total.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.qtd),
    0,
  );
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const gotoCheckout = () => {
    history.push('/customer/checkout');
  };

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
    console.log(products);
    setLoading(false);
  }, [products]);
  return (
    <div>
      <NavBar user={ user.name } />
      <CartButton
        disabled={ total === 0 }
        onClick={ () => gotoCheckout() }
        data-testid={ `${prefix}button-cart` }
        color={ colors.teal }
      >
        <span>Ver Carrinho</span>
        <span data-testid={ `${prefix}checkout-bottom-value` }>
          {total.toFixed(2).replace('.', ',')}
        </span>
      </CartButton>
      <ProductList>
        {!loading
          && products.map((product, index) => (
            <CardProduct
              key={ index }
              prefix={ prefix }
              price={ product.price }
              tumbnail={ product.url_image }
              title={ product.name }
              id={ product.id }
            />
          ))}
      </ProductList>
    </div>
  );
}

export default ClientProducts;
