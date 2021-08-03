import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@material-ui/core';

const SelectInput = ({ options }) => (
  <Select>
    { options.map(({ id, name }) => (
      <option key={ id } value={ id }>{ name }</option>
    )) }
  </Select>
);

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectInput;
