import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ testid, message }) => (
  <div>
    <p data-testid={ testid }>{ message }</p>
  </div>
);

export default Error;

Error.propTypes = {
  testid: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
