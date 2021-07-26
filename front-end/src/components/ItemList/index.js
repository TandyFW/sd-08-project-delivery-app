import React from 'react';
import PropTypes from 'prop-types';

import { Container,
  ContainerItem,
  ContainerDescription,
  ContainerQuantity,
  ContainerUnitValue,
  ContainerTotalValue,
  DeleteItem,
} from './Styled';

export default function ItemList(props) {
  const { item, description, quantity, unitaryValue, totalValue, index } = props;

  return (
    <Container>
      <ContainerItem
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {` ${item} `}
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
        {` ${unitaryValue} `}
      </ContainerUnitValue>
      <ContainerTotalValue
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {` ${totalValue} `}
      </ContainerTotalValue>
      <DeleteItem
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        // onClick={}
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
  unitaryValue: PropTypes.number.isRequired,
  totalValue: PropTypes.number.isRequired,
};
