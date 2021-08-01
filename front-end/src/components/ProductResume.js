import styled from 'styled-components';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/CartContext';
import productType from '../types/product';

const Wrapper = styled.div`
  border-radius: 8px;
  display: flex;
  overflow: hidden;

  > * {
    align-items: center;
    display: flex;
    flex-basis: 130px;
    font-size: 1.5rem;
    justify-content: center;
    padding: 10px;
  }
`;

const Id = styled.p`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-basis: 70px;
  font-weight: 700;
`;

const Name = styled.p`
  background-color: rgba(234, 241, 239, 1);
  flex: 1;
  justify-content: flex-start;
  padding-left: 20px;
`;

const Quantity = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 700;
`;

const UnitPrice = styled.p`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 700;
`;

const SubTotal = styled.p`
  background-color: ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 700;
`;

const RemoveButton = styled.p`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  flex-basis: 170px;
  font-weight: 700;
`;

const ProductResume = ({ testId, index, product, removable }) => {
  const { id, name, price } = product;
  const { cart, removeCartItem } = useContext(CartContext);
  const quantity = cart[product.id];

  const renderRemoveButton = () => (
    <RemoveButton
      data-testid={ `${testId}__element-order-table-remove-${index}` }
      onClick={ () => removeCartItem(id) }
    >
      Remover
    </RemoveButton>
  );

  return (
    <Wrapper>
      <Id data-testid={ `${testId}__element-order-table-item-number-${index}` }>
        { index + 1 }
      </Id>

      <Name data-testid={ `${testId}__element-order-table-name-${index}` }>
        { name }
      </Name>

      <Quantity data-testid={ `${testId}__element-order-table-quantity-${index}` }>
        { quantity }
      </Quantity>

      <UnitPrice>
        R$
        <span data-testid={ `${testId}__element-order-table-unit-price-${index}` }>
          { price.replace('.', ',') }
        </span>
      </UnitPrice>

      <SubTotal>
        R$
        <span data-testid={ `${testId}__element-order-table-sub-total-${index}` }>
          { (price * quantity).toFixed(2).replace('.', ',') }
        </span>
      </SubTotal>

      { removable && renderRemoveButton() }
    </Wrapper>
  );
};

ProductResume.defaultProps = {
  removable: false,
  testId: '',
};

ProductResume.propTypes = {
  removable: PropTypes.bool,
  product: productType.isRequired,
  index: PropTypes.number.isRequired,
  testId: PropTypes.string,
};

export default ProductResume;
