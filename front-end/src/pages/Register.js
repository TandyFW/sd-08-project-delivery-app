import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import FormRegister from '../components/FormRegister';

export default function Register() {
  return (
    <ChakraProvider>
      <FormRegister />
    </ChakraProvider>
  );
}
