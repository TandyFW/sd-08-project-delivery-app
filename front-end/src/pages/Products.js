import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ProductsGalery from '../components/ProductsGalery';

export default function Products() {
  return (
    <ChakraProvider>
      <ProductsGalery />
    </ChakraProvider>
  );
}
