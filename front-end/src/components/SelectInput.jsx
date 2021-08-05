import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ options, data }) => (
  <select data-testid={ data }>
    { options.map(({ id, name }) => (
      <option key={ id } value={ id }>{ name }</option>
    )) }
  </select>
);

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.string.isRequired,
};

export default SelectInput;
