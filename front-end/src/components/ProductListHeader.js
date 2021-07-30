import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import ListHeader from './ListHeader';

const StyledProductListHeader = styled(ListHeader)`> * {
    display: flex;
    flex-basis: 130px;
    font-size: 1rem;
    justify-content: center;
  }
`;

const Item = styled.p`flex-basis: 70px;
`;

const Description = styled.p`flex: 1;
  justify-content: flex-start;
  padding-left: 20px;
`;

const Remover = styled.p`flex-basis: 170px;
`;

const ProductListHeader = ({ removable }) => (
  <StyledProductListHeader>
    <Item>Item</Item>
    <Description>Descrição</Description>
    <p>Quantidade</p>
    <p>Valor unitário</p>
    <p>Sub-total</p>
    { removable && <Remover>Remover item</Remover> }
  </StyledProductListHeader>
);

ProductListHeader.propTypes = {
  removable: PropTypes.bool.isRequired,
};

export default ProductListHeader;
