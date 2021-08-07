import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';
import Details from '../components/Details';
import Footer from '../components/Footer';

export default function OrderDetails() {
  return (
    <ChakraProvider>
      <Header />
      <Details />
      <Footer />
    </ChakraProvider>
  );
}
