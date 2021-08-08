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
      <Field color={ colors.indigo } txtColor={ colors.white } center>
        R$
        <span data-testid={ `${prefix}element-order-table-unit-price-${index}` }>
          {Number(unitPrice).toFixed(2).replace('.', ',')}
        </span>
      </Field>
      <Field color={ colors.dodgerblue } txtColor={ colors.white } center>
        R$
        <span data-testid={ `${prefix}element-order-table-sub-total-${index}` }>
          {Number(totalPrice).toFixed(2).replace('.', ',')}
        </span>
      </Field>
    </Container>
  );
}

ListItem.propTypes = {
  prefix: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitPrice: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default ListItem;
