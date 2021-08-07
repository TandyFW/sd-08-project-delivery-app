import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';
import OrdersList from '../components/OrdersList';
import Footer from '../components/Footer';

export default function Orders() {
  return (
    <ChakraProvider>
      <Header />
      <OrdersList />
      <Footer />
    </ChakraProvider>
  );
}
