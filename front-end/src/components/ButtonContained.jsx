import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function ButtonContained(props) {
  const { type, onClick, data, disabled, text } = props;

  return (
    <Button
      variant="contained"
      type={ type }
      onClick={ onClick }
      data-testid={ data }
      disabled={ disabled }
    >
      { text }
    </Button>
  );
}

ButtonContained.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonContained;
