import React, { useContext } from 'react';
import { Flex, Image, Box, Link, Button, Heading } from '@chakra-ui/react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import logo from '../images/Neto_Logo_BG_Orange_Transp.png';

const ITEM1 = 'customer_products__element-navbar-link-products';
const ITEM2 = 'customer_products__element-navbar-link-orders';
const NICK = 'customer_products__element-navbar-user-full-name';
const SAIR = 'customer_products__element-navbar-link-logout';
export default function Header() {
  const { user, route } = useContext(DeliveryAppContext);

  const clear = () => localStorage.clear();
  return (
    <Flex justifyContent="space-between" bg="black" alignItems="center">
      <Box p="2">
        <Image
          src={ logo }
          height="12"
        />
      </Box>
      <Box p="2">
        {route === 'customer'
          && (
            <Link href="/customer/products" p="2">
              <Button
                type="button"
                data-testid={ `${ITEM1}` }
                variant="link"
                color="white"
                fontSize="2xl"
                transform="skewX(-12deg)"
              >
                Produtos
              </Button>
            </Link>)}
        {route !== 'administrator'
          && (
            <Link href={ `/${route}/orders` } marginLeft="20">
              <Button
                type="button"
                data-testid={ `${ITEM2}` }
                variant="link"
                color="white"
                fontSize="2xl"
                transform="skewX(-12deg)"
              >
                Meus Pedidos
              </Button>
            </Link>)}
        {route === 'administrator'
        && (
          <Button
            type="button"
            data-testid={ `${ITEM1}` }
          >
            GERENCIAR USUÁRIOS
          </Button>)}
      </Box>
      <Flex p="2">
        <Heading
          as="h3"
          color="white"
          data-testid={ `${NICK}` }
          marginRight="15"
          transform="skewX(-12deg)"
        >
          { user.name }
        </Heading>
        <Link href="/">
          <Button
            type="button"
            onClick={ clear }
            data-testid={ `${SAIR}` }
          >
            SAIR
          </Button>
        </Link>
      </Flex>
    </Flex>
    // <header>
    //   {route === 'customer'
    //     && (
    //       <Link to="/customer/products">
    //         <button
    //           type="button"
    //           data-testid={ `${ITEM1}` }
    //         >
    //           PRODUTOS
    //         </button>
    //       </Link>)}
    //   {route !== 'administrator'
    //     && (
    //       <Link to={ `/${route}/orders` }>
    //         <button
    //           type="button"
    //           data-testid={ `${ITEM2}` }
    //         >
    //           MEUS PEDIDOS
    //         </button>
    //       </Link>)}
    //   {route === 'administrator'
    //     && (
    //       <button
    //         type="button"
    //         data-testid={ `${ITEM1}` }
    //       >
    //         GERENCIAR USUÁRIOS
    //       </button>)}
    //   <h3 data-testid={ `${NICK}` }>{ user.name }</h3>
    //   <Link to="/">
    //     <button
    //       type="button"
    //       onClick={ clear }
    //       data-testid={ `${SAIR}` }
    //     >
    //       SAIR
    //     </button>
    //   </Link>
    // </header>
  );
}
