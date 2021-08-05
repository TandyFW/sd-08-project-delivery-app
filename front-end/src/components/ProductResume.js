import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/CartContext';
import productType from '../types/product';
import {
  Wrapper,
  Id,
  Name,
  Quantity,
  UnitPrice,
  SubTotal,
  RemoveButton,
} from '../styles/components/ProductResume';

const ProductResume = ({ testId, index, product, quantity, removable }) => {
  const { id, name, price } = product;
  const { removeCartItem } = useContext(CartContext);

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
  quantity: PropTypes.number.isRequired,
};

export default ProductResume;
