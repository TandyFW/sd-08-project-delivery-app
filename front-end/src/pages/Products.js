import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { API_PRODUCTS_URL } from '../service/backendApi';
import ProductCard from '../components/ProductCard';
import { GlobalContext } from '../context/GlobalProvider';

function Products() {
  const [redirect, setRedirect] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);

  if (!localStorage.getItem('carrinho')) {
    localStorage.setItem('carrinho', JSON.stringify({}));
  }

  const { values: { totalPrice } } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'get',
      url: API_PRODUCTS_URL,
    })
      .then((result) => setProducts(result.data));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (totalPrice > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    localStorage.setItem('totalPrice', Math.round(totalPrice * 100) / 100);
  }, [totalPrice]);

  if (redirect) return (<Redirect to="/customer/checkout" />);

  return (
    <>
      <Header />
      <Container fluid>
        <Row className="justify-content-center p-4">
          { loading
            ? <div>Loading</div>
            : products.map((item, index) => (
              <ProductCard key={ index } product={ item } />
            ))}
        </Row>
        <Row sm="auto" className="justify-content-end p-4">
          <Button
            variant="success"
            className="rounded"
            data-testid="customer_products__button-cart"
            disabled={ disable }
            onClick={ () => setRedirect(true) }
          >
            Ver Carrinho: R$
            { ' ' }
            <span data-testid="customer_products__checkout-bottom-value">
              { `${(Math.round(totalPrice * 100) / 100).toString().replace('.', ',')}` }
            </span>
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Products;
