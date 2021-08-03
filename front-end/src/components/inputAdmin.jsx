import { TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function InputAdmin(props) {
  const { label, data, onChange } = props;
  return (
    <TextField
      id="standard-basic"
      inputProps={ { 'data-testid': data } }
      label={ label }
      onChange={ onChange }
    />
  );
}

InputAdmin.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputAdmin;
