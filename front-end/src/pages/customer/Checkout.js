import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as api from '../../services/api';
import CartContext from '../../context/CartContext';
import DeliveryContext from '../../context/DeliveryContext';
import CustomerNavbar from '../../components/Navbar/CustomerNavbar';
import ListContainer from '../../components/List/ListContainer';
import ProductListHeader from '../../components/List/ProductListHeader';
import ProductResume from '../../components/ProductResume';
import TotalValueTag from '../../components/TotalValueTag';
import Input from '../../components/Input/Input';
import Select from '../../components/Input/Select';
import {
  CheckoutLabel,
  OrderButton,
  Container,
  Section,
  FormContainer,
  Title,
  ProductResumeContainer,
  ProductListContainer,
} from '../../styles/pages/customer/Checkout';

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
