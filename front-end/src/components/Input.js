import React from 'react';
import PropTypes from 'prop-types';

function Input({ legend, value, onChange, testid }) {
  const handleInput = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return (
    <>
      <label htmlFor={ `${legend}-input` }>{ legend }</label>
      <input
        className="form-control"
        type="text"
        id={ `${legend}-input` }
        data-testid={ testid }
        value={ value }
        onChange={ handleInput }
      />
    </>
  );
}

Input.propTypes = {
  testid: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
