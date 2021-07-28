import React from 'react';
import PropTypes from 'prop-types';

function OrderStatus({ status, testId }) {
  return (
    <div
      data-testid={ testId }
    >
      {status}
    </div>
  );
}

OrderStatus.propTypes = {
  status: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default OrderStatus;
