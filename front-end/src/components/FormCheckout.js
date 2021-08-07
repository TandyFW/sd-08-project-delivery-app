import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Box, Flex, FormControl, FormLabel, Input,
  Select, Button, Heading } from '@chakra-ui/react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import sendOrder from '../services/sendOrder';

export default function FormCheckout() {
  const {
    setSellerId,
    sellerId,
    userId,
    totalPrice,
    itemsList,
    sellers,
    user,
  } = useContext(DeliveryAppContext);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  // const [saleId, setSaleId] = useState(0);

  const submitOrder = async (e) => {
    e.preventDefault();
    const idSale = await sendOrder({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productsList: itemsList,
    }, user.token);

    window.location.href = `http://localhost:3000/customer/orders/${idSale}`;
    // setSaleId(currentSaleId);
  };

  const selectSeller = () => {
    const currentSellerId = document.querySelector('#checkoutSeller').value;
    // console.log(currentSellerId);
    setSellerId(currentSellerId);
  };

  return (
    <Box
      className="form-checkout-container"
      bg="orange"
      p="50"
      marginTop="5"
    >
      <Heading className="title-h2" textAlign="center" size="lg" color="#121212">
        Detalhes e Endereço para Entrega
      </Heading>
      <Flex>
        <FormControl p="10">
          <FormLabel
            transform="skewX(-12deg)"
            fontWeight="bold"
            color="#121212"
          >
            P. Vendedora Responsável
          </FormLabel>
          <Select
            className="seller-select"
            name="select-seller"
            id="checkoutSeller"
            bg="white"
            borderColor="black"
            focusBorderColor="black"
            _hover="none"
            onChange={ selectSeller }
            data-testid="customer_checkout__select-seller"
          >
            <option value="0"> </option>
            {sellers.map((seller) => (
              <option
                className="option-seller"
                value={ seller.id }
                key={ seller.id }
              >
                { seller.name }
              </option>))}
          </Select>
        </FormControl>
        <FormControl p="10">
          <FormLabel
            transform="skewX(-12deg)"
            fontWeight="bold"
            color="#121212"
          >
            Endereço
          </FormLabel>
          <Input
            type="text"
            maxLength="100"
            className="input-address"
            bg="white"
            borderColor="black"
            focusBorderColor="black"
            _hover="none"
            onKeyUp={ () => setDeliveryAddress(document
              .querySelector('#checkoutAddress').value) }
            id="checkoutAddress"
            data-testid="customer_checkout__input-address"
          />
        </FormControl>
        <FormControl p="10">
          <FormLabel transform="skewX(-12deg)" fontWeight="bold">Número</FormLabel>
          <Input
            type="text"
            minLength="1"
            maxLength="5"
            bg="white"
            borderColor="black"
            focusBorderColor="black"
            _hover="none"
            className="input-address-number"
            onKeyUp={ () => setDeliveryNumber(document
              .querySelector('#checkoutAddressNumber').value) }
            id="checkoutAddressNumber"
            data-testid="customer_checkout__input-addressNumber"
          />
        </FormControl>
      </Flex>
      <Flex justifyContent="center" width="200vh">
        <Button
          type="submit"
          className="btn-form-checkout"
          id="btnCheckout"
          onClick={ (e) => submitOrder(e) }
          data-testid="customer_checkout__button-submit-order"
          bg="black"
          color="white"
        >
          FINALIZAR PEDIDO
        </Button>
      </Flex>
    </Box>);
}
