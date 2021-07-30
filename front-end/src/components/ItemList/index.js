import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerItem,
  ContainerDescription,
  ContainerQuantity,
  ContainerUnitValue,
  ContainerTotalValue,
  DeleteItem,
} from './Styled';
import { Context } from '../../Context';

export default function ItemList(props) {
  const { products, setProducts, totalPrice, setTotalPrice } = useContext(Context);
  const { item, description, quantity, unitaryValue, index } = props;
  const totalValue = quantity * parseFloat(unitaryValue);

  const removeItem = () => {
    const updatedProducts = products
      .map((product) => (product.id === item ? { ...product, quantity: 0 } : product));
    setProducts(updatedProducts);
    setTotalPrice(totalPrice - totalValue);
  };

  return (
    <Container>
      <ContainerItem
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {` ${index + 1} `}
      </ContainerItem>
      <ContainerDescription
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {` ${description} `}
      </ContainerDescription>
      <ContainerQuantity
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {` ${quantity} `}
      </ContainerQuantity>
      <ContainerUnitValue
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {` ${unitaryValue.replace(/\./, ',')} `}
      </ContainerUnitValue>
      <ContainerTotalValue
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {` ${totalValue.toFixed(2).replace(/\./, ',')} `}
      </ContainerTotalValue>
      <DeleteItem
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        onClick={ removeItem }
      >
        Remover
      </DeleteItem>
    </Container>
  );
}

ItemList.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitaryValue: PropTypes.string.isRequired,
};
