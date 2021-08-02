import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import * as api from '../../services/api';
import CartContext from '../../context/CartContext';
import DeliveryContext from '../../context/DeliveryContext';
import CustomerNavbar from '../../components/Navbar/CustomerNavbar';
import ListContainer from '../../components/List/ListContainer';
import ProductListHeader from '../../components/List/ProductListHeader';
import ProductResume from '../../components/ProductResume';
import TotalValueTag from '../../components/TotalValueTag';
import Label from '../../components/Input/Label';
import Input from '../../components/Input/Input';
import Select from '../../components/Input/Select';

const CheckoutLabel = styled(Label)`
  font-size: 1rem;
`;

const OrderButton = styled.button`
  align-self: center;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 20px 90px;
  text-transform: uppercase;
`;

const Container = styled.main`
  padding: 30px 60px;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  padding: 15px;

  *:not( :last-child ) {
    margin-right: 20px;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

const ProductResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  > *:not( :last-child ) {
    margin-bottom: 8px;
  }
`;

const ProductListContainer = styled(ListContainer)`
  padding-bottom: 120px;
`;

const Checkout = () => {
  const [selectedSeller, setSelectedSeller] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellers, setSellers] = useState([]);
  const { cart, products } = useContext(CartContext);
  const { token } = useContext(DeliveryContext);
  const history = useHistory();

  const fetchSellers = async () => {
    const result = await api.getSellers();
    if (result.length > 0) setSelectedSeller(result[0].name);
    setSellers(result);
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const cartProducts = products.filter((product) => (
    cart[product.id] && cart[product.id] > 0
  ));

  const handleSubmitOrder = async () => {
    console.log(sellers, selectedSeller);
    const { id: sellerId } = sellers.find((currentSeller) => (
      currentSeller.name === selectedSeller));

    const orderCart = Object.entries(cart).map(([id, quantity]) => (
      { id: Number(id), quantity }));

    try {
      const { saleId } = await api.submitOrder({
        cart: orderCart,
        sellerId,
        deliveryAddress,
        deliveryNumber,
      }, token);

      history.push(`/customer/orders/${saleId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const renderOrderResume = () => (
    <Section>
      <Title>Finalizar pedido</Title>
      <ProductListContainer>
        <ProductListHeader removable />
        <ProductResumeContainer>
          { cartProducts.map((product, index) => (
            <ProductResume
              key={ product.id }
              product={ product }
              quantity={ cart[product.id] }
              index={ index }
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
              testId="customer_checkout"
              removable
            />
          )) }
        </ProductResumeContainer>
        <TotalValueTag
          testId="customer_checkout__element-order-total-price"
          absolute
        >
          Total
        </TotalValueTag>
      </ProductListContainer>
    </Section>
  );

  const renderForm = () => (
    <Section>
      <Title>Detalhes e endereço para entrega</Title>
      <ListContainer>
        <FormContainer>
          <CheckoutLabel text="P. Vendedora Responsável">
            <Select
              options={ sellers.map((seller) => seller.name) }
              data-testid="customer_checkout__select-seller"
              value={ selectedSeller }
              onChange={ ({ target }) => setSelectedSeller(target.value) }
            />
          </CheckoutLabel>
          <CheckoutLabel text="Endereço">
            <Input
              data-testid="customer_checkout__input-address"
              value={ deliveryAddress }
              onChange={ ({ target }) => setDeliveryAddress(target.value) }
            />
          </CheckoutLabel>
          <CheckoutLabel text="Número">
            <Input
              data-testid="customer_checkout__input-addressNumber"
              value={ deliveryNumber }
              onChange={ ({ target }) => setDeliveryNumber(target.value) }
            />
          </CheckoutLabel>
        </FormContainer>
        <OrderButton
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleSubmitOrder }
        >
          Finalizar Pedido
        </OrderButton>
      </ListContainer>
    </Section>
  );

  return (
    <>
      <CustomerNavbar />
      <Container>
        { renderOrderResume() }
        { renderForm() }
      </Container>
    </>
  );
};

export default Checkout;
