import React from 'react';
import { ChakraProvider, VStack, Divider } from '@chakra-ui/react';
import FormCheckout from '../components/FormCheckout';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

export default function Checkout() {
  return (
    <ChakraProvider>
      <VStack
        bg="orange"
        spacing="4"
        align="stretch"
      >
        <Header />
        <ProductsList />
        <Divider orientation="horizontal" borderColor="black" />
        <FormCheckout />
      </VStack>
      <Footer />
    </ChakraProvider>
  );
}
