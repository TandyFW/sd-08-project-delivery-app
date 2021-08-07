import React from 'react';
import {
  Box,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      bg="black"
      color="white"
    >
      <Flex
        as="Stack"
        maxW="6xl"
        py="4"
        direction={ { base: 'column', md: 'row' } }
        spacing="4"
        justify={ { base: 'center', md: 'space-between' } }
        align={ { base: 'center', md: 'center' } }
      >
        <Stack direction="row" spacing="6" marginLeft="5">
          <Text>Início</Text>
          <Text>Sobre</Text>
          <Text>Blog</Text>
          <Text>Contato</Text>
        </Stack>
        <Text>© 2021 Grupo 8 (Turma 8). Todos direitos reservados</Text>
      </Flex>
    </Box>
  );
}
