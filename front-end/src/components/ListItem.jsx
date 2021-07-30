import React from 'react';
import PropTypes from 'prop-types';
import { Container, Field } from '../styles/components/ListItem.styled';
import colors from '../styles/colors';

function ListItem({
  prefix,
  index,
  description,
  quantity,
  unitPrice,
  totalPrice,
}) {
  return (
    <Container>
      <Field
        data-testid={ `${prefix}element-order-table-item-number-${index}` }
        color={ colors.mediumseagreen }
        center
      >
        {index}
      </Field>
      <Field
        data-testid={ `${prefix}element-order-table-name-${index}` }
        color={ colors.whitesmoke }
      >
        {description}
      </Field>
      <Field
        data-testid={ `${prefix}element-order-table-quantity-${index}` }
        color={ colors.teal }
        txtColor={ colors.white }
        center
      >
        {quantity}
      </Field>
      <Field
        data-testid={ `${prefix}element-order-table-unit-price-${index}` }
        color={ colors.indigo }
        txtColor={ colors.white }
        center
      >
        {unitPrice}
      </Field>
      <Field
        data-testid={ `${prefix}element-order-table-sub-total-${index}` }
        color={ colors.dodgerblue }
        txtColor={ colors.white }
        center
      >
        {totalPrice}
      </Field>
    </Container>
  );
}

ListItem.propTypes = {
  prefix: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  unitPrice: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default ListItem;