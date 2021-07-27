import { TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function InputAdmin(props) {
  const { label, datatest, onChange } = props;
  return (
    <TextField
      id="standard-basic"
      datatest-id={ datatest }
      label={ label }
      onChange={ onChange }
    />
  );
}

InputAdmin.propTypes = {
  label: PropTypes.string.isRequired,
  datatest: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputAdmin;
