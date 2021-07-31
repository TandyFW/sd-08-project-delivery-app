import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, label, onClick, datatestid, disabled = true }) => (

  <button
    className={ className }
    type="button"
    onClick={ onClick }
    data-testid={ datatestid }
    disabled={ disabled }
  >
    { label }
  </button>
);

Button.propTypes = {
  datatestid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
