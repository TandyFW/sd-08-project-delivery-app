import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  name,
  label,
  onChange,
  value,
  datatestid,
  placeholder,
}) => (
  <label htmlFor={ name }>
    {label}
    <input
      type={ type }
      name={ name }
      onChange={ onChange }
      value={ value }
      data-testid={ datatestid }
      placeholder={ placeholder }
    />
  </label>
);

Input.propTypes = {
  datatestid: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  label: '',
  value: '',
  name: '',
  onChange: null,
};

export default Input;
