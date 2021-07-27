import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function ButtonContained(props) {
  const { type, onClick, datatest, text } = props;

  return (
    <Button
      variant="contained"
      type={ type }
      onClick={ onClick }
      datatest-id={ datatest }
    >
      { text }
    </Button>
  );
}

ButtonContained.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  datatest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonContained;
