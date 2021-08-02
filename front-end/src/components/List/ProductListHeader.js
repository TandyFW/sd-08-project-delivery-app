import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProductListHeader,
  Item,
  Description,
  Remover,
} from '../../styles/components/List/ProductListHeader';

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

ProductListHeader.defaultProps = {
  removable: false,
};

ProductListHeader.propTypes = {
  removable: PropTypes.bool,
};

export default ProductListHeader;
