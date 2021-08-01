import React from 'react';
import PropTypes from 'prop-types';

function Field({ legend, value, onChange }) {
  const handleInput = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return (
    <>
      <label htmlFor={ `${legend}-input` }>{ legend }</label>
      <input
        type="text"
        id={ `${legend}-input` }
        value={ value }
        onChange={ (e) => handleInput(e) }
      />
    </>
  );
}

Field.propTypes = {
  legend: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;
