import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const HeaderOrderId = ({ id, testId }) => (
  <Typography
    variant="h4"
    color="textPrimary"
    data-testid={ testId }
  >
    { `PEDIDO ${id}` }
  </Typography>
);

HeaderOrderId.propTypes = {
  testId: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HeaderOrderId;
