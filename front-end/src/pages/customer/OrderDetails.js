import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/api';

import ProductListHeader from '../../components/List/ProductListHeader';
import ProductResume from '../../components/ProductResume';
import ProductListStatus from '../../components/ProductListStatus';
import CustomerNavbar from '../../components/Navbar/CustomerNavbar';
import {
  Title,
  Container,
  Section,
  ProductResumeContainer,
  ProductListContainer,
  TotalValue,
} from '../../styles/pages/customer/OrderDetails';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    api.getOrder(id).then((result) => {
      setOrder(result);
    });
  }, [id]);

  if (!order) return <p>Loading</p>;

  const { products = [], id: orderId, seller: { name },
    saleDate, status, totalPrice } = order;

  const orderData = { id: orderId, name, saleDate, status };

  const renderTotalValue = () => (
    <TotalValue absolute>
      Total: R$
      <span data-testid="customer_order_details__element-order-total-price">
        { totalPrice.replace('.', ',') }
      </span>
    </TotalValue>
  );

  return (
    <>
      <CustomerNavbar />
      <Container>
        <Section>
          <Title>Detalhe do Pedido</Title>
          <ProductListContainer>
            <ProductListStatus
              testId="customer_order_details"
              order={ orderData }
            />
            <ProductListHeader />
            <ProductResumeContainer>
              { products.map((product, index) => (
                <ProductResume
                  testId="customer_order_details"
                  key={ index }
                  product={ product }
                  index={ index }
                  quantity={ product.SalesProducts.quantity }
                />)) }
            </ProductResumeContainer>
            { renderTotalValue() }
          </ProductListContainer>
        </Section>
      </Container>
    </>
  );
}

export default OrderDetails;
