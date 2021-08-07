import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';
import ManageDetails from '../components/ManageDetails';
import Footer from '../components/Footer';

export default function Manage() {
  return (
    <ChakraProvider>
      <Header />
      <ManageDetails />
      <Footer />
    </ChakraProvider>
  );
}
