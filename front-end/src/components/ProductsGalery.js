import React, { useContext, useEffect, useState } from 'react';
import { Flex, Spinner, Box, Link, Button } from '@chakra-ui/react';
import DeliveryAppContext from '../context/DeliveryAppContext';
import Header from './Header';
import ProductCard from './ProductCard';

export default function ProductsGalery() {
  const { cardsList, route, totalPrice } = useContext(DeliveryAppContext);
  const [isLoading, setIsLoading] = useState(true);

  const setLoadingMessage = () => {
    if (!cardsList.length) return setIsLoading(true);
    if (cardsList.length) return setIsLoading(false);
  };

  useEffect(() => setLoadingMessage(), [cardsList]);

  const newPrice = totalPrice.toString().replace('.', ',');

  if (isLoading) {
    return (
      <Flex
        height="100vh"
        bg="orange"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner textAlign="center" size="xl" />
      </Flex>
    );
  }

  return (
    <>
      <Header route={ route } />
      <Flex flexWrap="wrap" justifyContent="space-between" bg="orange">
        {cardsList.map((card, index) => <ProductCard key={ index } data={ card } />)}
        <Flex
          bg="black"
          position="fixed"
          justifyContent="center"
          top="500"
          left="0"
          paddingTop="5"
          width="60"
          opacity="0.65"
        >
          <Box color="white">
            Ver carrinho: R$
          </Box>
          <Link
            href="/customer/checkout"
            marginBottom="5"
            className="btn-link-checkout"
            data-testid="customer_products__checkout-bottom-value"
          >
            <Button
              type="button"
              data-testid="customer_products__button-cart"
              disabled={ totalPrice === '0.00' }
              variant="link"
              color="white"
            >
              { newPrice }
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
