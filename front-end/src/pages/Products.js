import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import appContext from '../context/appContext';
import { getData } from '../services/apiRequest';
import CardProduct from '../components/CardProduct';
import Header from '../components/Header';

export default function Products() {
  const { cart } = useContext(appContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    getData('http://localhost:3001/products')
      .then((data) => {
        setProducts(data);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    const values = Object.values(cart)
      .reduce((acc, curr) => acc + parseFloat(curr.subTotal), 0)
      .toFixed(2)
      .replace('.', ',');
    setTotal(values);
  }, [cart]);

  return (
    <>
      <Header />
      <ul>
        {loading ? <loading /> : products
          .map((product) => <CardProduct key={ product.id } item={ product } />)}
      </ul>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        className="total-button"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ Object.keys(cart).length === 0 }
      >
        Ver Carrinho: R$
        <div data-testid="customer_products__checkout-bottom-value">{total}</div>
      </button>
    </>
  );
}
