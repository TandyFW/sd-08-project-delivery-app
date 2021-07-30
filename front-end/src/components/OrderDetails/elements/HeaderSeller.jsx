import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const HeaderSeller = ({ seller, testId }) => (
  !seller ? null : (
    <Typography
      variant="subtitle1"
      color="textPrimary"
      data-testid={ testId }
    >
      { `P. Vend: ${seller}` }
    </Typography>
  )
);

HeaderSeller.propTypes = {
  seller: PropTypes.string,
  testId: PropTypes.string.isRequired,
};

HeaderSeller.defaultProps = {
  seller: '',
};

export default HeaderSeller;
