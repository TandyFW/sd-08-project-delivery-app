import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Image,
  Text, Input, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import DeliveryAppContext from '../context/DeliveryAppContext';

export default function ProductCard({ data }) {
  const { itemsList, setItemsList } = useContext(DeliveryAppContext);
  const { id, price, urlImage, name } = data;
  const [quantity, setQuantity] = useState(0);

  const noZero = (list) => {
    const clearZero = list.filter((item) => item.quantity !== 0);
    setItemsList(clearZero);
  };

  const updateProductList = () => {
    const currentList = itemsList.filter((item) => item.quantity !== 0);
    if (currentList.length) {
      const filteredList = currentList.filter((item) => item.productId !== id);

      const updatedList = [
        ...filteredList,
        {
          productId: id,
          name,
          quantity,
          unitaryPrice: +price,
          itemsPrice: (+price * quantity).toFixed(2),
        },
      ];
      return noZero(updatedList);
    }
    if (quantity > 0) {
      return noZero([
        ...currentList,
        {
          productId: id,
          name,
          quantity,
          unitaryPrice: +price,
          itemsPrice: (+price * quantity).toFixed(2),
        },
      ]);
    }
  };

  const incrementItem = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decrementItem = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    } else if (quantity === 0) {
      setQuantity(0);
    }
  };

  const chaceQuantity = () => {
    const newQuantity = document.querySelector(`#inputProduct${id}`);
    setQuantity(newQuantity.value);
  };

  useEffect(() => updateProductList(), [quantity]);

  // useEffect(() => {
  //   if (quantity > 0) {
  //     return localStorage.setItem('currentItemsList', JSON.stringify(itemsList));
  //   }
  // },
  // [itemsList, quantity]);

  return (
    <Box
      borderWidth="1px"
      borderColor="black"
      borderRadius="lg"
      overflow="hidden"
      textAlign="center"
      margin="15"
      bg={ useColorModeValue('white', 'gray.700') }
    >
      <Text
        bg="black"
        color={ useColorModeValue('white', 'gray.700') }
        className="card-price"
        fontWeight="bold"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { `${price.replace('.', ',')}` }
      </Text>
      <Image
        src={ urlImage }
        alt={ name }
        className="card-img"
        height="200px"
        display="inline"
        alignContent="center"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <Box
        as="p"
        mt="1"
        fontWeight="bold"
        lineHeight="tight"
        isTruncated
        transform="skewX(-12deg)"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </Box>
      <Flex>
        <Button
          borderRadius="none"
          bg="black"
          size="sm"
          type="button"
          onClick={ incrementItem }
          className="btn-card-increment"
          id="btnCardIncrement"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          <AddIcon color="white" />
        </Button>
        <Input
          focusBorderColor="black"
          borderColor="black"
          borderRadius="none"
          textAlign="center"
          size="sm"
          id={ `inputProduct${id}` }
          className="card-display-quantity"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantity }
          onChange={ chaceQuantity }
          type="number"
        />
        <Button
          bg="black"
          borderRadius="none"
          size="sm"
          type="button"
          onClick={ decrementItem }
          className="btn-card-decrement"
          id="btnCardDecrement"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          <MinusIcon color="white" />
        </Button>
      </Flex>
    </Box>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.string,
    urlImage: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
