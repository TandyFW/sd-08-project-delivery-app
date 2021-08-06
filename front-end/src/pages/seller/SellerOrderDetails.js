import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/api';

import ProductListHeader from '../../components/List/ProductListHeader';
import ProductResume from '../../components/ProductResume';
import SellerProductListStatus from '../../components/SellerProductListStatus';
import SellerNavbar from '../../components/Navbar/SellerNavbar';
import {
  Title,
  Container,
  Section,
  ProductResumeContainer,
  ProductListContainer,
  TotalValue,
} from '../../styles/pages/customer/CustomerOrderDetails';

function SellerOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    api.getOrderById(id).then((result) => {
      setOrder(result);
    });
  }, [id]);

  const handleSetStatus = (newStatus) => {
    setOrder({ ...order, status: newStatus });
  };

  if (!order) return <p>Loading</p>;

  const { products = [], id: orderId, seller: { name },
    saleDate, status, totalPrice } = order;

  const orderData = { id: orderId, name, saleDate, status };

  const renderTotalValue = () => (
    <TotalValue absolute>
      Total: R$
      <span data-testid="seller_order_details__element-order-total-price">
        { totalPrice.replace('.', ',') }
      </span>
    </TotalValue>
  );

  return (
    <>
      <SellerNavbar />
      <Container>
        <Section>
          <Title>Detalhe do Pedido</Title>
          <ProductListContainer>
            <SellerProductListStatus
              testId="seller_order_details"
              order={ orderData }
              handleSetStatus={ handleSetStatus }
            />
            <ProductListHeader />
            <ProductResumeContainer>
              { products.map((product, index) => (
                <ProductResume
                  testId="seller_order_details"
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

export default SellerOrderDetails;
