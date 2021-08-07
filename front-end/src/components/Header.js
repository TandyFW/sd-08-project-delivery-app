import React, { useContext } from 'react';
import { Flex, Image, Box, Button, Text, Divider,
  Center } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import logo from '../images/Neto_Logo_Brand_Transp.png';

const ITEM1 = 'customer_products__element-navbar-link-products';
const ITEM2 = 'customer_products__element-navbar-link-orders';
const NICK = 'customer_products__element-navbar-user-full-name';
const SAIR = 'customer_products__element-navbar-link-logout';
export default function Header() {
  const { user, route } = useContext(DeliveryAppContext);

  const clear = () => localStorage.clear();
  return (
    <Flex justifyContent="space-between" bg="black" alignItems="flex-end">
      <Box p="2">
        <Image
          src={ logo }
          height="12"
        />
      </Box>
      <Flex p="2" alignItems="center">
        <Box p="2">
          {route === 'customer'
            && (
              <Link to="/customer/products">
                <Button
                  type="button"
                  data-testid={ `${ITEM1}` }
                  variant="link"
                  color="white"
                  fontSize="md"
                  transform="skewX(-12deg)"
                >
                  Produtos
                </Button>
              </Link>)}
          {route !== 'administrator'
            && (
              <Link to={ `/${route}/orders` }>
                <Button
                  type="button"
                  data-testid={ `${ITEM2}` }
                  variant="link"
                  color="white"
                  fontSize="md"
                  transform="skewX(-12deg)"
                  marginLeft="5"
                >
                  Meus Pedidos
                </Button>
              </Link>)}
          {route === 'administrator'
          && (
            <Button
              type="button"
              data-testid={ `${ITEM1}` }
              variant="link"
              fontSize="md"
              transform="skewX(-12deg)"
              color="white"
            >
              Gerenciar Usuários
            </Button>)}
        </Box>
        <Center height="30px">
          <Divider orientation="vertical" marginRight="5" marginLeft="5" />
        </Center>
        <Text
          color="white"
          data-testid={ `${NICK}` }
          marginRight="15"
          transform="skewX(-12deg)"
          fontSize="sm"
        >
          { user.name }
        </Text>
        <Link to="/">
          <Button
            type="button"
            onClick={ clear }
            bg="white"
            _hover="none"
            height="8"
            width="8"
            data-testid={ `${SAIR}` }
          >
            <CloseIcon />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
