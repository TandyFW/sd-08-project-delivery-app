import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import OrderTableCheckout from '../components/OrderTableCheckout';
import Header from '../components/Header';
import FormCheckout from '../components/FormCheckout';
import { GlobalContext } from '../context/GlobalProvider';

const TOTAL_PRICE_ID = 'customer_checkout__element-order-total-price';
const getProductsFromCart = (allProducts) => {
  const storage = JSON.parse(localStorage.getItem('carrinho'));
  const productIds = Object.keys(storage);
  const productList = productIds.reduce((acc, id) => {
    const { name, price } = allProducts
      .find((product) => product.id === parseInt(id, 10));
    acc.push({
      id: parseInt(id, 10),
      description: name,
      quantity: storage[id],
      unitValue: parseFloat(price),
    });
    return acc;
  }, []);
  return productList;
};

function Checkout() {
  const {
    values: { totalPrice, products: allProducts },
    functions: { setTotalPrice },
  } = useContext(GlobalContext);

  const [products, setProducts] = useState(getProductsFromCart(allProducts));
  const [sellers, setSellers] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const totalSum = products.reduce((acc, { quantity, unitValue }) => {
      acc += quantity * unitValue;
      return acc;
    }, 0);
    setTotalPrice(totalSum);
  }, [products, setTotalPrice]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/seller',
    }).then((allSellers) => {
      setSellers(allSellers.data);
    }).then(() => setLoading(false));
  });

  function loadingPage() {
    return <div>loading</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <Row
          className="mt-5 justify-content-center"
        >

          <OrderTableCheckout orderData={ products } onClick={ setProducts } />
        </Row>
        {
          loading
            ? loadingPage()
            : <FormCheckout sellers={ sellers } products={ products } />
        }
        <p data-testid={ TOTAL_PRICE_ID }>
          {totalPrice.toFixed(2).toString().replace('.', ',')}
        </p>
      </Container>
    </>
  );
}

export default Checkout;
