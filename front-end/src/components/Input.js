import React from 'react';
import PropTypes from 'prop-types';

function Input({ id, name, onChange, placeholder, type, value }) {
  return (
    <label htmlFor={ id }>
      <p>{ name }</p>
      <input
        data-testid={ id }
        id={ id }
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        type={ type }
        value={ value }
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
