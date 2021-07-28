import { Box, Button, ButtonGroup } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function QuantitySelector(props) {
  const { setCount, count, id } = props;
  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup
        variant="contained"
        color="primary"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        <Button
          onClick={ () => {
            if (count > 0) {
              setCount(count - 1);
            }
          } }
        >
          -

        </Button>
        <Button
          disabled
          data-testid={ `customer_products__input-card-quantity-${id}` }
        >
          { count }

        </Button>
        <Button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => { setCount(count + 1); } }
        >
          +

        </Button>
      </ButtonGroup>
    </Box>
  );
}

QuantitySelector.propTypes = {
  setCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default QuantitySelector;
