import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import FormLogin from '../components/FormLogin';

export default function Login() {
  return (
    <ChakraProvider>
      <FormLogin />
    </ChakraProvider>
  );
}
